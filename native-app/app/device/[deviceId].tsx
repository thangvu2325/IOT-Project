import CircularProgress from "@/components/CircularProgress";
import { Text, View } from "@/components/Themed";
import { FunctionComponent } from "react";
import { Surface } from "react-native-paper";

interface DeviceScreenProps {} // Extend with StackScreenProps

const DeviceScreen: FunctionComponent<DeviceScreenProps> = () => {
  return (
    <Surface
      mode="flat"
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          marginTop: 40,
        }}
      >
        <Surface
          mode="elevated"
          elevation={5}
          style={{ width: 120, height: 40 }}
        >
          <Text>ABC</Text>
        </Surface>
        <Surface mode="elevated" elevation={5}>
          <View>
            <Text>ABC</Text>
          </View>
        </Surface>
      </View>
      <Surface
        mode="elevated"
        elevation={5}
        style={{
          borderRadius: 999,
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
            status={true}
          ></CircularProgress>
        </View>
      </Surface>
    </Surface>
  );
};

export default DeviceScreen;
