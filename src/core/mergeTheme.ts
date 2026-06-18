import { defaultTheme } from './themeDefaults';
import type { DeepPartial, PartialThemeDefinition, ThemeDefinition } from './themeTypes';

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value)
  );
}

function cloneValue<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map(item => cloneValue(item)) as T;
  }

  if (isPlainObject(value)) {
    const clone: Record<string, unknown> = {};

    for (const [key, childValue] of Object.entries(value)) {
      clone[key] = cloneValue(childValue);
    }

    return clone as T;
  }

  return value;
}

function deepMergeValues(base: unknown, override: unknown): unknown {
  if (override === undefined) {
    return cloneValue(base);
  }

  if (Array.isArray(base) || Array.isArray(override)) {
    return cloneValue(override);
  }

  if (isPlainObject(base) && isPlainObject(override)) {
    const result: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(base)) {
      result[key] = cloneValue(value);
    }

    for (const [key, value] of Object.entries(override)) {
      result[key] = deepMergeValues(result[key], value);
    }

    return result;
  }

  if (isPlainObject(override)) {
    return cloneValue(override);
  }

  return override;
}

export function mergeTheme(
  theme: PartialThemeDefinition,
  baseTheme: ThemeDefinition = defaultTheme,
): ThemeDefinition {
  return deepMergeValues(
    baseTheme,
    theme as DeepPartial<ThemeDefinition>,
  ) as ThemeDefinition;
}
