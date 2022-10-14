import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    
  body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
  button {
      cursor: pointer ;
  }

`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
