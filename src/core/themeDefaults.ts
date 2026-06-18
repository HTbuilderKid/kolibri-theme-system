import type { ThemeBehavior, ThemeDefinition } from './themeTypes';

export const defaultThemeBehavior: ThemeBehavior = {
  preferredMode: 'light',
  density: 'comfortable',
  direction: 'ltr',
  reducedMotion: false,
};

export const defaultTheme: ThemeDefinition = {
  metadata: {
    id: 'kolibri-default',
    name: 'Kolibri Default',
    description: 'A calm baseline theme inspired by Kolibri’s default interface.',
    version: '0.1.0',
    tags: ['default', 'education', 'accessible'],
  },

  primitives: {
    colors: {
      blue: {
        '50': '#eef7ff',
        '100': '#d9ecff',
        '200': '#b8dcff',
        '300': '#88c6ff',
        '400': '#4aa6f0',
        '500': '#1f7fc4',
        '600': '#1767a0',
        '700': '#14527f',
        '800': '#123f61',
        '900': '#0d2b42',
      },

      green: {
        '50': '#edf9f0',
        '100': '#d7f0df',
        '200': '#aee0bf',
        '300': '#7dcc98',
        '400': '#4caf70',
        '500': '#2f8a53',
        '600': '#246f42',
        '700': '#1d5936',
        '800': '#164329',
        '900': '#0f2c1b',
      },

      red: {
        '50': '#fff0f0',
        '100': '#ffdede',
        '200': '#ffc0c0',
        '300': '#ff9494',
        '400': '#f76565',
        '500': '#db3d3d',
        '600': '#b92f2f',
        '700': '#952828',
        '800': '#702020',
        '900': '#4a1717',
      },

      yellow: {
        '50': '#fff9e8',
        '100': '#ffefbf',
        '200': '#ffe18a',
        '300': '#ffd152',
        '400': '#f5b91d',
        '500': '#c98f00',
        '600': '#a87300',
        '700': '#805700',
        '800': '#5c3e00',
        '900': '#382600',
      },

      gray: {
        '0': '#ffffff',
        '50': '#f7f8fa',
        '100': '#eef0f3',
        '200': '#dfe3e8',
        '300': '#c9d0d8',
        '400': '#9da8b3',
        '500': '#6f7b87',
        '600': '#4f5b66',
        '700': '#37424c',
        '800': '#242d35',
        '900': '#151b21',
        '1000': '#000000',
      },
    },

    typography: {
      fontFamily:
        '"Noto Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontFamilyMono:
        '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',

      fontSizeXs: '0.75rem',
      fontSizeSm: '0.875rem',
      fontSizeMd: '1rem',
      fontSizeLg: '1.125rem',
      fontSizeXl: '1.25rem',
      fontSizeXxl: '1.5rem',

      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,

      lineHeightTight: 1.2,
      lineHeightNormal: 1.5,
      lineHeightRelaxed: 1.7,
    },

    spacing: {
      none: '0',
      xxs: '0.125rem',
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      xxl: '3rem',
      xxxl: '4rem',
    },

    radius: {
      none: '0',
      xs: '0.125rem',
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      full: '9999px',
    },

    shadow: {
      none: 'none',
      xs: '0 1px 2px rgba(0, 0, 0, 0.08)',
      sm: '0 2px 6px rgba(0, 0, 0, 0.1)',
      md: '0 6px 16px rgba(0, 0, 0, 0.12)',
      lg: '0 12px 28px rgba(0, 0, 0, 0.16)',
      xl: '0 20px 48px rgba(0, 0, 0, 0.2)',
      focus: '0 0 0 3px rgba(31, 127, 196, 0.35)',
    },

    motion: {
      durationInstant: '0ms',
      durationFast: '120ms',
      durationNormal: '200ms',
      durationSlow: '320ms',

      easingStandard: 'cubic-bezier(0.2, 0, 0, 1)',
      easingEnter: 'cubic-bezier(0, 0, 0.2, 1)',
      easingExit: 'cubic-bezier(0.4, 0, 1, 1)',
    },
  },

  semanticTokens: {
    color: {
      primary: '{colors.blue.600}',
      primaryHover: '{colors.blue.700}',
      primaryActive: '{colors.blue.800}',
      primaryText: '{colors.gray.0}',

      secondary: '{colors.green.600}',
      secondaryHover: '{colors.green.700}',
      secondaryActive: '{colors.green.800}',
      secondaryText: '{colors.gray.0}',

      surface: '{colors.gray.0}',
      surfaceAlt: '{colors.gray.50}',
      surfaceRaised: '{colors.gray.0}',
      surfaceInverted: '{colors.gray.900}',

      text: '{colors.gray.900}',
      textMuted: '{colors.gray.600}',
      textDisabled: '{colors.gray.500}',
      textInverted: '{colors.gray.0}',

      border: '{colors.gray.200}',
      borderStrong: '{colors.gray.400}',

      focusOutline: '{colors.blue.500}',

      link: '{colors.blue.700}',
      linkHover: '{colors.blue.800}',

      success: '{colors.green.600}',
      successText: '{colors.gray.0}',

      warning: '{colors.yellow.400}',
      warningText: '{colors.gray.900}',

      error: '{colors.red.600}',
      errorText: '{colors.gray.0}',

      info: '{colors.blue.600}',
      infoText: '{colors.gray.0}',

      overlay: 'rgba(21, 27, 33, 0.76)',
      scrim: 'rgba(21, 27, 33, 0.48)',
    },
  },

  componentTokens: {
    appBar: {
      background: '{semantic.color.primary}',
      text: '{semantic.color.primaryText}',
      border: '{semantic.color.primaryActive}',
      height: '3.5rem',
      logoHeight: '2rem',
    },

    sideNav: {
      background: '{semantic.color.surface}',
      text: '{semantic.color.text}',
      textMuted: '{semantic.color.textMuted}',
      activeBackground: '{colors.blue.50}',
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
      dangerHoverBackground: '{colors.red.700}',

      disabledBackground: '{colors.gray.200}',
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
      infoBackground: '{colors.blue.50}',
      infoText: '{colors.blue.900}',

      successBackground: '{colors.green.50}',
      successText: '{colors.green.900}',

      warningBackground: '{colors.yellow.50}',
      warningText: '{colors.yellow.900}',

      errorBackground: '{colors.red.50}',
      errorText: '{colors.red.900}',
    },
  },

  behavior: defaultThemeBehavior,
};
