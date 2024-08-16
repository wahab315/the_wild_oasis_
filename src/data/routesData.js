import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

const routesData = [
  {
    name: "Home",
    icon: HiOutlineHome,
    link: "/dashboard",
  },
  {
    name: "Bookings",
    icon: HiOutlineCalendarDays,
    link: "/bookings",
  },
  {
    name: "Cabins",
    icon: HiOutlineHomeModern,
    link: "/cabins",
  },
  {
    name: "Users",
    icon: HiOutlineUsers,
    link: "/users",
  },
  {
    name: "Settings",
    icon: HiOutlineCog6Tooth,
    link: "/settings",
  },
];

export default routesData;
