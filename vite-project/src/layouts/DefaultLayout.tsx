import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { FunctionComponent, ReactNode, Suspense, useState } from "react";
import Header from "./components/Header";
import Sider from "./components/Sider";
import { cn } from "@/lib/utils";
import LoadingScreen from "@/components/LoadingScreen";

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
