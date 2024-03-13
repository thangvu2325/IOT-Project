import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import {
  FunctionComponent,
  ReactNode,
  Suspense,
  useEffect,
  useState,
} from "react";
import Header from "./components/Header";
import Sider from "./components/Sider";
import { cn } from "@/lib/utils";
import LoadingScreen from "@/components/LoadingScreen";
import useMessage from "@/hooks/useMessage";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { userData } from "@/redux/selector";
import { createAxios, tokenType } from "@/services/createInstance";
import { loginSuccess } from "@/redux/slices/authSlice";
import { fetchDataDevices } from "@/redux/slices/devicesSlice";
import { fetchDataCustomers } from "@/redux/slices/customersSlice";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ children }) => {
  const [siderStatus, setSiderStatus] = useState<boolean | string>("idle");
  const toggleStatusSider = () => {
    if (siderStatus === "idle") {
      setSiderStatus(false);
    } else {
      setSiderStatus(!siderStatus);
    }
  };
  const token = useAppSelector(userData)?.currentUser as tokenType;
  const { messageConnection } = useMessage();
  const dispatch = useAppDispatch();
  const axiosClient = createAxios(token, dispatch, loginSuccess);
  useEffect(() => {
    dispatch(fetchDataDevices(axiosClient));
    dispatch(fetchDataCustomers(axiosClient));
    const customerId = token?.user?.customer_id ?? "";
    const handleConnect = async () => {
      if (token.backendTokens.accessToken) {
        if (new Date().getTime() > token?.backendTokens.expiresIn) {
          console.log("Token is expired. Refreshing...");
          // const tokenData = await refreshToken(token, dispatch, loginSuccess);
          // console.log("Token refreshed:", tokenData);
          // messageConnection(tokenData.backendTokens.accessToken, customerId);
        } else {
          console.log("Token is still valid.");
          // messageConnection(token.backendTokens.accessToken, customerId);
        }
      }
    };
    handleConnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout style={{ background: "transparent" }} className="flex flex-row">
      <Sider
        siderStatus={siderStatus}
        toggleStatusSider={toggleStatusSider}
      ></Sider>
      <Content
        className={cn(
          "flex flex-col absolute right-0 h-screen",
          siderStatus === "idle"
            ? "left-[280px]"
            : siderStatus
            ? "left-[280px] animate-whenSideOn"
            : "left-[0] animate-WhenSiderOff"
        )}
      >
        <Header></Header>
        <Suspense fallback={<LoadingScreen></LoadingScreen>}>
          <Content>
            <div className=" w-full overflow-auto h-full">{children}</div>
          </Content>
        </Suspense>
      </Content>
    </Layout>
  );
};

export default DefaultLayout;
