import {Theme} from '@react-navigation/native';

interface Themes extends Theme {
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    nav_background: string;
    separator: string;
    shadow: string;
  };
}

const ColorBase = {
  RED: '#FF342A',
  ORANGE: '#FF8A00',
  YELLOW: '#FFC500',
  GREEN: '#43D459',
  SKYBLUE: '#2EA0D7',
  BLUE: '#0006FF',
  PURPLE: '#4E4CD0',
  PINK: '#FF284B',

  BLACK: '#000',
  LIGHTBLACK: '#1E1E1E',
  LIGHTGRAY: 'E1E1E7',
  LIGHTGRAY_2: '#CBCBD0',
  MIDGRAY: '#C0C0C5',
  GRAY: '#838388',
  LIGHT_WHITE: '#F7F7F7',
  WHITE: '#FFF',
};

const DarkTheme = {
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: ColorBase.LIGHTBLACK,
    card: 'rgb(255, 255, 255)',
    text: ColorBase.WHITE,
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    nav_background: ColorBase.LIGHTGRAY,
    separator: ColorBase.MIDGRAY,
    shadow: 'rgba(0, 0, 0, 0.2)',
  },
};

const LightTheme = {
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: ColorBase.LIGHT_WHITE,
    card: 'rgb(255, 255, 255)',
    text: ColorBase.BLACK,
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    nav_background: ColorBase.GRAY,
    separator: ColorBase.MIDGRAY,
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
};

export { DarkTheme, LightTheme };
export type { Themes };