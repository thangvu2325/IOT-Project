import { Expose, Transform } from 'class-transformer';
import { BaseDto } from 'src/common/base.dto';

export class CustomersDto extends BaseDto {
  @Transform(({ obj }) => obj.firstName + ' ' + obj.lastName)
  @Expose()
  fullName: string;
  @Expose()
  email: string;
  @Expose()
  phone: string;
}
