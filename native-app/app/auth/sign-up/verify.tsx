import { View, Text } from "@/components/Themed";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { SignUpContext } from "./_layout";
import { Button, Divider, TextInput } from "react-native-paper";
import { Link, useRouter } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import Colors from "@/constants/Colors";

interface VerifyScreenProps {}

const VerifyScreen: FunctionComponent<VerifyScreenProps> = () => {
  const ctx = useContext(SignUpContext);
  const route = useRouter();
  const colorScheme = useColorScheme();
  useEffect(() => {
    ctx.setTitle("Xác thực số điện thoại");
  }, []);
  const [text, setText] = useState<string>("");
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
      <View style={{ gap: 12 }}>
        <Text style={{ fontSize: 24, textAlign: "center", fontWeight: "700" }}>
          Nhập mã bảo mật
        </Text>
        <Text
          style={{
            color: "#000",
            fontSize: 15,
            fontWeight: "400",
          }}
        >
          Chúng tôi vừa gửi một đoạn mã bảo mật có 6 kí tự đến{" "}
          <Text
            style={{
              color: Colors[colorScheme ?? "light"].primary,
              fontWeight: "700",
            }}
          >
            số điện thoại 098***
          </Text>
        </Text>
        <View style={{ marginTop: 12 }}>
          <TextInput
            outlineStyle={{ borderRadius: 24 }}
            mode="outlined"
            label=" Mã bảo mật"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <Button
            mode="contained"
            onPress={() => route.push("/(tabs)/")}
            buttonColor={Colors[colorScheme ?? "light"].primary}
            style={{
              borderRadius: 24,
              marginHorizontal: 48,
              marginTop: 24,
            }}
            contentStyle={{
              height: 48,
            }}
            labelStyle={{
              color: "#fff",
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            Tiếp Tục
          </Button>
        </View>
        <Divider></Divider>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          Không nhận được mã bảo vệ ?
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Button
            labelStyle={{
              fontSize: 16,
              textDecorationLine: "underline",
              fontWeight: "600",
              color: Colors[colorScheme ?? "light"].primary,
              marginLeft: 0,
            }}
          >
            Gửi lại SMS
          </Button>
        </View>
      </View>
    </View>
  );
};

export default VerifyScreen;
