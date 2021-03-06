import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }

  :root{
    --white: #fff;
    --black: #000;
  
    --gray-100: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-800: #29292e;
    --gray-850: #1f2729;
    --gray-900: #121214;

    --red-500: #E53E3E;

    --green-600: #2F855A;

    --blue: #00A0ED;

    --cyan-500: #61dafb;
    --yellow-500: #eba417;
  }

  @media(max-width: 1080px) {
    html { 
      font-size: 93.73%;
    }
  }

  @media(max-width: 720px) {
    html { 
      font-size: 87.5%;
    }
  }

  body { 
    background: var(--gray-900);
    color: var(--white);
  }

  body, input, textarea, select, button{
    font: 400 1rem "Roboto", sans-serif;
  }

  button{
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: none;
  }
}
`