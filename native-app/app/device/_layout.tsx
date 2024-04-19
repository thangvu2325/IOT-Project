import { Slot, router } from "expo-router";
import { FunctionComponent } from "react";
import { Button } from "react-native-paper";
import LayoutHasHeader from "@/layouts/LayoutHasHeader";

interface DeviceLayoutProps {}

const DeviceLayout: FunctionComponent<DeviceLayoutProps> = () => {
  return (
    <LayoutHasHeader
      HeaderRight={
        <Button
          style={{ marginRight: 12 }}
          icon="history"
          mode="text"
          labelStyle={{
            fontSize: 16,
          }}
          onPress={() => router.push("/device/history/notify/")}
        >
          Lịch sử thiết bị
        </Button>
      }
    >
      <Slot></Slot>
    </LayoutHasHeader>
  );
};

export default DeviceLayout;
