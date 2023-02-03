import { DefaultTheme } from 'styled-components';
import { THEME } from './utils/constants/themeValue';

export const darkTheme: DefaultTheme = {
  text: THEME.LIGHT,
  background: THEME.DARK,
};

export const lightTheme: DefaultTheme = {
  text: THEME.DARK,
  background: THEME.LIGHT,
};
