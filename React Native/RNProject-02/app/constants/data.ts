import { icons } from "./icons";

export const tabs: AppTab[] = [
  { name: "index", title: "Home", icon: icons.home },
  { name: "subscriptions", title: "Subscriptions", icon: icons.wallet },
  {
    name: "subscriptions/spotify",
    title: "spotify",
    icon: icons.wallet,
    href: null,
  },
  {
    name: "subscriptions/[id]",
    title: "subscription[id]",
    icon: icons.wallet,
    href: null,
  },
  { name: "insights", title: "Insights", icon: icons.activity },
  { name: "settings", title: "Settings", icon: icons.setting },
];
