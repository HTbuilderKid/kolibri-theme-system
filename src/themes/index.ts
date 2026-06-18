import type { ThemeDefinition } from '../core/themeTypes';
import { kolibriDefaultTheme } from './kolibriDefault.theme';

export { kolibriDefaultTheme } from './kolibriDefault.theme';

export const themes: ThemeDefinition[] = [
  kolibriDefaultTheme,
];

export const themeIds = themes.map(theme => theme.metadata.id);

export function getThemeById(themeId: string): ThemeDefinition | undefined {
  return themes.find(theme => theme.metadata.id === themeId);
}

export function getThemeNames(): string[] {
  return themes.map(theme => theme.metadata.name);
}
