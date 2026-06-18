export type ThemeId = string;

export type CssColorValue = string;
export type CssLengthValue = string;
export type CssDurationValue = string;
export type CssTimingFunctionValue = string;
export type CssFontFamilyValue = string;
export type CssFontWeightValue = string | number;

export type TokenReference = `{${string}}`;
export type ThemeTokenValue = string | number;

export type ThemeMode = 'light' | 'dark' | 'high-contrast';

export type ThemeDensity = 'comfortable' | 'compact';

export type ThemeDirection = 'ltr' | 'rtl';

export type ThemeColorScale = Record<string, CssColorValue>;

export type ThemePrimitiveColors = Record<
  string,
  CssColorValue | ThemeColorScale
>;

export interface ThemeMetadata {
  id: ThemeId;
  name: string;
  description?: string;
  version?: string;
  author?: string;
  tags?: string[];
}

export interface ThemeTypographyTokens {
  fontFamily: CssFontFamilyValue;
  fontFamilyMono: CssFontFamilyValue;

  fontSizeXs: CssLengthValue;
  fontSizeSm: CssLengthValue;
  fontSizeMd: CssLengthValue;
  fontSizeLg: CssLengthValue;
  fontSizeXl: CssLengthValue;
  fontSizeXxl: CssLengthValue;

  fontWeightRegular: CssFontWeightValue;
  fontWeightMedium: CssFontWeightValue;
  fontWeightBold: CssFontWeightValue;

  lineHeightTight: string | number;
  lineHeightNormal: string | number;
  lineHeightRelaxed: string | number;
}

export interface ThemeSpacingTokens {
  none: CssLengthValue;
  xxs: CssLengthValue;
  xs: CssLengthValue;
  sm: CssLengthValue;
  md: CssLengthValue;
  lg: CssLengthValue;
  xl: CssLengthValue;
  xxl: CssLengthValue;
  xxxl: CssLengthValue;
}

export interface ThemeRadiusTokens {
  none: CssLengthValue;
  xs: CssLengthValue;
  sm: CssLengthValue;
  md: CssLengthValue;
  lg: CssLengthValue;
  xl: CssLengthValue;
  full: CssLengthValue;
}

export interface ThemeShadowTokens {
  none: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  focus: string;
}

export interface ThemeMotionTokens {
  durationInstant: CssDurationValue;
  durationFast: CssDurationValue;
  durationNormal: CssDurationValue;
  durationSlow: CssDurationValue;

  easingStandard: CssTimingFunctionValue;
  easingEnter: CssTimingFunctionValue;
  easingExit: CssTimingFunctionValue;
}

export interface ThemePrimitiveTokens {
  colors: ThemePrimitiveColors;
  typography: ThemeTypographyTokens;
  spacing: ThemeSpacingTokens;
  radius: ThemeRadiusTokens;
  shadow: ThemeShadowTokens;
  motion: ThemeMotionTokens;
}

export interface ThemeSemanticColorTokens {
  primary: ThemeTokenValue;
  primaryHover: ThemeTokenValue;
  primaryActive: ThemeTokenValue;
  primaryText: ThemeTokenValue;

  secondary: ThemeTokenValue;
  secondaryHover: ThemeTokenValue;
  secondaryActive: ThemeTokenValue;
  secondaryText: ThemeTokenValue;

  surface: ThemeTokenValue;
  surfaceAlt: ThemeTokenValue;
  surfaceRaised: ThemeTokenValue;
  surfaceInverted: ThemeTokenValue;

  text: ThemeTokenValue;
  textMuted: ThemeTokenValue;
  textDisabled: ThemeTokenValue;
  textInverted: ThemeTokenValue;

  border: ThemeTokenValue;
  borderStrong: ThemeTokenValue;

  focusOutline: ThemeTokenValue;

  link: ThemeTokenValue;
  linkHover: ThemeTokenValue;

  success: ThemeTokenValue;
  successText: ThemeTokenValue;

  warning: ThemeTokenValue;
  warningText: ThemeTokenValue;

  error: ThemeTokenValue;
  errorText: ThemeTokenValue;

  info: ThemeTokenValue;
  infoText: ThemeTokenValue;

  overlay: ThemeTokenValue;
  scrim: ThemeTokenValue;
}

export interface ThemeSemanticTokens {
  color: ThemeSemanticColorTokens;
}

export interface ThemeAppBarTokens {
  background: ThemeTokenValue;
  text: ThemeTokenValue;
  border: ThemeTokenValue;
  height: CssLengthValue;
  logoHeight: CssLengthValue;
}

export interface ThemeSideNavTokens {
  background: ThemeTokenValue;
  text: ThemeTokenValue;
  textMuted: ThemeTokenValue;
  activeBackground: ThemeTokenValue;
  activeText: ThemeTokenValue;
  border: ThemeTokenValue;
  width: CssLengthValue;
}

export interface ThemeButtonTokens {
  borderRadius: ThemeTokenValue;

  primaryBackground: ThemeTokenValue;
  primaryText: ThemeTokenValue;
  primaryHoverBackground: ThemeTokenValue;
  primaryActiveBackground: ThemeTokenValue;

  secondaryBackground: ThemeTokenValue;
  secondaryText: ThemeTokenValue;
  secondaryHoverBackground: ThemeTokenValue;
  secondaryActiveBackground: ThemeTokenValue;

  dangerBackground: ThemeTokenValue;
  dangerText: ThemeTokenValue;
  dangerHoverBackground: ThemeTokenValue;

  disabledBackground: ThemeTokenValue;
  disabledText: ThemeTokenValue;
}

export interface ThemeCardTokens {
  background: ThemeTokenValue;
  text: ThemeTokenValue;
  border: ThemeTokenValue;
  borderRadius: ThemeTokenValue;
  shadow: ThemeTokenValue;
}

export interface ThemeInputTokens {
  background: ThemeTokenValue;
  text: ThemeTokenValue;
  placeholder: ThemeTokenValue;
  border: ThemeTokenValue;
  borderFocus: ThemeTokenValue;
  borderError: ThemeTokenValue;
  borderRadius: ThemeTokenValue;
}

export interface ThemeModalTokens {
  background: ThemeTokenValue;
  text: ThemeTokenValue;
  borderRadius: ThemeTokenValue;
  shadow: ThemeTokenValue;
  scrim: ThemeTokenValue;
}

export interface ThemeAlertTokens {
  infoBackground: ThemeTokenValue;
  infoText: ThemeTokenValue;
  successBackground: ThemeTokenValue;
  successText: ThemeTokenValue;
  warningBackground: ThemeTokenValue;
  warningText: ThemeTokenValue;
  errorBackground: ThemeTokenValue;
  errorText: ThemeTokenValue;
}

export interface ThemeComponentTokens {
  appBar: ThemeAppBarTokens;
  sideNav: ThemeSideNavTokens;
  button: ThemeButtonTokens;
  card: ThemeCardTokens;
  input: ThemeInputTokens;
  modal: ThemeModalTokens;
  alert: ThemeAlertTokens;
}

export interface ThemeLogoAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  contentType?: string;
  maskable?: boolean;
}

export interface ThemeBackgroundAsset {
  src: string;
  alt?: string;
  credit?: string;
  contentType?: string;
}

export interface ThemeAssets {
  logo?: ThemeLogoAsset;
  logoSmall?: ThemeLogoAsset;
  signInBackground?: ThemeBackgroundAsset;
}

export interface ThemeBehavior {
  preferredMode: ThemeMode;
  density: ThemeDensity;
  direction: ThemeDirection;
  reducedMotion: boolean;
}

export interface ThemeDefinition {
  metadata: ThemeMetadata;
  primitives: ThemePrimitiveTokens;
  semanticTokens: ThemeSemanticTokens;
  componentTokens: ThemeComponentTokens;
  assets?: ThemeAssets;
  behavior?: ThemeBehavior;
}

export type DeepPartial<T> = {
  [Key in keyof T]?: T[Key] extends object
    ? T[Key] extends Array<infer Item>
      ? Array<DeepPartial<Item>>
      : DeepPartial<T[Key]>
    : T[Key];
};

export type PartialThemeDefinition = DeepPartial<ThemeDefinition> & {
  metadata: Pick<ThemeMetadata, 'id' | 'name'> & Partial<ThemeMetadata>;
};
