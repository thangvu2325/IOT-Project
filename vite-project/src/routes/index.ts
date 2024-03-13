import { ComponentType, Fragment, FunctionComponent, lazy } from "react";
// Pages
const AuthLayout = lazy(() => import("@/layouts/AuthLayout"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const ErrorPage = lazy(() => import("@/pages/Error"));
const RegisterPage = lazy(() => import("@/pages/Register"));
const LoginPage = lazy(() => import("@/pages/Login"));
const SettingsPage = lazy(() => import("@/pages/Settings"));
const ProfilePage = lazy(() => import("@/pages/Profile"));
const DevicePage = lazy(() => import("@/pages/Device"));
const DeviceListPage = lazy(() => import("@/pages/Device/DeviceList"));
const CustomerListPage = lazy(() => import("@/pages/Customer/CustomerList"));

export type RouteType = {
  path: string;
  component: ComponentType;
  layout?: FunctionComponent<{ children: React.ReactNode }>;
};
export const routes = {
  Dashboard: "/dashboard",
  login: "/login",
  register: "/register",
  settings: "/settings",
  profile: "/profile",
  device: "/device",
  deviceList: "/device/device-list",
  customerList: "/customer/customer-list",
};
const publicRoutes: Array<RouteType> = [
  {
    path: routes.login,
    component: LoginPage,
    layout: AuthLayout,
  },
  { path: routes.register, component: RegisterPage, layout: AuthLayout },
  { path: "*", component: ErrorPage, layout: Fragment },
];
const privateRoutes: Array<RouteType> = [
  { path: routes.Dashboard, component: Dashboard },
  { path: routes.settings, component: SettingsPage },
  { path: routes.profile, component: ProfilePage },
  { path: routes.device, component: DevicePage },
  { path: routes.deviceList, component: DeviceListPage },
  { path: routes.customerList, component: CustomerListPage },
];

export { publicRoutes, privateRoutes };
