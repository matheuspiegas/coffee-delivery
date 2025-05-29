import { useContext, useState } from "react";
import { CartButton } from "../../../../components/Button/Cart";
import { QuantityButton } from "../../../../components/Button/Quantity";
import { RegularText, TitleText } from "../../../../components/Typography";
import {
  ActionsContainer,
  CoffeeCardContainer,
  CoffeeCardContent,
  FooterContainer,
  HeadingContainer,
  PriceContainer,
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

      <CoffeeCardContent>
        <HeadingContainer>
          <TitleText size="s" color="subtitle" weight={700}>
            {coffee.title}
          </TitleText>
          <RegularText color="label" size="s">
            {coffee.description}
          </RegularText>
        </HeadingContainer>

        <FooterContainer>
          <PriceContainer>
            <RegularText size="s" color="text">
              R$
            </RegularText>
            <TitleText color="text">
              {Intl.NumberFormat("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(coffee.price)}
            </TitleText>
          </PriceContainer>

          <ActionsContainer>
            <QuantityButton
              quantity={quantity}
              decrementQuantity={decrementQuantity}
              incrementQuantity={incrementQuantity}
            />
            <CartButton onClick={handleAdd} />
          </ActionsContainer>
        </FooterContainer>
      </CoffeeCardContent>
    </CoffeeCardContainer>
  );
}
