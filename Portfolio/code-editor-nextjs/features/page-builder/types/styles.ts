export type Breakpoint = "desktop" | "tablet" | "mobile";

export type Viewport = Breakpoint;

export type ResponsiveValue<T> = Partial<Record<Breakpoint, T>>;

export interface ResponsiveBoxValue {
  desktop?: BoxValue;
  tablet?: BoxValue;
  mobile?: BoxValue;
}

export interface BoxValue {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

export interface StyleSettings {
  layout?: {
    display?: "block" | "flex" | "grid";
    direction?: ResponsiveValue<"row" | "column">;
    justifyContent?: ResponsiveValue<string>;
    alignItems?: ResponsiveValue<string>;
    gap?: ResponsiveValue<string>;
    width?: ResponsiveValue<string>;
    maxWidth?: ResponsiveValue<string>;
    height?: ResponsiveValue<string>;
    minHeight?: ResponsiveValue<string>;
    objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  };
  spacing?: {
    margin?: ResponsiveBoxValue;
    padding?: ResponsiveBoxValue;
  };
  typography?: {
    fontFamily?: string;
    fontSize?: ResponsiveValue<string>;
    fontWeight?: ResponsiveValue<string | number>;
    lineHeight?: ResponsiveValue<string>;
    letterSpacing?: ResponsiveValue<string>;
    textAlign?: ResponsiveValue<"left" | "center" | "right" | "justify">;
    color?: string;
  };
  background?: {
    color?: string;
    image?: string;
    position?: string;
    size?: string;
  };
  border?: {
    width?: string;
    style?: "solid" | "dashed" | "dotted" | "none";
    color?: string;
    radius?: ResponsiveValue<string>;
  };
  effects?: {
    opacity?: number;
    boxShadow?: string;
  };
  hover?: {
    typography?: Pick<NonNullable<StyleSettings["typography"]>, "color">;
    background?: Pick<NonNullable<StyleSettings["background"]>, "color">;
    border?: Pick<NonNullable<StyleSettings["border"]>, "color">;
  };
}
