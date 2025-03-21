import { uniqueId } from "lodash";
interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  bgcolor?: any;
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}

const Menuitems: MenuitemsType[] = [
  // {
  //   navlabel: true,
  //   subheader: "HOME",
  // },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: "screencast-2-line-duotone",
    href: "/",
  },
  {
    id: uniqueId(),
    title: "User Management",
    href: "/user-management",
  },
  {
    id: uniqueId(),
    title: "Rating and Reviews",
    href: "/rating-and-reviews",
  },
  {
    id: uniqueId(),
    title: "Settings",
  },
  {
    id: uniqueId(),
    title: "History",
    href: "/history",
  },
  {
    id: uniqueId(),
    title: "All Bookings",
    href: "/all-bookings",
  },
  {
    id: uniqueId(),
    title: "Push Notification",
  },
  {
    id: uniqueId(),
    title: "Transactions List",
    href: "/transactions",
    icon: "chart-line-duotone",
  },
  {
    id: uniqueId(),
    title: "Google Analytics",
  },
  {
    id: uniqueId(),
    title: "Multi-Currency",
    href: "/multi-currency",
    icon: "feed-line-duotone",
    // chip: "Pro",
    // children: [
    // ],
  },
  {
    id: uniqueId(),
    title: "Category",
  },
  {
    id: uniqueId(),
    title: "Live Chat History",
    href: "/live-chat",
    icon: "chart-line-duotone",
  },
];

export default Menuitems;
