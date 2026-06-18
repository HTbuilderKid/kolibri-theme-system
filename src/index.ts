export const THEME_SYSTEM_VERSION = '0.1.0';

export type {
  CssColorValue,
  CssDurationValue,
  CssFontFamilyValue,
  CssFontWeightValue,
  CssLengthValue,
  CssTimingFunctionValue,
  DeepPartial,
  PartialThemeDefinition,
  ThemeAlertTokens,
  ThemeAppBarTokens,
  ThemeAssets,
  ThemeBackgroundAsset,
  ThemeBehavior,
  ThemeButtonTokens,
  ThemeCardTokens,
  ThemeColorScale,
  ThemeComponentTokens,
  ThemeDefinition,
  ThemeDensity,
  ThemeDirection,
  ThemeId,
  ThemeInputTokens,
  ThemeLogoAsset,
  ThemeMetadata,
  ThemeMode,
  ThemeModalTokens,
  ThemeMotionTokens,
  ThemePrimitiveColors,
  ThemePrimitiveTokens,
  ThemeRadiusTokens,
  ThemeSemanticColorTokens,
  ThemeSemanticTokens,
  ThemeShadowTokens,
  ThemeSideNavTokens,
  ThemeSpacingTokens,
  ThemeTokenValue,
  ThemeTypographyTokens,
  TokenReference,
} from './core/themeTypes';

export type { CreateThemeOptions } from './core/createTheme';

export { createTheme } from './core/createTheme';
export { mergeTheme } from './core/mergeTheme';
export { resolveTheme } from './core/resolveTheme';
export { defaultTheme, defaultThemeBehavior } from './core/themeDefaults';
