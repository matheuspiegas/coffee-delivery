import {
  CoffeeIcon,
  PackageIcon,
  ShoppingCartIcon,
  TimerIcon,
} from "@phosphor-icons/react";
import { BenefitsSection, HeroContainer } from "./styles";
import { BenefitsItem } from "./BenefitsItem";
import coffeeHero from "../../assets/coffee-hero.svg";
import { RegularTextContainer } from "../Text/RegularText/styles";
import { TitleContainer } from "../Text/TitleText/styles";

export function Hero() {
  return (
    <HeroContainer>
      <div>
        <TitleContainer size="xl" color="title" weight={800}>
          Encontre o café perfeito para qualquer hora do dia
        </TitleContainer>
        <RegularTextContainer size="l" color="subtitle" weight={400}>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </RegularTextContainer>
        <BenefitsSection>
          <BenefitsItem
            icon={<ShoppingCartIcon weight="fill" size={16} />}
            label="Compra simples e segura"
            className="shopping"
          />
          <BenefitsItem
            icon={<TimerIcon weight="fill" size={16} />}
            label="Entrega rápida e rastreada"
            className="timer"
          />
          <BenefitsItem
            icon={<PackageIcon weight="fill" size={16} />}
            label="Embalagem mantém o café intacto"
            className="package"
          />
          <BenefitsItem
            icon={<CoffeeIcon weight="fill" size={16} />}
            label="O café chega fresquinho até você"
            className="coffee"
          />
        </BenefitsSection>
      </div>
      <img src={coffeeHero} alt="" />
    </HeroContainer>
  );
}
