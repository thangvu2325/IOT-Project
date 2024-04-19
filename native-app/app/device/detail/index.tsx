import { Text, View } from "@/components/Themed";
import FieldList, { item } from "@/components/ui/FieldList";
import { FunctionComponent, useContext, useEffect } from "react";
import { Divider } from "react-native-paper";
import { ScrollView } from "react-native";
import { LayoutHasHeaderContext } from "@/layouts/LayoutHasHeader";

interface DetailScrrenProps {}
const items: item[] = [
  {
    itemKey: 1,
    left: <Text style={{ fontSize: 14, fontWeight: "600" }}>Mã Thiết Bị</Text>,
    right: "FFFFFFFF",
  },
  {
    itemKey: 2,
    left: <Text style={{ fontSize: 14, fontWeight: "600" }}>Tên Thiết Bị</Text>,
    right: "Thiết bị báo khói",
  },
  {
    itemKey: 3,
    left: <Text style={{ fontSize: 14, fontWeight: "600" }}>Imsi</Text>,
    right: "232010883709979",
  },
];
const signalItems: item[] = [
  {
    itemKey: 1,
    left: (
      <Text style={{ fontSize: 14, fontWeight: "600" }}>Băng Tần ( BW )</Text>
    ),
    right: "B3",
  },
  {
    itemKey: 2,
    left: (
      <Text style={{ fontSize: 14, fontWeight: "600" }}>
        Cường độ tín hiệu thu (RSSI)
      </Text>
    ),
    right: -59,
  },
];
const networkItems: item[] = [
  {
    itemKey: 1,
    left: (
      <Text style={{ fontSize: 14, fontWeight: "600" }}>
        Kênh tần số vô tuyến
      </Text>
    ),
    right: "1700",
  },
  {
    itemKey: 2,
    left: (
      <Text style={{ fontSize: 14, fontWeight: "600" }}>
        Số lần thiết bị thay đổi khu vực
      </Text>
    ),
    right: "0",
  },
  {
    itemKey: 3,
    left: (
      <Text style={{ fontSize: 14, fontWeight: "600" }}>
        Số lần thiết bị thay đổi Cell
      </Text>
    ),
    right: "0",
  },
  {
    itemKey: 5,
    left: (
      <Text style={{ fontSize: 14, fontWeight: "600" }}>Mã Cell (CellId)</Text>
    ),
    right: "4294967295",
  },
  {
    itemKey: 6,
    left: (
      <Text style={{ fontSize: 14, fontWeight: "600" }}>
        Trạng thái kết nối
      </Text>
    ),
    right: "2",
  },
  {
    itemKey: 7,
    lelftStyle: { width: 200 },
    left: (
      <Text style={{ fontSize: 14, fontWeight: "600" }}>
        Chế độ mở rộng lắng nghe không liên tục (eDRX)
      </Text>
    ),
    right: "0",
  },
  {
    itemKey: 8,
    left: <Text style={{ fontSize: 14, fontWeight: "600" }}>Địa chỉ IP</Text>,
    right: "10.47.37.34",
  },
  {
    itemKey: 9,
    left: (
      <Text style={{ fontSize: 14, fontWeight: "600" }}>
        Mã di động quốc gia (MCC)
      </Text>
    ),
    right: "452",
  },
  {
    itemKey: 10,
    left: (
      <Text style={{ fontSize: 14, fontWeight: "600" }}>
        Mã mạng di động (MNC)
      </Text>
    ),
    right: "4 (Viettel)",
  },
  {
    itemKey: 11,
    left: (
      <Text style={{ fontSize: 14, fontWeight: "600" }}>
        Công suất tín hiệu thu (RSRP)
      </Text>
    ),
    right: "82",
  },
  {
    itemKey: 12,
    left: (
      <Text style={{ fontSize: 14, fontWeight: "600" }}>
        Chất lượng tín hiệu (RSSI)
      </Text>
    ),
    right: "30",
  },
  {
    itemKey: 13,
    left: (
      <Text style={{ fontSize: 14, fontWeight: "600" }}>
        Thời gian hoạt động được yêu cầu.
      </Text>
    ),
    right: "96",
  },
  {
    itemKey: 14,
    lelftStyle: { width: 200 },
    left: (
      <Text style={{ fontSize: 14, fontWeight: "600" }}>
        Chu kỳ cập nhật khu vực được theo dõi (RequestPeriodicTAU)
      </Text>
    ),
    right: "0",
  },
  {
    itemKey: 15,
    left: (
      <Text style={{ fontSize: 14, fontWeight: "600" }}>Mã khu vực (TAC)</Text>
    ),
    right: "25178",
  },
  {
    itemKey: 16,
    left: (
      <Text style={{ fontSize: 14, fontWeight: "600" }}>
        Thời gian cập nhật
      </Text>
    ),
    right: "01-12-2023 03:04:44Z",
  },
];
const DetailScrren: FunctionComponent<DetailScrrenProps> = () => {
  const { setTitle } = useContext(LayoutHasHeaderContext);
  useEffect(() => {
    setTitle("Thông tin thiết bị");
  }, []);
  return (
    <ScrollView>
      <FieldList style={{ marginTop: 0 }} items={items}></FieldList>
      <Divider style={{ marginVertical: 12 }}></Divider>
      <FieldList
        title={<Text style={{ fontSize: 18 }}>Tín hiệu di động</Text>}
        style={{ marginTop: 0 }}
        items={signalItems}
      ></FieldList>
      <FieldList
        title={<Text style={{ fontSize: 18 }}>Mạng</Text>}
        style={{ marginTop: 0 }}
        items={networkItems}
      ></FieldList>
    </ScrollView>
  );
};

export default DetailScrren;
