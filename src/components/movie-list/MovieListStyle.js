import styled from "styled-components";

export const MovieListWrapper = styled.div`
  display: grid;
  grid-row-gap: 3rem;

  button {
    justify-self: center;
    border-radius: 5px;
    padding: 10px 50px;

    :hover {
      cursor: pointer;
    }
  }

  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 2rem;
    justify-items: center;
  }

  h2 {
    color: white;
    font-size: 2rem;
  }
`;
