import { FunctionComponent, ReactNode } from "react";
import { View, Text } from "../Themed";

interface FieldProps {
  left?: ReactNode | string;
  right?: ReactNode | string;
}

const Field: FunctionComponent<FieldProps> = ({ left, right }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 4,
        paddingVertical: 12,
      }}
    >
      <Text
        style={{ display: "flex", alignItems: "center", margin: 0, padding: 0 }}
      >
        {left}
      </Text>
      <Text
        style={{ display: "flex", alignItems: "center", margin: 0, padding: 0 }}
      >
        {right}
      </Text>
    </View>
  );
};

export default Field;
