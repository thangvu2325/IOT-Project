import { ComponentType, Fragment, FunctionComponent, lazy } from "react";
// Pages
const AuthLayout = lazy(() => import("@/layouts/AuthLayout"));
const Home = lazy(() => import("@/pages/Home"));
const ErrorPage = lazy(() => import("@/pages/Error"));
const RegisterPage = lazy(() => import("@/pages/Register"));
const LoginPage = lazy(() => import("@/pages/Login"));
const SettingsPage = lazy(() => import("@/pages/Settings"));
const ProfilePage = lazy(() => import("@/pages/Profile"));
const DeivePage = lazy(() => import("@/pages/Device"));
const DeiveListPage = lazy(() => import("@/pages/Device/DeviceList"));

export type RouteType = {
  path: string;
  component: ComponentType;
  layout?: FunctionComponent<{ children: React.ReactNode }>;
};
export const routes = {
  homepage: "/",
  login: "/login",
  register: "/register",
  settings: "/settings",
  profile: "/profile",
  device: "/device",
  deviceList: "/device/device-list",
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
  { path: routes.homepage, component: Home },
  { path: routes.settings, component: SettingsPage },
  { path: routes.profile, component: ProfilePage },
  { path: routes.device, component: DeivePage },
  { path: routes.deviceList, component: DeiveListPage },
];

export { publicRoutes, privateRoutes };
