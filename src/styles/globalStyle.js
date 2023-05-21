import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  #root {
    max-width: 650px;
  }
  main {
    margin:0;
    min-height: calc(100vh - 238px);
    background-color: #1a1a1a;
  }
  section {
    width: 100%;
    padding: 15px 5px
  }
`;
 
export default GlobalStyle;