import {
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { Text, View } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Avatar,
  Divider,
  IconButton,
  Menu,
  Searchbar,
} from "react-native-paper";
import * as React from "react";
import CircularProgress from "@/components/CircularProgress";
import { deviceType } from "@/types";
import Card from "./_component/card";
import Colors from "@/constants/Colors";
import { router } from "expo-router";

const deviceList: deviceType[] = [
  {
    id: "1",
    deviceId: "2",
    fullname: "2",
    email: "2",
    phone: "2",
    battery: {
      source: "2",
      voltage: 0,
    },
    sim: {
      imsi: "2",
    },
    sensors: {
      smokeValue: 0,
    },
    signal: {
      band: "2",
      deviceNetworkRssiDbm: 0,
      gsmStatus: "2",
      networkReport: {
        absoluteRadioFrequencyChannel: "2",
        areaTacChangeCount: "2",
        cellChangeCount: "2",
        cellId: "2",
        connectionStatus: "2",
        extendedDiscontinuousReception: "2",
        ipAddress: "2",
        mcc: "2",
        mnc: "2",
        referenceSignalReceivedPower: "2",
        referenceSignalReceivedQuality: "2",
        requestedActiveTime: "2",
        requestedPeriodicTrackingAreaUpdate: "2",
        tac: "2",
        updatedAt: new Date(),
      },
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    deviceId: "2",
    fullname: "2",
    email: "2",
    phone: "2",
    battery: {
      source: "2",
      voltage: 0,
    },
    sim: {
      imsi: "2",
    },
    sensors: {
      smokeValue: 0,
    },
    signal: {
      band: "2",
      deviceNetworkRssiDbm: 0,
      gsmStatus: "2",
      networkReport: {
        absoluteRadioFrequencyChannel: "2",
        areaTacChangeCount: "2",
        cellChangeCount: "2",
        cellId: "2",
        connectionStatus: "2",
        extendedDiscontinuousReception: "2",
        ipAddress: "2",
        mcc: "2",
        mnc: "2",
        referenceSignalReceivedPower: "2",
        referenceSignalReceivedQuality: "2",
        requestedActiveTime: "2",
        requestedPeriodicTrackingAreaUpdate: "2",
        tac: "2",
        updatedAt: new Date(),
      },
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    deviceId: "2",
    fullname: "2",
    email: "2",
    phone: "2",
    battery: {
      source: "2",
      voltage: 0,
    },
    sim: {
      imsi: "2",
    },
    sensors: {
      smokeValue: 0,
    },
    signal: {
      band: "2",
      deviceNetworkRssiDbm: 0,
      gsmStatus: "2",
      networkReport: {
        absoluteRadioFrequencyChannel: "2",
        areaTacChangeCount: "2",
        cellChangeCount: "2",
        cellId: "2",
        connectionStatus: "2",
        extendedDiscontinuousReception: "2",
        ipAddress: "2",
        mcc: "2",
        mnc: "2",
        referenceSignalReceivedPower: "2",
        referenceSignalReceivedQuality: "2",
        requestedActiveTime: "2",
        requestedPeriodicTrackingAreaUpdate: "2",
        tac: "2",
        updatedAt: new Date(),
      },
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    deviceId: "2",
    fullname: "2",
    email: "2",
    phone: "2",
    battery: {
      source: "2",
      voltage: 0,
    },
    sim: {
      imsi: "2",
    },
    sensors: {
      smokeValue: 0,
    },
    signal: {
      band: "2",
      deviceNetworkRssiDbm: 0,
      gsmStatus: "2",
      networkReport: {
        absoluteRadioFrequencyChannel: "2",
        areaTacChangeCount: "2",
        cellChangeCount: "2",
        cellId: "2",
        connectionStatus: "2",
        extendedDiscontinuousReception: "2",
        ipAddress: "2",
        mcc: "2",
        mnc: "2",
        referenceSignalReceivedPower: "2",
        referenceSignalReceivedQuality: "2",
        requestedActiveTime: "2",
        requestedPeriodicTrackingAreaUpdate: "2",
        tac: "2",
        updatedAt: new Date(),
      },
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // {
  //   id: "5",
  //   deviceId: "2",
  //   fullname: "2",
  //   email: "2",
  //   phone: "2",
  //   battery: {
  //     source: "2",
  //     voltage: 0,
  //   },
  //   sim: {
  //     imsi: "2",
  //   },
  //   sensors: {
  //     smokeValue: 0,
  //   },
  //   signal: {
  //     band: "2",
  //     deviceNetworkRssiDbm: 0,
  //     gsmStatus: "2",
  //     networkReport: {
  //       absoluteRadioFrequencyChannel: "2",
  //       areaTacChangeCount: "2",
  //       cellChangeCount: "2",
  //       cellId: "2",
  //       connectionStatus: "2",
  //       extendedDiscontinuousReception: "2",
  //       ipAddress: "2",
  //       mcc: "2",
  //       mnc: "2",
  //       referenceSignalReceivedPower: "2",
  //       referenceSignalReceivedQuality: "2",
  //       requestedActiveTime: "2",
  //       requestedPeriodicTrackingAreaUpdate: "2",
  //       tac: "2",
  //       updatedAt: new Date(),
  //     },
  //   },
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // },
  // {
  //   id: "6",
  //   deviceId: "2",
  //   fullname: "2",
  //   email: "2",
  //   phone: "2",
  //   battery: {
  //     source: "2",
  //     voltage: 0,
  //   },
  //   sim: {
  //     imsi: "2",
  //   },
  //   sensors: {
  //     smokeValue: 0,
  //   },
  //   signal: {
  //     band: "2",
  //     deviceNetworkRssiDbm: 0,
  //     gsmStatus: "2",
  //     networkReport: {
  //       absoluteRadioFrequencyChannel: "2",
  //       areaTacChangeCount: "2",
  //       cellChangeCount: "2",
  //       cellId: "2",
  //       connectionStatus: "2",
  //       extendedDiscontinuousReception: "2",
  //       ipAddress: "2",
  //       mcc: "2",
  //       mnc: "2",
  //       referenceSignalReceivedPower: "2",
  //       referenceSignalReceivedQuality: "2",
  //       requestedActiveTime: "2",
  //       requestedPeriodicTrackingAreaUpdate: "2",
  //       tac: "2",
  //       updatedAt: new Date(),
  //     },
  //   },
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // },
  // {
  //   id: "7",
  //   deviceId: "2",
  //   fullname: "2",
  //   email: "2",
  //   phone: "2",
  //   battery: {
  //     source: "2",
  //     voltage: 0,
  //   },
  //   sim: {
  //     imsi: "2",
  //   },
  //   sensors: {
  //     smokeValue: 0,
  //   },
  //   signal: {
  //     band: "2",
  //     deviceNetworkRssiDbm: 0,
  //     gsmStatus: "2",
  //     networkReport: {
  //       absoluteRadioFrequencyChannel: "2",
  //       areaTacChangeCount: "2",
  //       cellChangeCount: "2",
  //       cellId: "2",
  //       connectionStatus: "2",
  //       extendedDiscontinuousReception: "2",
  //       ipAddress: "2",
  //       mcc: "2",
  //       mnc: "2",
  //       referenceSignalReceivedPower: "2",
  //       referenceSignalReceivedQuality: "2",
  //       requestedActiveTime: "2",
  //       requestedPeriodicTrackingAreaUpdate: "2",
  //       tac: "2",
  //       updatedAt: new Date(),
  //     },
  //   },
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // },
  // {
  //   id: "8",
  //   deviceId: "2",
  //   fullname: "2",
  //   email: "2",
  //   phone: "2",
  //   battery: {
  //     source: "2",
  //     voltage: 0,
  //   },
  //   sim: {
  //     imsi: "2",
  //   },
  //   sensors: {
  //     smokeValue: 0,
  //   },
  //   signal: {
  //     band: "2",
  //     deviceNetworkRssiDbm: 0,
  //     gsmStatus: "2",
  //     networkReport: {
  //       absoluteRadioFrequencyChannel: "2",
  //       areaTacChangeCount: "2",
  //       cellChangeCount: "2",
  //       cellId: "2",
  //       connectionStatus: "2",
  //       extendedDiscontinuousReception: "2",
  //       ipAddress: "2",
  //       mcc: "2",
  //       mnc: "2",
  //       referenceSignalReceivedPower: "2",
  //       referenceSignalReceivedQuality: "2",
  //       requestedActiveTime: "2",
  //       requestedPeriodicTrackingAreaUpdate: "2",
  //       tac: "2",
  //       updatedAt: new Date(),
  //     },
  //   },
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // },
  // {
  //   id: "9",
  //   deviceId: "2",
  //   fullname: "2",
  //   email: "2",
  //   phone: "2",
  //   battery: {
  //     source: "2",
  //     voltage: 0,
  //   },
  //   sim: {
  //     imsi: "2",
  //   },
  //   sensors: {
  //     smokeValue: 0,
  //   },
  //   signal: {
  //     band: "2",
  //     deviceNetworkRssiDbm: 0,
  //     gsmStatus: "2",
  //     networkReport: {
  //       absoluteRadioFrequencyChannel: "2",
  //       areaTacChangeCount: "2",
  //       cellChangeCount: "2",
  //       cellId: "2",
  //       connectionStatus: "2",
  //       extendedDiscontinuousReception: "2",
  //       ipAddress: "2",
  //       mcc: "2",
  //       mnc: "2",
  //       referenceSignalReceivedPower: "2",
  //       referenceSignalReceivedQuality: "2",
  //       requestedActiveTime: "2",
  //       requestedPeriodicTrackingAreaUpdate: "2",
  //       tac: "2",
  //       updatedAt: new Date(),
  //     },
  //   },
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // },
];

export default function TabTwoScreen() {
  // Animated FAB
  const [isExtended, setIsExtended] = React.useState(true);

  const isIOS = Platform.OS === "ios";
  const colorScheme = useColorScheme();
  const onScroll = ({ nativeEvent }: { nativeEvent: any }) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };

  // const fabStyle = { [animateFrom]: 16 };

  // Search Bar
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View
            style={{
              marginTop: 20,
              paddingHorizontal: 20,
              paddingBottom: 20,
            }}
          >
            <Searchbar
              placeholder="Tìm Thiết Bị"
              onChangeText={setSearchQuery}
              value={searchQuery}
            />
          </View>
          <Divider></Divider>
          <SafeAreaView style={styles.fabContainer}>
            <ScrollView
              onScroll={onScroll}
              style={{ marginRight: 0, marginBottom: 44 }}
            >
              {deviceList.map((device) => {
                //   Meunu
                const [visible, setVisible] = React.useState(false);

                const openMenu = () => setVisible(true);

                const closeMenu = () => setVisible(false);

                return (
                  <React.Fragment key={device.id}>
                    <Card
                      title={"Thiết bị 1"}
                      deviceId="abc"
                      status={false}
                      right={
                        <SafeAreaView>
                          <Menu
                            visible={visible}
                            onDismiss={closeMenu}
                            anchor={
                              <IconButton
                                icon="dots-vertical-circle-outline"
                                iconColor={
                                  Colors[colorScheme ?? "light"].primary
                                }
                                size={32}
                                onPress={openMenu}
                              />
                            }
                          >
                            <Menu.Item
                              onPress={() => {
                                closeMenu();
                                router.navigate({
                                  pathname: "/device/[deviceId]",
                                  params: { deviceId: "bacon" },
                                });
                              }}
                              title="Chi Tiết"
                            />
                            <Divider />
                            <Menu.Item onPress={() => {}} title="Share" />
                          </Menu>
                        </SafeAreaView>
                      }
                    >
                      <Avatar.Icon size={96} icon="devices" />
                      <View>
                        <CircularProgress
                          width={80}
                          height={80}
                          value={40}
                          targetValue={200}
                          status={false}
                        ></CircularProgress>
                      </View>

                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            marginBottom: -2,
                            fontSize: 16,
                          }}
                        >
                          2 giờ
                        </Text>

                        <MaterialIcons name="update" size={36} color="black" />
                      </View>
                      <View
                        style={{
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 0,
                        }}
                      >
                        <Text
                          style={{
                            marginBottom: -6,
                            fontSize: 16,
                            fontStyle: "italic",
                            fontWeight: "600",
                            color: Colors[colorScheme ?? "light"].primary,
                          }}
                        >
                          40%
                        </Text>
                        <FontAwesome name="battery-2" size={32} color="black" />
                      </View>
                    </Card>
                    {/* <SafeAreaView>
                    <Pressable
                      style={styles.item}
                      onPressOut={() => {
                        router.navigate({
                          pathname: "/device/[deviceId]",
                          params: { deviceId: "bacon" },
                        });
                      }}
                    > */}

                    {/* </Pressable>
                  </SafeAreaView> */}
                    <Divider></Divider>
                  </React.Fragment>
                );
              })}
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {},
  container: {},
  content: {
    position: "relative",
    height: "100%",
  },

  // FAB animation
  fabContainer: {
    flexGrow: 1,
    paddingBottom: 56,
  },
  fabStyle: {
    zIndex: -1,
    bottom: 16,
    right: 16,
    position: "absolute",
  },
  item: {
    paddingVertical: 8,
    position: "relative",
    paddingLeft: 16,
    paddingRight: 24,
  },
  itemRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
