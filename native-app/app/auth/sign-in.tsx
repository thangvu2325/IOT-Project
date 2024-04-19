import { router, useRouter } from "expo-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "@/lib/ctx";
import { View, Text } from "@/components/Themed";
import {
  Image,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
  Alert,
} from "react-native";
import { Button, Divider, TextInput } from "react-native-paper";
import { useState } from "react";
import Colors from "@/constants/Colors";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

export type signInType = {
  email: string;
  password: string;
};
export default function SignIn() {
  // const { signIn } = useSession();
  const [text, setText] = useState("");
  const route = useRouter();
  const colorScheme = useColorScheme();
  const formSchema = z.object({
    email: z.string().email("Vui lòng nhập Email hợp lệ"),
    password: z.string().min(8, "Mật khẩu phải có ít nhất 8 kí tự"),
  });
  // Form
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (data: signInType) => {
    Alert.alert("Successful", JSON.stringify(data));
  };
  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            marginTop: 48,
            paddingTop: 52,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
            borderRadius: 20,
          }}
        >
          <Image
            source={require("../../assets/images/landingPage.png")}
            style={{ width: 328, height: 265, paddingRight: 2 }}
          />
        </View>
        <Text
          style={{
            color: Colors[colorScheme ?? "light"].primary,
            textAlign: "center",
            fontSize: 36,
            fontWeight: "700",
          }}
        >
          Đăng Nhập
        </Text>

        <View style={{ marginTop: 48, gap: 16 }}>
          <Text
            style={{
              color: "#2C2929",
              textAlign: "center",
              fontSize: 15,
              fontWeight: "400",
              opacity: 0.4,
            }}
          >
            Thêm thông tin đăng nhập của bạn.
          </Text>
          <View
            style={{
              gap: 15,
              marginHorizontal: 40,
            }}
          >
            <Controller
              control={control}
              name={"email"}
              render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
              }) => (
                <View>
                  <TextInput
                    outlineStyle={{ borderRadius: 24 }}
                    mode="outlined"
                    label=" Email"
                    error={!!error}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                  {error && (
                    <Text style={styles.errorMessage}>{error.message}</Text>
                  )}
                </View>
              )}
            />
            <Controller
              control={control}
              name={"password"}
              render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
              }) => (
                <View>
                  <TextInput
                    outlineStyle={{ borderRadius: 24 }}
                    mode="outlined"
                    label=" Mật Khẩu"
                    error={!!error}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                  {error && (
                    <Text style={styles.errorMessage}>{error.message}</Text>
                  )}
                </View>
              )}
            />
            <Button
              mode="contained"
              onPress={handleSubmit(onSubmit)}
              buttonColor={Colors[colorScheme ?? "light"].primary}
              style={{
                borderRadius: 24,
                marginTop: 12,
              }}
              contentStyle={{
                width: 305,
                height: 58,
              }}
              labelStyle={{
                color: "#fff",
                fontWeight: "700",
                fontSize: 20,
              }}
            >
              Đăng Nhập
            </Button>
          </View>
          <Divider style={{ marginTop: 35 }}></Divider>
          <Text style={{ textAlign: "center" }}>
            Nếu bạn là người dùng mới
            <Text
              style={{
                color: Colors[colorScheme ?? "light"].primary,
                fontWeight: "700",
              }}
            >
              {"\n"}
              Đăng Ký Ngay bay giờ!
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    position: "absolute",
    bottom: -18,
    left: 18,
  },
});
