import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --green: #05A863;
    --red: #c53030;
    --yellow: #B78931;
    --cyan: #3172B7;
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F2F2F2;
    -webkit-font-smoothing: antialiased;
  }

  body, html, #root {
    width: 100%;
    height: 100%;
  }

  body, input, button {
    font-family: Roboto, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    font-size: 3rem;
  }

  button {
    cursor: pointer;
  }
`;
