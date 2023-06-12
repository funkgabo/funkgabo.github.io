import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background: #5b59ab;
    /* font-family: 'Gayathri', sans-serif; */
  }
  #root {
    box-shadow: 0px 5px 23px 6px rgba(0,0,0,0.52);
    margin: 0 auto;
  }
  main {
    margin:0;
    min-height: calc(100vh - 318px);
    background-color: #1a1a1a;
  }
  section {
    padding: 30px 30px 45px 30px;
  }
`;
 
export default GlobalStyle;