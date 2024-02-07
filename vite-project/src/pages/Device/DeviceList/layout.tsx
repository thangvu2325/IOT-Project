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
      >
        <div className="absolute bottom-2 left-2 flex justify-between">
          <div className="flex fixed bottom-4">
            <div className="flex fixed bottom-4 max-lg:hidden rounded-sm">
              <Button
                onClick={() => {}}
                className="flex items-center py-1 px-2 h-[34px] text-sm font-[500] rounded-[6px] text-[#fff] bg-[#1677ffe3] hover:bg-[#0064f1e3] border-[1px] border-solid border-[#f0f0f0]"
              >
                <span className="mr-[2px] mt-[2px]">
                  <IconReload width="16px" height="16px"></IconReload>
                </span>
                Làm mới
              </Button>
              <Button
                onClick={() => {}}
                className="flex items-center py-1 px-2 h-[34px] text-sm font-[500] rounded-[6px] text-[#fff] bg-[#fa896b] hover:bg-[#e9491f] ml-[2px] max-lg:ml-0 border-[1px] border-solid border-[#f0f0f0]"
              >
                <span className="mr-[2px] mt-[2px] text-[16px]">
                  <IconCirclePlus width="16px" height="16px"></IconCirclePlus>
                </span>
                Thêm mới
              </Button>
              <Button
                onClick={() => {}}
                disabled={false}
                className="disabled:bg-[gray] flex items-center py-1 px-2 h-[34px] text-sm font-[500] rounded-[6px] text-[#fff] bg-[#f64848] hover:bg-[red] ml-[2px] max-lg:ml-0 border-[1px] border-solid border-[#f0f0f0]"
              >
                <span className="mr-[2px] mt-[2px] text-[16px]">
                  <IconEditCircle width="16px" height="16px"></IconEditCircle>
                </span>
                Sửa
              </Button>
            </div>
            <Tippy
              trigger={"click"}
              hideOnClick="toggle"
              placement="bottom-end"
              arrow={true}
              interactive={true}
              onClickOutside={(instance) => {
                instance.hide();
              }}
              offset={[-5, -40]}
              render={(attrs) => {
                return (
                  <div
                    className="flex fixed bottom-4 flex-col-reverse gap-3  shadow p-1 rounded-sm bg-[#fff]"
                    tabIndex={-1}
                    {...attrs}
                  >
                    <Button
                      onClick={() => {}}
                      className="flex items-center py-1 px-2 h-[34px] text-sm font-[500] rounded-[6px] text-[#fff] bg-[#1677ffe3] hover:bg-[#0064f1e3] border-[1px] border-solid border-[#f0f0f0]"
                    >
                      <span className="mr-[2px] mt-[2px]">
                        <IconReload width="20px" height="20px"></IconReload>
                      </span>
                      Làm mới
                    </Button>
                    <Button
                      onClick={() => {}}
                      className="flex items-center py-1 px-2 h-[34px] text-sm font-[500] rounded-[6px] text-[#fff] bg-[#fa896b] hover:bg-[#e9491f] ml-[2px] max-lg:ml-0 border-[1px] border-solid border-[#f0f0f0]"
                    >
                      <span className="mr-[2px] mt-[2px] text-[16px]">
                        <IconCirclePlus
                          width={"20px"}
                          height={"20px"}
                        ></IconCirclePlus>
                      </span>
                      Thêm mới
                    </Button>
                    <Button
                      onClick={() => {}}
                      disabled={!true}
                      className="disabled:bg-[gray] flex items-center py-1 px-2 h-[34px] text-sm font-[500] rounded-[6px] text-[#fff] bg-[#f64848] hover:bg-[red] ml-[2px] max-lg:ml-0 border-[1px] border-solid border-[#f0f0f0]"
                    >
                      <span className="mr-[2px] mt-[2px] text-[16px]">
                        <IconEditCircle
                          width={"20px"}
                          height={"20px"}
                        ></IconEditCircle>
                      </span>
                      Sửa
                    </Button>
                  </div>
                );
              }}
            >
              <div className="hidden max-lg:block rounded-[99px] shadow-[0_0_12px_0_#1677ff] h-14 w-11 cursor-pointer bg-[#1677ff] relative">
                <IconPlus
                  width="20px"
                  height="20px"
                  className="text-[#fff] absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 "
                ></IconPlus>
              </div>
            </Tippy>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default DeviceListLayout;
