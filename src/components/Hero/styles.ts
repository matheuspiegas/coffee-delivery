import styled from "styled-components";
import background from "../../assets/Background.png"

export const HeroContainer = styled.div`
  background: url(${background}) no-repeat center;
  background-size: cover;
  width: 100%;
  margin: 0 auto;
  height: 34rem;
  overflow: hidden;
  padding-inline: 10rem;
  @media (max-width: 768px) {
    padding: 1rem;
    /* background-color: red; */
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div{
    @media (max-width: 768px) {
      /* background-color: blue; */
    }
    max-width: 36.75rem;
    h1 {
    font-family: ${({ theme }) => theme.typography.baloo2["font-family"]};
    font-size: ${({ theme }) => theme.typography.baloo2.titles.xl.size};
    font-weight: ${({ theme }) => theme.typography.baloo2.titles.xl.weight};
    line-height: ${({ theme }) => theme.typography.baloo2.titles.xl["line-height"]};
    color: ${({ theme }) => theme.colors.base["base-title"]};
    margin-top: 5.875rem;
    }
    > p {
      font-weight: ${({ theme }) => theme.typography.roboto.texts.l.weight};
      font-size: ${({ theme }) => theme.typography.roboto.texts.l.size};
      line-height: ${({ theme }) => theme.typography.roboto.texts.l["line-height"]};
      color: ${({ theme }) => theme.colors.base["base-subtitle"]};
    }    
  }
`

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
`
