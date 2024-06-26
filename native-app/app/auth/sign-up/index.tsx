import { Text, View } from "@/components/Themed";
import { Alert, StyleSheet, useColorScheme } from "react-native";
import { Button, RadioButton, TextInput } from "react-native-paper";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext, useEffect, useState } from "react";
import { SignUpContext } from "./_layout";
import Colors from "@/constants/Colors";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import authService from "@/services/authService";
import { useRouter } from "expo-router";

type SignUpForm = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  checkRule?: boolean;
};
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
export default function SignUp() {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const ctx = useContext(SignUpContext);
  const colorScheme = useColorScheme();
  const route = useRouter();
  const formSchema = z.object({
    email: z.string().email("Vui lòng nhập Email hợp lệ"),
    firstName: z.string().min(3, "Nhập sai tên"),
    lastName: z.string().min(3, "Vui lòng nhập đúng họ của bạn"),
    phone: z.string().regex(phoneRegex, "Vui lòng nhập số điện thoại hợp lệ"),
    password: z.string().min(8, "Mật khẩu phải có ít nhất 8 kí tự"),
    checkRule: z.literal<boolean>(true, {
      errorMap: () => ({
        message: "Vui lòng chấp thuận điều khoản",
      }),
    }),
  });
  useEffect(() => {
    ctx.setTitle("Đăng ký làm người dùng mới");
  }, []);
  // Form
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      password: "",
      rePassword: "",
      checkRule: false,
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: SignUpForm) => {
    const { checkRule, ...props } = data;
    try {
      const res = await authService.registerReq(props);
      Alert.alert("Successful", JSON.stringify(res));
    } catch (error: any) {
      Alert.alert(error?.message ?? "");
    }
  };
  return (
    <View
      style={{
        marginTop: 20,
        marginHorizontal: 24,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 24, color: "#2C2929", fontWeight: "700" }}>
        Thông Tin Đăng Ký
      </Text>
      <View
        style={{
          position: "relative",
          gap: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 15,
          }}
        >
          <Controller
            control={control}
            name={"lastName"}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <View style={{ width: "60%" }}>
                <TextInput
                  outlineStyle={{ borderRadius: 24 }}
                  mode="outlined"
                  error={!!error}
                  label=" Họ và Tên Đệm"
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
            name={"firstName"}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <View style={{ flex: 1 }}>
                <TextInput
                  outlineStyle={{ borderRadius: 24 }}
                  mode="outlined"
                  error={!!error}
                  label=" Tên"
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
        </View>
        <Controller
          control={control}
          name={"email"}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <View style={{ position: "relative" }}>
              <TextInput
                outlineStyle={{ borderRadius: 24 }}
                mode="outlined"
                error={!!error}
                label=" Email"
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
          name={"phone"}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <View style={{ position: "relative" }}>
              <TextInput
                outlineStyle={{ borderRadius: 24 }}
                mode="outlined"
                error={!!error}
                label=" Số Điện Thoại"
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
            <View style={{ position: "relative" }}>
              <TextInput
                secureTextEntry={secureTextEntry}
                outlineStyle={{ borderRadius: 24 }}
                mode="outlined"
                error={!!error}
                label=" Mật Khẩu"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                right={
                  <TextInput.Icon
                    icon={"account"}
                    onPress={() => {
                      setSecureTextEntry(!secureTextEntry);
                      return false;
                    }}
                  />
                }
              />
              {error && (
                <Text style={styles.errorMessage}>{error.message}</Text>
              )}
            </View>
          )}
        />
      </View>
      <Controller
        control={control}
        name={"checkRule"}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <View style={{ position: "relative" }}>
            <View
              style={{
                marginTop: 42,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View>
                <RadioButton
                  value={value ? "on" : "off"}
                  status={value ? "checked" : "unchecked"}
                  onPress={() => {
                    onChange(!value);
                  }}
                />
              </View>
              <Text
                style={{
                  color: "#000",
                  fontSize: 15,
                  fontWeight: "500",
                  width: 215,
                  textAlign: "center",
                }}
              >
                I accept terms and conditions for this app.{"\n"}
                <Text
                  style={{
                    color: Colors[colorScheme ?? "light"].primary,
                    fontWeight: "700",
                  }}
                >
                  Terms & Conditions
                </Text>
              </Text>
            </View>
            {error && (
              <Text
                style={{
                  color: "red",
                  position: "absolute",
                  bottom: -18,
                  alignSelf: "center",
                }}
              >
                {error.message}
              </Text>
            )}
          </View>
        )}
      />

      <View style={{ marginTop: 56 }}>
        <Button
          mode="contained"
          onPress={() => route.push("/auth/sign-up/verify")}
          // onPress={handleSubmit(onSubmit)}
          buttonColor={Colors[colorScheme ?? "light"].primary}
          style={{
            borderRadius: 24,
          }}
          contentStyle={{
            height: 58,
          }}
          labelStyle={{
            color: "#fff",
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          Tiến Hành
        </Button>
      </View>
    </View>
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
