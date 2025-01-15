import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/profile/:id",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "users",
    label: "Users",
    path: "/profile/:id/users",
    icon: <HiOutlineUsers />,
  },
  {
    key: "products",
    label: "Products",
    path: "/profile/:id/products",
    icon: <HiOutlineCube />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/profile/:id/orders",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/profile/:id/customers",
    icon: <HiOutlineUsers />,
  },
  {
    key: "transactions",
    label: "Transactions",
    path: "/profile/:id/transactions",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/profile/:id/messages",
    icon: <HiOutlineAnnotation />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/profile/:id/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/profile/:id/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];

export const typeOptions = [
  { value: "NUTRITION", label: "NUTRITION" },
  { value: "EXERCISE", label: "EXERCISE" },
  { value: "MENTAL_HEALTH", label: "MENTAL HEALTH" },
  { value: "PREGNANCY", label: "PREGNANCY" },
];

export const riskLevel = [
  { value: "ALL", label: "ALL" },
  { value: "LOW", label: "LOW" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HIGH", label: "HIGH" },
];

export const filterUserOptions = [
  { value: "PREGNANT_WOMAN", label: "Pregnant women" },
  { value: "ADMIN", label: "Admin" },
  { value: "COMMUNITY_HEALTH_WORKER", label: "chw" },
  { value: "HEALTHCARE_PROVIDER", label: "healthcare provider" },
];
