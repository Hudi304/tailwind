import { Color } from '../colors/colors'

export type ThemeType = 'dark' | 'light';

export interface Theme {
  '--cascada--colors---light--green': Color;
  '--cascada--colors---green--accent': Color;
  '--cascada--colors---cascada--secondary': Color;
  '--cascada--colors---green--accent--dark': Color;
  '--cascada--colors---cascada--primary': Color;
  '--cascada--colors---background': Color;
  '--u-i---white': Color;
  '--u-i---stroke': Color;
  '--u-i---stroke-2': Color;
  '--u-i---alert---dark': Color;
  '--u-i---alert---default': Color;
  '--u-i---alert---light': Color;
  '--u-i---orange---light': Color;
  '--u-i---orange---dark': Color;
  '--u-i---teal---dark': Color;
  '--u-i---teal---light': Color;
};

export const THEMES: Record<ThemeType, Theme> = {
  light: {
    '--cascada--colors---light--green': Color.cascada_colors_light_green,
    '--cascada--colors---green--accent': Color.cascada_colors_green_accent,
    '--cascada--colors---cascada--secondary': Color.cascada_colors_cascada_secondary,
    '--cascada--colors---green--accent--dark': Color.cascada_colors_green_accent_dark,
    '--cascada--colors---cascada--primary': Color.cascada_colors_cascada_primary,
    '--cascada--colors---background': Color.cascada_colors_background,
    '--u-i---white': Color.ui_white,
    '--u-i---stroke': Color.ui_stroke,
    '--u-i---stroke-2': Color.ui_stroke_2,
    '--u-i---alert---dark': Color.ui_alert_dark,
    '--u-i---alert---default': Color.ui_alert_default,
    '--u-i---alert---light': Color.ui_alert_light,
    '--u-i---orange---light': Color.ui_orange_light,
    '--u-i---orange---dark': Color.ui_orange_dark,
    '--u-i---teal---dark': Color.ui_teal_dark,
    '--u-i---teal---light': Color.ui_teal_light,
  },
  dark: {
    '--cascada--colors---light--green': Color.cascada_colors_light_green,
    '--cascada--colors---green--accent': Color.cascada_colors_green_accent,
    '--cascada--colors---cascada--secondary': Color.cascada_colors_cascada_secondary,
    '--cascada--colors---green--accent--dark': Color.cascada_colors_green_accent_dark,
    '--cascada--colors---cascada--primary': Color.cascada_colors_cascada_primary,
    '--cascada--colors---background': Color.cascada_colors_background,
    '--u-i---white': Color.ui_white,
    '--u-i---stroke': Color.ui_stroke,
    '--u-i---stroke-2': Color.ui_stroke_2,
    '--u-i---alert---dark': Color.ui_alert_dark,
    '--u-i---alert---default': Color.ui_alert_default,
    '--u-i---alert---light': Color.ui_alert_light,
    '--u-i---orange---light': Color.ui_orange_light,
    '--u-i---orange---dark': Color.ui_orange_dark,
    '--u-i---teal---dark': Color.ui_teal_dark,
    '--u-i---teal---light': Color.ui_teal_light,
  }
};
