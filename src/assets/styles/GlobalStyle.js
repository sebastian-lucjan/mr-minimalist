import { createGlobalStyle } from 'styled-components';
import './fonts.scss';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    font-family: 'Work sans';
    font-weight: 400;
    text-align: center;
    color: #fbfbfb;
    min-height: 100vh;

    background-color: #121212;
    font-weight: 300;
    overflow-x: hidden;
  }

  *,*::after, *::before{
    font-family: 'Work sans';
  }
  a, button{
    font-family: 'Work sans';

  }
`;
