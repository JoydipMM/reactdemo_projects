import type { Breakpoint, StyleSettings } from "./styles";

export interface DesignColorToken {
  id: string;
  name: string;
  value: string;
}

export interface TypographyToken {
  id: string;
  name: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
}

export interface SpacingToken {
  id: string;
  name: string;
  value: string;
}

export interface BreakpointToken {
  id: Breakpoint;
  label: string;
  width: number;
}

export interface CssClassDefinition {
  id: string;
  name: string;
  styles: StyleSettings;
}

export interface GlobalStyleSettings {
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  contentWidth?: string;
}

export interface DesignSystem {
  colors: DesignColorToken[];
  typography: TypographyToken[];
  spacing: SpacingToken[];
  breakpoints: BreakpointToken[];
  globalStyles: GlobalStyleSettings;
  cssClasses: CssClassDefinition[];
  customCss: string;
}
