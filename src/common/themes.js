import theme from 'styled-theming';
import '../common/styles/_light.scss';


export const backgroundColor = theme('mode', {
  light: '#fff',
  dark: '#1c1c1c'
});
export const textColor = theme('mode', {
  light: '#000',
  dark: '#fff'
});

export const bordersColor = theme('mode', {
  light: '#000',
  dark: '#fff'
});