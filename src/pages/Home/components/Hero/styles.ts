import styled from "styled-components";
import background from "../../../../assets/Background.png";

export const HeroContainer = styled.div`
  width: 100%;
  height: 34rem;
  background: url(${background}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 1rem;

  @media (width < 1000px) {
    align-items: start;
    height: auto;
    margin-bottom: 5rem;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media (width < 1000px) {
    img {
      display: none;
    }
  }
`;

export const HeroHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BenefitsSection = styled.ul`
  display: grid;
  list-style: none;
  row-gap: 1.25rem;
  grid-template-areas:
    "shopping package"
    "timer coffee";
  grid-template-columns: 1fr 1fr;
  margin-top: 4.125rem;

  @media (max-width: 1024px) {
    grid-template-columns: auto;
    justify-content: start;
    column-gap: 1rem;
  }
`;
