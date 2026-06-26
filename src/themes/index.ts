import type { ThemeDefinition } from '../core/themeTypes';
import { forestCanopyTheme } from './forestCanopy.theme';
import { kolibriDefaultTheme } from './kolibriDefault.theme';
import { oceanDepthTheme } from './oceanDepth.theme';

export { forestCanopyTheme } from './forestCanopy.theme';
export { kolibriDefaultTheme } from './kolibriDefault.theme';
export { oceanDepthTheme } from './oceanDepth.theme';

export const themes: ThemeDefinition[] = [
  kolibriDefaultTheme,
  forestCanopyTheme,
  oceanDepthTheme,
];

export const themeIds = themes.map(theme => theme.metadata.id);

export function getThemeById(themeId: string): ThemeDefinition | undefined {
  return themes.find(theme => theme.metadata.id === themeId);
}

export function getThemeNames(): string[] {
  return themes.map(theme => theme.metadata.name);
}
