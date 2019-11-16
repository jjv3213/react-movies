import styled from "styled-components";

import { colors } from "../../global/utils/styles";

export const NavWrapper = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondaryColor};

  a {
    color: black;
    font-size: 2.5rem;
  }
`;
