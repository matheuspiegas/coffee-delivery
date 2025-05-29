import { useContext, useState } from "react";
import { CartButton } from "../../../../components/Button/Cart";
import { QuantityButton } from "../../../../components/Button/Quantity";
import { RegularText, TitleText } from "../../../../components/Typography";
import {
  CoffeeCardContainer,
  FooterContainer,
  HeadingContainer,
  TagsContainer,
} from "./styles";
import { CartContext } from "../../../../contexts/CartContext";

interface CoffeeCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

export function CoffeeCard(coffee: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { handleAddItemToCart } = useContext(CartContext);

  function decrementQuantity() {
    setQuantity((state) => Math.max(state - 1, 1));
  }

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function handleAdd() {
    handleAddItemToCart({ ...coffee, quantity });
    setQuantity(1);
  }
  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />

      <TagsContainer>
        {coffee.tags.map((tag) => {
          return <span key={tag + new Date().getTime()}>{tag}</span>;
        })}
      </TagsContainer>

      <HeadingContainer>
        <TitleText size="s" color="subtitle" weight={700}>
          {coffee.title}
        </TitleText>
        <RegularText color="label" size="s">
          {coffee.description}
        </RegularText>
      </HeadingContainer>

      <FooterContainer>
        <TitleText color="text">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(coffee.price)}
        </TitleText>
        <div>
          <QuantityButton
            quantity={quantity}
            decrementQuantity={decrementQuantity}
            incrementQuantity={incrementQuantity}
          />
          <CartButton onClick={handleAdd} />
        </div>
      </FooterContainer>
    </CoffeeCardContainer>
  );
}
