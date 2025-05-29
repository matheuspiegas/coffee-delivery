import {
  CoffeeIcon,
  PackageIcon,
  ShoppingCartIcon,
  TimerIcon,
} from "@phosphor-icons/react";
import {
  BenefitsSection,
  HeroContainer,
  HeroContent,
  HeroHeadingContainer,
} from "./styles";
import { BenefitsItem } from "./BenefitsItem";
import coffeeHero from "../../../../assets/coffee-hero.svg";
import { RegularText, TitleText } from "../../../../components/Typography";

export function Hero() {
  return (
    <HeroContainer>
      <HeroContent className="container">
        <div>
          <HeroHeadingContainer>
            <TitleText size="xl" color="title">
              Encontre o café perfeito para qualquer hora do dia
            </TitleText>
            <RegularText size="l" color="subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </HeroHeadingContainer>
          <BenefitsSection>
            <BenefitsItem
              icon={<ShoppingCartIcon size={16} weight="fill" />}
              label="Compra simples e segura"
              className="shopping"
            />
            <BenefitsItem
              icon={<PackageIcon size={16} weight="fill" />}
              label="Embalagem mantém o café intacto"
              className="package"
            />
            <BenefitsItem
              icon={<TimerIcon size={16} weight="fill" />}
              label="Entrega rápida e rastreada"
              className="timer"
            />
            <BenefitsItem
              icon={<CoffeeIcon size={16} weight="fill" />}
              label="O café chega fresquinho até você"
              className="coffee"
            />
          </BenefitsSection>
        </div>
        <img src={coffeeHero} alt="" />
      </HeroContent>
    </HeroContainer>
  );
}
