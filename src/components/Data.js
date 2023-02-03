import {
  HomeIcon,
  LayoutIcon,
  UserIcon,
  RolesIcon,
  PagesIcon,
  ModalIcon,
} from "./Icons";

export const SIDEBAR_DATA = [
  {
    id: 1,
    name: "Home",
    path: "./",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "Biểu đồ",
    path: "chart",
    icon: <LayoutIcon />,
  },
  {
    id: 3,
    name: "User",
    path: "users",
    icon: <UserIcon />,
  },
  {
    id: 4,
    name: "Điều khiển thiết bị",
    path: "control",
    icon: <RolesIcon />,
  },
  {
    id: 5,
    name: "Quản lý thiết bị",
    path: "sensor",
    icon: <PagesIcon />,
  },
  {
    id: 6,
    name: "Logout",
    path: "/",
    icon: <ModalIcon />,
  },
];
