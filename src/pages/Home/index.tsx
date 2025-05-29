import { TitleText } from "../../components/Typography";
import { Hero } from "./components/Hero";
import {
  CoffeesContainer,
  CoffeesContent,
  Heading,
  HomeContainer,
} from "./styles";
import { coffees } from "../../../data.json";
import { CoffeeCard } from "./components/CoffeeCard";

export function HomePage() {
  return (
    <HomeContainer>
      <Hero />

      <CoffeesContainer className="container">
        <Heading>
          <TitleText size="l" weight={800} color="subtitle">
            Nossos Cafés
          </TitleText>
        </Heading>
        <CoffeesContent>
          {coffees.map((coffee) => {
            return (
              <CoffeeCard
                image={coffee.image}
                description={coffee.description}
                id={coffee.id}
                price={coffee.price}
                tags={coffee.tags}
                title={coffee.title}
                key={coffee.id}
              />
            );
          })}
        </CoffeesContent>
      </CoffeesContainer>
    </HomeContainer>
  );
}
