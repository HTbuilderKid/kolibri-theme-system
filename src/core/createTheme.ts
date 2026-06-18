import { defaultTheme } from './themeDefaults';
import { mergeTheme } from './mergeTheme';
import { resolveTheme } from './resolveTheme';
import type { PartialThemeDefinition, ThemeDefinition } from './themeTypes';

export interface CreateThemeOptions {
  baseTheme?: ThemeDefinition;
  resolveTokens?: boolean;
}

export function createTheme(
  theme: PartialThemeDefinition = defaultTheme,
  options: CreateThemeOptions = {},
): ThemeDefinition {
  const {
    baseTheme = defaultTheme,
    resolveTokens = true,
  } = options;

  const mergedTheme = mergeTheme(theme, baseTheme);

  if (!resolveTokens) {
    return mergedTheme;
  }

  return resolveTheme(mergedTheme);
}
