import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { QuantityButtonContainer } from "./styles";

export function QuantityButton() {
  return (
    <QuantityButtonContainer>
      <button type="button">
        <MinusIcon />
      </button>
      <span>1</span>
      <button type="button">
        <PlusIcon />
      </button>
    </QuantityButtonContainer>
  );
}
