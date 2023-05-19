import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  main {
    margin:0;
    min-height: calc(100vh - 238px);
    background-color: #1a1a1a;
  }
`;
 
export default GlobalStyle;