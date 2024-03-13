import {
  IconCirclePlus,
  IconEditCircle,
  IconPlus,
  IconReload,
} from "@tabler/icons-react";
import { Button, ConfigProvider } from "antd";
import { FunctionComponent, ReactNode } from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
interface DeviceListLayoutProps {
  children: ReactNode;
}

const DeviceListLayout: FunctionComponent<DeviceListLayoutProps> = ({
  children,
}) => {
  return (
    <div className="relative w-full h-full">
      {children}
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimaryHover: "#fff",
            },
          },
        }}
      ></ConfigProvider>
    </div>
  );
};

export default DeviceListLayout;
