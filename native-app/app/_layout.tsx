import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  useRoute,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, router, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "@/components/useColorScheme";
import { Provider } from "react-native-paper";
import { Text } from "@/components/Themed";
import { SessionProvider } from "@/lib/ctx";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <SessionProvider>
      <Provider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="device/[deviceId]"
              options={{
                presentation: "modal",
                headerTitle: () => {
                  const route = useRoute();
                  let deviceId = "";
                  if (route.params && "deviceId" in route.params) {
                    const params = route.params;
                    deviceId = String(params.deviceId);
                  }
                  return (
                    <Text style={{ fontSize: 18, fontWeight: "600" }}>
                      Thiết Bị {deviceId}
                    </Text>
                  );
                },
              }}
            />
            <Stack.Screen
              name="policy/index"
              options={{
                presentation: "modal",
                title: "Chính sách",
              }}
            />
            <Stack.Screen
              name="modal/index"
              options={{ presentation: "modal", title: "test" }}
            />
            <Stack.Screen
              name="settings/index"
              // options={{ presentation: "modal", title: "Cài Đặt" }}
            />
            <Stack.Screen
              name="auth/sign-in"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="auth/sign-up"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="index"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}
