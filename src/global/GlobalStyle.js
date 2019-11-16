import { createGlobalStyle } from "styled-components";

import { mainFont, colors } from "./utils/styles";

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
  background: ${colors.primaryColor};
  ${mainFont}
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

button {
  background-color: ${colors.tertiaryColor};
  border: none;
}
`;
