import styled from "styled-components";

export const DetailsWrapper = styled.div`
  background: url(${props => props.url}) no-repeat center center fixed;
  background-size: cover;
  height: 90vh;
  overflow: auto;
  position: relative;

  .content {
    display: grid;
    justify-items: center;
    grid-gap: 1rem;

    @media screen and (min-width: 900px) {
      grid-template-columns: 500px 1fr;
    }
  }

  .header {
    width: 100%;
    display: grid;
    grid-gap: 1rem;
  }

  .subheading {
    display: grid;
    grid-template-columns: repeat(2, 10rem);
    margin-bottom: 2rem;
  }

  .title {
    font-size: 3rem;
  }

  .detail {
    font-size: 1.3rem;
  }

  .overview {
    font-size: 1.6rem;
  }

  .details,
  .extras {
    display: grid;
    grid-gap: 1rem;
  }

  .genres {
    display: flex;
  }

  .genre {
    margin-right: 2px;
  }

  .overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    overflow: auto;
  }

  .content {
    color: white;
    padding: 20px 50px;
  }
`;
