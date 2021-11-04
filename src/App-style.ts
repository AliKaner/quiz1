import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: rgba(136,224,239,1);
  }

  .score {
    linear-gradient(90deg, rgba(136,224,239,1) 0%, rgba(22,30,84,1) 33%);
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(90deg, rgba(136,224,239,1) 0%, rgba(22,30,84,1) 33%, rgba(54,37,84,1) 66%, rgba(255,81,81,1) 100%);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-size: 100px;
    text-align: center;
    margin: 30px;
  }

  .start, .next {
    cursor: pointer;
    background: linear-gradient(321deg, rgba(255,81,81,1) 22%, rgba(255,155,106,1) 72%);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
