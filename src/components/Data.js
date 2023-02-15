import {
  HomeIcon,
  LayoutIcon,
  UserIcon,
  RolesIcon,
  PagesIcon,
  ModalIcon,
  CalendarIcon,
} from "./Icons";

export const SIDEBAR_DATA = [
  {
    id: 1,
    name: "Home",
    path: "/home",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "Biểu đồ",
    path: "/bieudo",
    icon: <LayoutIcon />,
  },
  {
    id: 3,
    name: "Bảng dữ liệu",
    path: "/bangdulieu",
    icon: <CalendarIcon />,
  },
  {
    id: 4,
    name: "Điều khiển thiết bị",
    path: "/control",
    icon: <RolesIcon />,
  },
  {
    id: 5,
    name: "Quản lý thiết bị",
    path: "/sensor",
    icon: <PagesIcon />,
  },
];
