import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { QuantityButtonContainer } from "./styles";

interface QuantityButtonProps {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

export function QuantityButton({
  quantity,
  decrementQuantity,
  incrementQuantity,
}: QuantityButtonProps) {
  return (
    <QuantityButtonContainer>
      <button
        type="button"
        onClick={decrementQuantity}
        disabled={quantity === 1}
      >
        <MinusIcon weight="bold" />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={incrementQuantity}>
        <PlusIcon weight="bold" />
      </button>
    </QuantityButtonContainer>
  );
}
