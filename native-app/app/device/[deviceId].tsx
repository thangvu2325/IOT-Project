import CircularProgress from "@/components/CircularProgress";
import { Text, View } from "@/components/Themed";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { SafeAreaView, ImageBackground, useColorScheme } from "react-native";
import {
  Button,
  Dialog,
  IconButton,
  Portal,
  Surface,
  Switch,
} from "react-native-paper";
import Colors from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LayoutHasHeaderContext } from "@/layouts/LayoutHasHeader";

interface DeviceScreenProps {} // Extend with StackScreenProps

const DeviceScreen: FunctionComponent<DeviceScreenProps> = () => {
  const { setTitle } = useContext(LayoutHasHeaderContext);
  useEffect(() => {
    setTitle("Thiết Bị 1");
  }, []);
  const colorScheme = useColorScheme();
  // Switch
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  // Modal
  const route = useRouter();

  // Dialog
  const [visibleDialog, setVisibleDialog] = useState(false);

  const showDialog = () => setVisibleDialog(true);
  const hideDialog = () => setVisibleDialog(false);
  const handleAcceptTurnOffDevice = () => {
    setIsSwitchOn(!isSwitchOn);
    hideDialog();
  };
  return (
    <SafeAreaView style={{ display: "flex", height: "100%" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: 46,
          height: 120,
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 16,
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 9999,
            backgroundColor: Colors[colorScheme ?? "light"].primary,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
            1 phút trước
          </Text>
        </View>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 9999,
            backgroundColor: Colors[colorScheme ?? "light"].primary,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 28, fontWeight: "600" }}>
            48
          </Text>
        </View>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 9999,
            backgroundColor: Colors[colorScheme ?? "light"].primary,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons name="signal" size={48} color="#fff" />
        </View>
        <BatteryCircle
          width={100}
          height={100}
          textSize={12}
          value={30}
        ></BatteryCircle>
      </View>

      <View
        style={{
          backgroundColor: Colors[colorScheme ?? "light"].primary,
          borderRadius: 12,
          marginHorizontal: 24,
          marginVertical: 24,
          paddingVertical: 24,
          paddingHorizontal: 24,
          position: "relative",
        }}
      >
        <Surface
          mode="elevated"
          elevation={5}
          style={{
            alignSelf: "center",
            borderRadius: 9999,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <CircularProgress
              height={200}
              width={200}
              value={300}
              targetValue={1000}
              status={isSwitchOn}
            ></CircularProgress>
          </View>
        </Surface>
        <View
          style={{
            position: "absolute",
            right: 12,
            top: 4,
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color="red"
          />

          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              fontWeight: "600",
            }}
          >
            {isSwitchOn ? "ON" : "OFF"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Button
            mode="contained"
            onPress={() => {}}
            buttonColor={"#fff"}
            loading={true}
            rippleColor={"#ccc"}
            icon={"reload"}
            style={{
              borderRadius: 6,
              marginTop: 24,
            }}
            contentStyle={{
              height: 48,
            }}
            labelStyle={{
              color: Colors[colorScheme ?? "light"].text,
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            Tải Lại
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              route.push("/device/detail/");
            }}
            buttonColor={"#fff"}
            rippleColor={"#ccc"}
            style={{
              borderRadius: 6,
              marginTop: 24,
            }}
            contentStyle={{
              height: 48,
            }}
            labelStyle={{
              color: Colors[colorScheme ?? "light"].text,
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            Thông tin
          </Button>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <IconButton
          icon="power-standby"
          size={72}
          onPress={showDialog}
          iconColor={
            !isSwitchOn ? Colors[colorScheme ?? "light"].primary : "red"
          }
        />
      </View>
      <Portal>
        <Dialog visible={visibleDialog} onDismiss={hideDialog}>
          <Dialog.Title>Thông Báo</Dialog.Title>
          <Dialog.Content>
            <Text style={{ fontSize: 16 }}>
              Bạn có muốn {isSwitchOn ? "tắt" : "mở"} thiết bị không!
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button onPress={handleAcceptTurnOffDevice}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </SafeAreaView>
  );
};

export default DeviceScreen;

// Battery
export const BatteryCircle: FunctionComponent<{
  value: number;
  width?: number;
  height?: number;
  textSize?: number;
}> = ({ value, width = 160, height = 160, textSize = 20 }) => {
  return (
    <ImageBackground
      source={require("../../assets/images/battery.png")}
      style={{
        width,
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -8,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: textSize,
          fontWeight: "700",
        }}
      >
        {value}%
      </Text>
    </ImageBackground>
  );
};
