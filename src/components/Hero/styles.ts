import styled from "styled-components";
import background from "../../assets/Background.png";

export const HeroContainer = styled.div`
  background: url(${background}) no-repeat center;
  background-size: cover;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 34rem;
  overflow: hidden;
  padding-inline: 10rem;
  padding-top: 5.875rem;
  display: flex;
  gap: 56px;

  img {
    width: 476px;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
    grid-template-columns: 1fr;
    grid-template-areas:
      "shopping"
      "package"
      "timer"
      "coffee";
  }
`;
