import { ConfigProvider, Flex, Menu } from "antd";
import { Fragment, FunctionComponent, useRef } from "react";
import {
  IconChevronLeft,
  IconChevronRight,
  IconHome2,
  IconSettings,
  IconUserCircle,
} from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import type { MenuProps } from "antd";
import { cn } from "@/lib/utils";
import { IconIotConnection } from "@/components/ui/icon";
import { routes } from "@/routes";

type MenuItem = Required<MenuProps>["items"][number];
interface SiderProps {
  siderStatus?: string | boolean;
  toggleStatusSider: () => void;
}
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
  disabled?: boolean
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    disabled,
  } as MenuItem;
}

const Sider: FunctionComponent<SiderProps> = ({
  siderStatus,
  toggleStatusSider,
}) => {
  const { pathname } = useLocation();
  const refDiv = useRef<HTMLDivElement>(null);
  const MainMenuItems: MenuItem[] = [
    getItem(
      <Link to={routes.homepage} className="whitespace-nowrap">
        Trang Chủ
      </Link>,
      routes.homepage,
      <IconHome2></IconHome2>
    ),
    getItem(
      <Link to={routes.settings} className="whitespace-nowrap">
        Cài Đặt
      </Link>,
      routes.settings,
      <IconSettings></IconSettings>
    ),
    getItem(
      <Link to={routes.profile} className="whitespace-nowrap">
        Hồ Sơ
      </Link>,
      routes.profile,
      <IconUserCircle></IconUserCircle>
    ),
    getItem("", "space", <Fragment></Fragment>, [], "group", true),
    getItem(
      <span className="whitespace-nowrap font-semibold uppercase text-[12px] text-[#9da4ae] -ml-3">
        Concepts
      </span>,
      "Concepts",
      <Fragment></Fragment>,
      [],
      "group",
      true
    ),
    getItem("Quản Lý Thiết Bị", "Device Manager", <Fragment></Fragment>, [
      getItem(
        <Link to={routes.deviceList} className="whitespace-nowrap">
          Danh Sách Thiết Bị
        </Link>,
        routes.deviceList,
        <Fragment></Fragment>
      ),
    ]),
    getItem("Thống Kê", "Thống Kê", <Fragment></Fragment>, [
      getItem(
        <Link to={routes.deviceList} className="whitespace-nowrap">
          Thống Kê Số Liệu
        </Link>,
        "Thống Kê Số Liệu",
        <Fragment></Fragment>
      ),
    ]),
  ];

  return (
    <div
      ref={refDiv}
      className={cn(
        "overflow-visible fixed left-0 top-0 bottom-0 w-[280px]  z-30  bg-[#001529]",
        siderStatus === "idle"
          ? ""
          : siderStatus
          ? "animate-sidebarShow"
          : "animate-sidebarHidden -translate-x-full"
      )}
    >
      <div
        className={`absolute top-[50%] translate-y-[-50%] ${
          siderStatus ? "right-[-16px]" : "right-[-20px]"
        }   bg-[#6366f1] w-10 h-10 rounded-[56px] z-40 flex items-center  ${
          siderStatus ? "justify-center" : "justify-end"
        } text-[#fff] cursor-pointer`}
        onClick={toggleStatusSider}
      >
        {siderStatus ? (
          <IconChevronLeft width={30} height={30}></IconChevronLeft>
        ) : (
          <IconChevronRight width={30} height={30}></IconChevronRight>
        )}
      </div>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemSelectedBg: "rgba(255,255,255,0.04)",
              itemSelectedColor: "#fff",
              itemPaddingInline: 0,
              itemMarginInline: 0,
              itemHoverColor: "#fff",
              itemHoverBg: "rgba(255,255,255,0.04)",
              itemActiveBg: "transparent",
            },
          },
        }}
      >
        <Flex
          align={"center"}
          justify="center"
          className="p-6 cursor-pointer border-b-[0.8px] border-solid border-[#ccc] shadow-sm rounded-md"
        >
          <div className="border-[0.8px] border-solid border-[#2F3746] rounded-md py-4 px-4 bg-[#6366F1]">
            <IconIotConnection className="text-[#f0f0f0]"></IconIotConnection>
          </div>
        </Flex>
        <div className="px-4 mt-4  h-screen overflow-auto">
          <div className="scrollCustom">
            <Menu
              inlineIndent={16}
              defaultSelectedKeys={[pathname]}
              defaultOpenKeys={[pathname]}
              mode="inline"
              style={{ backgroundColor: "transparent", color: "#9da4ae" }}
              items={MainMenuItems}
            />
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default Sider;
