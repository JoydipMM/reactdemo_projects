import type { ImageSourcePropType } from "react-native";

declare global {
  interface TabIconProps {
    focused: boolean;
    icon?: ImageSourcePropType;
  }
  interface AppTab {
    name: string;
    title: string;
    icon?: ImageSourcePropType;
    href?: null;
  }
}

export { };

