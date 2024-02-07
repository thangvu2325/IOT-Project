import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { UserEntity } from 'src/users/user.entity';
import { LoginDto } from './Dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { RedisService } from 'src/redis/redis.service';
import { UsersDto } from 'src/users/users.dto';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { CustomersService } from 'src/customers/Customers.service';
const EXPIRE_TIME = 20 * 1000;

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly userService: UsersService,
    private readonly customersService: CustomersService,
    private jwtService: JwtService,
    private readonly redisTokenService: RedisService,
  ) {}
  async login(dto: LoginDto) {
    const user = await this.validateUser(dto);
    const payload = {
      username: user.username,
      sub: {
        role: user.role,
      },
    };
    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: '20s',
      secret: process.env.jwtSecretKey,
    });

    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '7d',
      secret: process.env.jwtRefreshTokenKey,
    });
    // Lưu Refresh Token vào Redis
    await this.redisTokenService.saveRefreshToken(user.id, refreshToken);
    return {
      user: plainToClass(
        UsersDto,
        {
          ...user,
        },
        { excludeExtraneousValues: true },
      ),
      backendTokens: {
        accessToken,
        refreshToken,
        expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
      },
    };
  }
  async register(dto: UsersDto) {
    try {
      const newUser = await this.userService.save(dto);
      return newUser;
    } catch (error) {
      console.error('Error while registering user:', error);
      throw new Error('Failed to register user');
    }
  }

  async logout(userId: string): Promise<{ result: string }> {
    // Lưu Refresh Token vào Redis
    await this.redisTokenService.deleteTokenForUser(userId);
    return { result: 'success' };
  }
  async validateUser(dto: LoginDto) {
    const user = await this.userService.findOne({
      where: {
        username: dto.username,
      },
    });
    if (user && (await compare(dto.password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException();
  }

  async refreshToken(userDto: UsersDto) {
    const user = await this.userService.findOne({
      where: {
        username: userDto.username,
      },
    });
    const payload = {
      username: user.username,
      sub: {
        role: user.role,
      },
    };
    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: '20s',
      secret: process.env.jwtSecretKey,
    });
    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '7d',
      secret: process.env.jwtRefreshTokenKey,
    });
    // Lưu Refresh Token vào Redis
    await this.redisTokenService.saveRefreshToken(user.id, refreshToken);

    return {
      user: plainToClass(
        UsersDto,
        {
          ...user,
        },
        { excludeExtraneousValues: true },
      ),
      backendTokens: {
        accessToken,
        refreshToken,
        expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
      },
    };
  }
}
