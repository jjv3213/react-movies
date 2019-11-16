import styled from "styled-components";

export const HomeWrapper = styled.div`
  padding: 2rem 3rem;
  display: grid;
  grid-row-gap: 2rem;

  .genres {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
    justify-items: center;
  }

  .genre-btn {
    border-radius: 5px;
    padding: 10px 50px;
    cursor: pointer;
  }

  .selected {
    background: black;
    color: white;
  }
`;
