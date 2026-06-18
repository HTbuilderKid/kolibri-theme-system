import { defaultTheme } from '../core/themeDefaults';
import type { ThemeDefinition } from '../core/themeTypes';

export const kolibriDefaultTheme: ThemeDefinition = {
  ...defaultTheme,

  metadata: {
    ...defaultTheme.metadata,
    id: 'kolibri-default',
    name: 'Kolibri Default',
    description:
      'A calm baseline theme inspired by Kolibri’s default interface.',
    version: '0.1.0',
    tags: ['default', 'education', 'accessible', 'kolibri'],
  },
};
