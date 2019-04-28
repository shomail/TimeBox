import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }
    *, *:before, *:after {
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }
    body {
        padding: 0;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.5rem;
        line-height: 2;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    a {
        text-decoration: none;
        color: ${theme.black};
    }
    ul {
        list-style: none;
    }
`;

export default GlobalStyles;
