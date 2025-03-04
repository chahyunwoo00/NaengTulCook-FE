import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   
   * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }  

  @font-face {
      font-family: 'Pretendard';
      src: url('/assets/fonts/Pretendard-Light.woff2') format('font-woff2');
      font-weight: 100;
      font-style: normal;
  }

  @font-face {
      font-family: 'Pretendard';
      src: url('/assets/fonts/Pretendard-ExtraLight.woff2') format('font-woff2');
      font-weight: 200;
      font-style: normal;
  }

  @font-face {
      font-family: 'Pretendard';
      src: url('/assets/fonts/Pretendard-Light.woff2') format('font-woff2');
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/assets/fonts/Pretendard-Regular.woff2') format('font-woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
      font-family: 'Pretendard';
      src: url('/assets/fonts/Pretendard-Medium.woff2') format('font-woff2');
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/assets/fonts/Pretendard-SemiBold.woff2') format('font-woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/assets/fonts/Pretendard-Bold.woff2') format('font-woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/assets/fonts/Pretendard-ExtraBold.woff2') format('font-woff2');
    font-weight: 800;
    font-style: normal;
  }
  
  @font-face {
      font-family: 'Pretendard';
      src: url('/assets/fonts/Pretendard-Black.woff2') format('font-woff2');
      font-weight: 900;
      font-style: normal;
  }

  @font-face {
    font-family: 'Giants'; 
    src: url('/assets/fonts/Giants-Regular.otf') format('opentype'); 
    font-weight: 400; 
    font-style: normal; 
    font-display: swap;
  }

  @font-face {
    font-family: 'Giants';
    src: url('/assets/fonts/Giants-Bold.otf') format('opentype'); 
    font-weight: 700; 
    font-style: normal; 
    font-display: swap;
  }

  @font-face {
    font-family: 'WorkSans';
    src: url('/assets/fonts/WorkSans-SemiBold.woff2') format('font-woff2'); 
    font-weight: 600; 
    font-style: normal;
    font-display: swap;
  }

  


  body {
    font-family: 'Pretendard', sans-serif;
  }

  @media (min-width: 400px) {
    #root {
      width: 400px;
    }
  }

  @media (max-width: 400px) {
    #root {
      width: 100vw;
    }
  }

  #root {
    box-shadow: rgba(100, 100, 112, 0.2) 0 0 30px 0;
    margin: 0 auto;
    min-height: 100vh;
    position: relative;
  }
  ::-webkit-scrollbar{
    display: none;
  }

  li{
    list-style: none;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }

`;
