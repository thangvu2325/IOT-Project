import { Text, View } from "@/components/Themed";
import { SafeAreaView, StatusBar } from "react-native";
import { Button, IconButton, RadioButton, TextInput } from "react-native-paper";
import { useRouter } from "expo-router";
import React from "react";

export default function SignUp() {
  const [text, setText] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const route = useRouter();
  return (
    <SafeAreaView>
      <StatusBar barStyle={"light-content"}></StatusBar>
      <View
        style={{
          backgroundColor: "#7041EE",
          height: "100%",
        }}
      >
        <View
          style={{
            flex: 1,
            marginTop: 40,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            backgroundColor: "rgba(255,255,255,0.2)",
            display: "flex",
          }}
        >
          <View
            style={{
              flex: 1,
              marginTop: 22,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              backgroundColor: "#f0f0f0",
              overflow: "hidden",
              opacity: 1,
              position: "relative",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <IconButton
                icon="chevron-left"
                iconColor={"#2C2929"}
                size={34}
                onPress={() => route.back()}
              />
              <Text
                style={{ fontSize: 18, color: "#2C2929", fontWeight: "500" }}
              >
                Đăng ký làm người dùng mới
              </Text>
            </View>
            <View
              style={{
                marginTop: 20,
                marginHorizontal: 24,
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ fontSize: 24, color: "#2C2929", fontWeight: "700" }}
              >
                Thông Tin Đăng Ký
              </Text>
              <View
                style={{
                  marginTop: 15,
                  gap: 15,
                }}
              >
                <TextInput
                  outlineStyle={{ borderRadius: 24 }}
                  mode="outlined"
                  label=" Họ và Tên"
                  value={text}
                  onChangeText={(text) => setText(text)}
                />
                <TextInput
                  outlineStyle={{ borderRadius: 24 }}
                  mode="outlined"
                  label=" Email"
                  value={text}
                  onChangeText={(text) => setText(text)}
                />

                <TextInput
                  outlineStyle={{ borderRadius: 24 }}
                  mode="outlined"
                  label=" Số Điện Thoại"
                  value={text}
                  onChangeText={(text) => setText(text)}
                />
                <TextInput
                  outlineStyle={{ borderRadius: 24 }}
                  mode="outlined"
                  label=" Mật Khẩu"
                  value={text}
                  onChangeText={(text) => setText(text)}
                />
                <TextInput
                  outlineStyle={{ borderRadius: 24 }}
                  mode="outlined"
                  label=" Nhập Lại Mật Khẩu"
                  value={text}
                  onChangeText={(text) => setText(text)}
                />
              </View>
              <View
                style={{
                  marginTop: 42,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <View>
                  <RadioButton
                    value="first"
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => setChecked(!checked)}
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
                  <Text style={{ color: "#7041EE", fontWeight: "700" }}>
                    Terms & Conditions
                  </Text>
                </Text>
              </View>
              <View style={{ marginTop: 56 }}>
                <Button
                  mode="contained"
                  onPress={() => route.navigate("/auth/sign-up")}
                  buttonColor="#7041EE"
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
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
