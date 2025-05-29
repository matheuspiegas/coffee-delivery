import styled from "styled-components";

export const HomeContainer = styled.div`
  margin-bottom: 9.813rem;
  @media (width < 1000px) {
    margin-bottom: 5rem;
  }
`;

export const CoffeesContainer = styled.div`
  margin-top: 2rem;
  padding-inline: 1rem;
`;

export const Heading = styled.div`
  margin-bottom: 3.5rem;
`;

export const CoffeesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 1rem;
  align-items: center;
  row-gap: 2.5rem;

  @media (width < 661px) {
    grid-template-columns: 1fr;
  }
`;
