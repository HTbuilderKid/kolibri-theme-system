import type { ThemeDefinition } from './themeTypes';

const TOKEN_REFERENCE_PATTERN = /^\{([^{}]+)\}$/;

type UnknownRecord = Record<string, unknown>;

function isPlainObject(value: unknown): value is UnknownRecord {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value)
  );
}

function isTokenReference(value: unknown): value is string {
  return typeof value === 'string' && TOKEN_REFERENCE_PATTERN.test(value);
}

function getReferencePath(reference: string): string {
  const match = reference.match(TOKEN_REFERENCE_PATTERN);

  if (!match || !match[1]) {
    throw new Error(`Invalid token reference: ${reference}`);
  }

  return match[1].trim();
}

function getThemeLookupRoot(theme: ThemeDefinition): UnknownRecord {
  return {
    metadata: theme.metadata,
    primitives: theme.primitives,

    colors: theme.primitives.colors,
    typography: theme.primitives.typography,
    spacing: theme.primitives.spacing,
    radius: theme.primitives.radius,
    shadow: theme.primitives.shadow,
    motion: theme.primitives.motion,

    semantic: theme.semanticTokens,
    component: theme.componentTokens,

    assets: theme.assets,
    behavior: theme.behavior,
  };
}

function getValueByPath(
  theme: ThemeDefinition,
  path: string,
): unknown {
  const segments = path.split('.').filter(Boolean);
  let current: unknown = getThemeLookupRoot(theme);

  for (const segment of segments) {
    if (!isPlainObject(current) || !(segment in current)) {
      throw new Error(`Theme token reference not found: {${path}}`);
    }

    current = current[segment];
  }

  return current;
}

function resolveReference(
  reference: string,
  sourceTheme: ThemeDefinition,
  resolvingPaths: Set<string>,
): unknown {
  const path = getReferencePath(reference);

  if (resolvingPaths.has(path)) {
    const chain = [...resolvingPaths, path].join(' -> ');
    throw new Error(`Circular theme token reference detected: ${chain}`);
  }

  resolvingPaths.add(path);

  const value = getValueByPath(sourceTheme, path);
  const resolvedValue = resolveValue(value, sourceTheme, resolvingPaths);

  resolvingPaths.delete(path);

  return resolvedValue;
}

function resolveArray(
  values: unknown[],
  sourceTheme: ThemeDefinition,
  resolvingPaths: Set<string>,
): unknown[] {
  return values.map(value =>
    resolveValue(value, sourceTheme, new Set(resolvingPaths)),
  );
}

function resolveObject(
  object: UnknownRecord,
  sourceTheme: ThemeDefinition,
  resolvingPaths: Set<string>,
): UnknownRecord {
  const resolved: UnknownRecord = {};

  for (const [key, value] of Object.entries(object)) {
    resolved[key] = resolveValue(
      value,
      sourceTheme,
      new Set(resolvingPaths),
    );
  }

  return resolved;
}

function resolveValue(
  value: unknown,
  sourceTheme: ThemeDefinition,
  resolvingPaths: Set<string>,
): unknown {
  if (isTokenReference(value)) {
    return resolveReference(value, sourceTheme, resolvingPaths);
  }

  if (Array.isArray(value)) {
    return resolveArray(value, sourceTheme, resolvingPaths);
  }

  if (isPlainObject(value)) {
    return resolveObject(value, sourceTheme, resolvingPaths);
  }

  return value;
}

export function resolveTheme(theme: ThemeDefinition): ThemeDefinition {
  return resolveValue(theme, theme, new Set()) as ThemeDefinition;
}
