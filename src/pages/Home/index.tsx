import { Hero } from "../../components/Hero";
import { TitleContainer } from "../../components/Text/TitleText/styles";
import { Coffees, CoffeesContainer, Heading } from "./styles";

export function HomePage() {
  return (
    <>
      <Hero />
      <CoffeesContainer>
        <Heading>
          <TitleContainer size="l" weight={800} color="subtitle">
            Nossos Cafés
          </TitleContainer>
        </Heading>
        <Coffees></Coffees>
      </CoffeesContainer>
    </>
  );
}
