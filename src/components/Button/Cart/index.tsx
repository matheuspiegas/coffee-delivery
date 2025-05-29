import { ShoppingCartIcon } from "@phosphor-icons/react";
import { CartButtonContainer } from "./styles";
import type { ComponentProps } from "react";

interface CartButtonProps extends ComponentProps<"button"> {}

export function CartButton(props: CartButtonProps) {
  return (
    <CartButtonContainer {...props}>
      <ShoppingCartIcon weight="fill" size={22} />
    </CartButtonContainer>
  );
}
