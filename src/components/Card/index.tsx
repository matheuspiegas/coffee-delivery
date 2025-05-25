import { CardContainer, Price } from "./styles";
import americano from "../../assets/coffes/americano.svg";
import { SecondaryButton } from "../Button/Secondary";
import { QuantityButton } from "../Button/Quantity";

export function Card() {
  return (
    <CardContainer>
      <img src={americano} alt="" />
      <div className="coffeeInfo">
        <span>Americano</span>
        <div className="buttons">
          <QuantityButton />
          <SecondaryButton>Remover</SecondaryButton>
        </div>
      </div>
      <Price>
        <span>
          {Intl.NumberFormat("pt-BR", {
            currency: "BRL",
            style: "currency",
          }).format(9.99)}
        </span>
      </Price>
    </CardContainer>
  );
}
