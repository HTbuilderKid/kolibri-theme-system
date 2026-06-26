import { createTheme } from '../core/createTheme';
import type { ThemeDefinition } from '../core/themeTypes';

export const oceanDepthTheme: ThemeDefinition = createTheme({
  metadata: {
    id: 'ocean-depth',
    name: 'Ocean Depth',
    description:
      'A focused, cool-toned theme built around deep navy, clear cyan, and soft blue-white surfaces.',
    version: '0.1.0',
    tags: ['ocean', 'blue', 'focused', 'modern', 'accessible'],
  },

  primitives: {
    colors: {
      ocean: {
        '50': '#eef8fb',
        '100': '#d6eef5',
        '200': '#adddea',
        '300': '#7ec7dd',
        '400': '#47a9c8',
        '500': '#2389aa',
        '600': '#1b6f8d',
        '700': '#175a73',
        '800': '#12445a',
        '900': '#0b2e3d',
      },

      navy: {
        '50': '#edf3f8',
        '100': '#d7e4ee',
        '200': '#b5ccdc',
        '300': '#8aadc5',
        '400': '#5d89a6',
        '500': '#3f6d89',
        '600': '#315873',
        '700': '#26465d',
        '800': '#1b3448',
        '900': '#102232',
      },

      cyan: {
        '50': '#ebfbff',
        '100': '#cff5ff',
        '200': '#9fecff',
        '300': '#67def5',
        '400': '#2cc7e2',
        '500': '#12a7c4',
        '600': '#0d849d',
        '700': '#0b6a80',
        '800': '#094f60',
        '900': '#063640',
      },

      seafoam: {
        '50': '#ecfbf7',
        '100': '#d3f5eb',
        '200': '#a8ead8',
        '300': '#74dac0',
        '400': '#42c3a4',
        '500': '#24a487',
        '600': '#1c826c',
        '700': '#176858',
        '800': '#124f43',
        '900': '#0c352d',
      },

      coral: {
        '50': '#fff2ef',
        '100': '#ffe1da',
        '200': '#ffc4b7',
        '300': '#ff9e8c',
        '400': '#f7745e',
        '500': '#dd4f39',
        '600': '#b93d2b',
        '700': '#943124',
        '800': '#71261e',
        '900': '#4a1915',
      },
    },
  },

  semanticTokens: {
    color: {
      primary: '{colors.navy.800}',
      primaryHover: '{colors.navy.900}',
      primaryActive: '#071926',
      primaryText: '{colors.gray.0}',

      secondary: '{colors.cyan.600}',
      secondaryHover: '{colors.cyan.700}',
      secondaryActive: '{colors.cyan.800}',
      secondaryText: '{colors.gray.0}',

      surface: '#fafdff',
      surfaceAlt: '{colors.ocean.50}',
      surfaceRaised: '{colors.gray.0}',
      surfaceInverted: '{colors.navy.900}',

      text: '{colors.navy.900}',
      textMuted: '{colors.navy.700}',
      textDisabled: '{colors.gray.500}',
      textInverted: '{colors.gray.0}',

      border: '{colors.ocean.100}',
      borderStrong: '{colors.ocean.300}',

      focusOutline: '{colors.cyan.500}',

      link: '{colors.ocean.700}',
      linkHover: '{colors.navy.900}',

      success: '{colors.seafoam.700}',
      successText: '{colors.gray.0}',

      warning: '{colors.yellow.400}',
      warningText: '{colors.navy.900}',

      error: '{colors.coral.600}',
      errorText: '{colors.gray.0}',

      info: '{colors.cyan.700}',
      infoText: '{colors.gray.0}',

      overlay: 'rgba(16, 34, 50, 0.78)',
      scrim: 'rgba(16, 34, 50, 0.52)',
    },
  },

  componentTokens: {
    appBar: {
      background: '{semantic.color.primary}',
      text: '{semantic.color.primaryText}',
      border: '#071926',
      height: '3.5rem',
      logoHeight: '2rem',
    },

    sideNav: {
      background: '{semantic.color.surface}',
      text: '{semantic.color.text}',
      textMuted: '{semantic.color.textMuted}',
      activeBackground: '{colors.ocean.50}',
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
      dangerHoverBackground: '{colors.coral.700}',

      disabledBackground: '{colors.ocean.100}',
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
      infoBackground: '{colors.ocean.50}',
      infoText: '{colors.ocean.900}',

      successBackground: '{colors.seafoam.50}',
      successText: '{colors.seafoam.900}',

      warningBackground: '{colors.yellow.50}',
      warningText: '{colors.yellow.900}',

      errorBackground: '{colors.coral.50}',
      errorText: '{colors.coral.900}',
    },
  },

  behavior: {
    preferredMode: 'light',
    density: 'comfortable',
    direction: 'ltr',
    reducedMotion: false,
  },
});
