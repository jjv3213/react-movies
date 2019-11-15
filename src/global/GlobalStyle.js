import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%; 
}

body {
  background: grey;
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  cursor: pointer;
}

ul {
  list-style: none;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
`;
