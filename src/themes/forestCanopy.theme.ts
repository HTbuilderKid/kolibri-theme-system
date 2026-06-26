import { createTheme } from '../core/createTheme';
import type { ThemeDefinition } from '../core/themeTypes';

export const forestCanopyTheme: ThemeDefinition = createTheme({
  metadata: {
    id: 'forest-canopy',
    name: 'Forest Canopy',
    description:
      'A calm, nature-inspired educational theme built around deep forest greens, warm earth tones, and soft paper-like surfaces.',
    version: '0.1.0',
    tags: ['nature', 'green', 'education', 'calm', 'accessible'],
  },

  primitives: {
    colors: {
      forest: {
        '50': '#eff8f1',
        '100': '#d9efde',
        '200': '#b5dfbe',
        '300': '#87c996',
        '400': '#59aa6d',
        '500': '#398a52',
        '600': '#2d7043',
        '700': '#225a36',
        '800': '#19462a',
        '900': '#10321e',
      },

      moss: {
        '50': '#f5f8eb',
        '100': '#e8efd4',
        '200': '#d4e1ae',
        '300': '#b9ce7d',
        '400': '#9bb854',
        '500': '#7c9938',
        '600': '#637d2e',
        '700': '#506525',
        '800': '#3d4c1d',
        '900': '#293414',
      },

      bark: {
        '50': '#faf6f1',
        '100': '#f0e5d8',
        '200': '#dfcbb8',
        '300': '#caa98b',
        '400': '#ad8062',
        '500': '#8c6048',
        '600': '#734c39',
        '700': '#5d3e30',
        '800': '#493027',
        '900': '#321f1a',
      },

      leaf: {
        '50': '#edf8ec',
        '100': '#d4eed2',
        '200': '#acdca9',
        '300': '#7acb76',
        '400': '#4dac49',
        '500': '#348a34',
        '600': '#286f2a',
        '700': '#205822',
        '800': '#18431a',
        '900': '#112f12',
      },

      amber: {
        '50': '#fff8e8',
        '100': '#ffedbb',
        '200': '#ffda78',
        '300': '#f9c145',
        '400': '#e9a81d',
        '500': '#bd8100',
        '600': '#996700',
        '700': '#795000',
        '800': '#583a00',
        '900': '#392500',
      },
    },
  },

  semanticTokens: {
    color: {
      primary: '{colors.forest.700}',
      primaryHover: '{colors.forest.800}',
      primaryActive: '{colors.forest.900}',
      primaryText: '{colors.gray.0}',

      secondary: '{colors.moss.600}',
      secondaryHover: '{colors.moss.700}',
      secondaryActive: '{colors.moss.800}',
      secondaryText: '{colors.gray.0}',

      surface: '#fffdf9',
      surfaceAlt: '{colors.forest.50}',
      surfaceRaised: '{colors.gray.0}',
      surfaceInverted: '{colors.forest.900}',

      text: '{colors.forest.900}',
      textMuted: '{colors.forest.700}',
      textDisabled: '{colors.gray.500}',
      textInverted: '{colors.gray.0}',

      border: '{colors.forest.100}',
      borderStrong: '{colors.forest.300}',

      focusOutline: '{colors.amber.500}',

      link: '{colors.forest.700}',
      linkHover: '{colors.forest.900}',

      success: '{colors.leaf.700}',
      successText: '{colors.gray.0}',

      warning: '{colors.amber.400}',
      warningText: '{colors.forest.900}',

      error: '{colors.red.700}',
      errorText: '{colors.gray.0}',

      info: '{colors.forest.700}',
      infoText: '{colors.gray.0}',

      overlay: 'rgba(16, 50, 30, 0.78)',
      scrim: 'rgba(16, 50, 30, 0.5)',
    },
  },

  componentTokens: {
    appBar: {
      background: '{semantic.color.primary}',
      text: '{semantic.color.primaryText}',
      border: '{colors.forest.900}',
      height: '3.5rem',
      logoHeight: '2rem',
    },

    sideNav: {
      background: '{semantic.color.surface}',
      text: '{semantic.color.text}',
      textMuted: '{semantic.color.textMuted}',
      activeBackground: '{colors.forest.50}',
      activeText: '{semantic.color.primary}',
      border: '{semantic.color.border}',
      width: '17rem',
    },

    button: {
      borderRadius: '{radius.sm}',

      primaryBackground: '{semantic.color.primary}',
      primaryText: '{semantic.color.primaryText}',
      primaryHoverBackground: '{semantic.color.primaryHover}',
      primaryActiveBackground: '{semantic.color.primaryActive}',

      secondaryBackground: '{semantic.color.secondary}',
      secondaryText: '{semantic.color.secondaryText}',
      secondaryHoverBackground: '{semantic.color.secondaryHover}',
      secondaryActiveBackground: '{semantic.color.secondaryActive}',

      dangerBackground: '{semantic.color.error}',
      dangerText: '{semantic.color.errorText}',
      dangerHoverBackground: '{colors.red.800}',

      disabledBackground: '{colors.forest.100}',
      disabledText: '{semantic.color.textDisabled}',
    },

    card: {
      background: '{semantic.color.surfaceRaised}',
      text: '{semantic.color.text}',
      border: '{semantic.color.border}',
      borderRadius: '{radius.md}',
      shadow: '{shadow.sm}',
    },

    input: {
      background: '{semantic.color.surface}',
      text: '{semantic.color.text}',
      placeholder: '{semantic.color.textMuted}',
      border: '{semantic.color.borderStrong}',
      borderFocus: '{semantic.color.focusOutline}',
      borderError: '{semantic.color.error}',
      borderRadius: '{radius.sm}',
    },

    modal: {
      background: '{semantic.color.surfaceRaised}',
      text: '{semantic.color.text}',
      borderRadius: '{radius.lg}',
      shadow: '{shadow.xl}',
      scrim: '{semantic.color.scrim}',
    },

    alert: {
      infoBackground: '{colors.forest.50}',
      infoText: '{colors.forest.900}',

      successBackground: '{colors.leaf.50}',
      successText: '{colors.leaf.900}',

      warningBackground: '{colors.amber.50}',
      warningText: '{colors.amber.900}',

      errorBackground: '{colors.red.50}',
      errorText: '{colors.red.900}',
    },
  },

  behavior: {
    preferredMode: 'light',
    density: 'comfortable',
    direction: 'ltr',
    reducedMotion: false,
  },
});
