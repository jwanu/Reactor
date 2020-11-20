import { css, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import media from './responsive';
import color from './colors';
import size from './size';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * { 
    box-sizing: border-box;
    }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  ol, ul, li {
    list-style: none;
  }
  body {
    @import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css');
    font-family: "Noto Sans KR", sans-serif !important;
  }
`;

const colorTheme = {
  mainColor: color.pink[2],
};

// mixin 만들수있음! 프로젝트에 사용할 버튼 mixin예제
const Btn = css`
  border: 1px solid ${colorTheme.mainColor};
  color: ${colorTheme.mainColor};
  background: #fff;
  padding: ${size.padding.sm};
  font-size: ${size.font.md};
  ${(props) =>
    props.active &&
    css`
      background: ${colorTheme.mainColor};
      color: #fff;
    `};
  transition: all 0.1s ease;
  &:hover {
    background: ${color.pink[0]};
    color: #fff;
  }
`;

// props 유무에 따른 조건 mixin
const margino = css`
  ${({ margin }) => margin && `margin: ${margin};`}
`;

const theme = {
  ...colorTheme,
  Btn,
};

export { size, media, color, theme, GlobalStyles };
