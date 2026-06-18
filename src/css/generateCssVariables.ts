import type { ThemeDefinition } from '../core/themeTypes';

export interface CssVariableOptions {
  /**
   * CSS variable prefix.
   *
   * Example:
   * --k-theme
   *
   * Produces variables such as:
   * --k-theme-color-primary
   * --k-theme-spacing-md
   */
  prefix?: string;
}

export interface GenerateThemeCssOptions extends CssVariableOptions {
  /**
   * CSS selector that receives the generated variables.
   *
   * Defaults to :root.
   */
  selector?: string;
}

const DEFAULT_PREFIX = '--k-theme';
const DEFAULT_SELECTOR = ':root';

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value)
  );
}

function toKebabCase(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
}

function normalizePrefix(prefix: string = DEFAULT_PREFIX): string {
  const trimmedPrefix = prefix.trim();

  if (!trimmedPrefix) {
    return DEFAULT_PREFIX;
  }

  const cssPrefix = trimmedPrefix.startsWith('--')
    ? trimmedPrefix
    : `--${trimmedPrefix}`;

  return cssPrefix.replace(/-+$/g, '');
}

function createVariableName(
  pathSegments: string[],
  options: CssVariableOptions = {},
): string {
  const prefix = normalizePrefix(options.prefix);
  const variablePath = pathSegments.map(toKebabCase).join('-');

  return `${prefix}-${variablePath}`;
}

function stringifyCssValue(value: unknown): string {
  if (typeof value === 'number') {
    return String(value);
  }

  if (typeof value === 'string') {
    return value;
  }

  if (typeof value === 'boolean') {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(stringifyCssValue).join(', ');
  }

  throw new Error(`Cannot convert theme value to a CSS variable: ${String(value)}`);
}

function addNestedVariables(
  variables: Record<string, string>,
  value: unknown,
  pathSegments: string[],
  options: CssVariableOptions,
): void {
  if (value === undefined || value === null) {
    return;
  }

  if (isPlainObject(value)) {
    for (const [key, childValue] of Object.entries(value)) {
      addNestedVariables(
        variables,
        childValue,
        [...pathSegments, key],
        options,
      );
    }

    return;
  }

  const variableName = createVariableName(pathSegments, options);
  variables[variableName] = stringifyCssValue(value);
}

export function generateCssVariables(
  theme: ThemeDefinition,
  options: CssVariableOptions = {},
): Record<string, string> {
  const variables: Record<string, string> = {};

  addNestedVariables(
    variables,
    theme.primitives.colors,
    ['colors'],
    options,
  );

  addNestedVariables(
    variables,
    theme.primitives.typography,
    ['typography'],
    options,
  );

  addNestedVariables(
    variables,
    theme.primitives.spacing,
    ['spacing'],
    options,
  );

  addNestedVariables(
    variables,
    theme.primitives.radius,
    ['radius'],
    options,
  );

  addNestedVariables(
    variables,
    theme.primitives.shadow,
    ['shadow'],
    options,
  );

  addNestedVariables(
    variables,
    theme.primitives.motion,
    ['motion'],
    options,
  );

  addNestedVariables(
    variables,
    theme.semanticTokens.color,
    ['color'],
    options,
  );

  addNestedVariables(
    variables,
    theme.componentTokens,
    [],
    options,
  );

  return variables;
}

export function generateCssVariableDeclarations(
  theme: ThemeDefinition,
  options: CssVariableOptions = {},
): string {
  const variables = generateCssVariables(theme, options);

  return Object.entries(variables)
    .sort(([firstName], [secondName]) => firstName.localeCompare(secondName))
    .map(([name, value]) => `  ${name}: ${value};`)
    .join('\n');
}

export function generateThemeCss(
  theme: ThemeDefinition,
  options: GenerateThemeCssOptions = {},
): string {
  const selector = options.selector ?? DEFAULT_SELECTOR;
  const declarations = generateCssVariableDeclarations(theme, options);

  if (!declarations) {
    return `${selector} {}\n`;
  }

  return `${selector} {\n${declarations}\n}\n`;
}
