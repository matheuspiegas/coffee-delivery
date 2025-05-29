import { useContext } from "react";
import { QuantityButton } from "../../../../components/Button/Quantity";
import { SecondaryButton } from "../../../../components/Button/Secondary";
import { RegularText } from "../../../../components/Typography";
import { CartContext } from "../../../../contexts/CartContext";
import { CardContainer, CardContent, Price } from "./styles";

interface CardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
  quantity: number;
}

export function Card(props: CardProps) {
  const {
    handleRemoveCoffeeFromCart,
    handleDecrementCoffeeQuantity,
    handleIncrementCoffeeQuantity,
  } = useContext(CartContext);

  function incrementQuantity() {
    handleIncrementCoffeeQuantity(props.id);
  }
  function decrementQuantity() {
    handleDecrementCoffeeQuantity(props.id);
  }

  return (
    <CardContainer>
      <img src={props.image} alt="" />
      <CardContent>
        <RegularText size="m" weight={400} color="subtitle">
          {props.title}
        </RegularText>
        <div className="buttons">
          <QuantityButton
            quantity={props.quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <SecondaryButton onClick={() => handleRemoveCoffeeFromCart(props.id)}>
            Remover
          </SecondaryButton>
        </div>
      </CardContent>
      <Price>
        <span>
          {Intl.NumberFormat("pt-BR", {
            currency: "BRL",
            style: "currency",
          }).format(props.price)}
        </span>
      </Price>
    </CardContainer>
  );
}
