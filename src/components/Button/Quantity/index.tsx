import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { QuantityButtonContainer } from "./styles";

interface QuantityButtonProps {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  isLoading?: boolean;
}

export function QuantityButton({
  quantity,
  decrementQuantity,
  incrementQuantity,
  isLoading = false,
}: QuantityButtonProps) {
  return (
    <QuantityButtonContainer>
      <button
        type="button"
        onClick={decrementQuantity}
        disabled={quantity === 1 || isLoading}
      >
        <MinusIcon weight="bold" />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={incrementQuantity} disabled={isLoading}>
        <PlusIcon weight="bold" />
      </button>
    </QuantityButtonContainer>
  );
}
