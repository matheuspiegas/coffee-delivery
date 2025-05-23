import { CoffeeIcon, PackageIcon, ShoppingCartIcon, TimerIcon } from "@phosphor-icons/react";
import { BenefitsSection, HeroContainer } from "./styles";
import { BenefitsItem } from "./BenefitsItem";

export function Hero() {
  return (
    <HeroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <BenefitsSection>
          <BenefitsItem icon={<ShoppingCartIcon weight="fill" size={16} />} label="Compra simples e segura" className="shopping" />
          <BenefitsItem icon={<TimerIcon weight="fill" size={16} />} label="Entrega rápida e rastreada" className="timer" />
          <BenefitsItem icon={<PackageIcon weight="fill" size={16} />} label="Embalagem mantém o café intacto" className="package" />
          <BenefitsItem icon={<CoffeeIcon weight="fill" size={16} />} label="O café chega fresquinho até você" className="coffee" />
        </BenefitsSection>
      </div>
    </HeroContainer>
  )
}