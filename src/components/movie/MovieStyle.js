import styled from "styled-components";

export const MovieWrapper = styled.div`
  a {
    color: white;
  }

  .content {
    display: grid;
    grid-row-gap: 1rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  .no-image {
    width: 200px;
    object-fit: cover;
  }
`;
