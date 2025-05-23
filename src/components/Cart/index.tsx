import { ShoppingCartIcon } from "@phosphor-icons/react";
import { CartButton } from "./styles";

export function Cart() {
  return (
    <CartButton>
      <ShoppingCartIcon weight="fill" size={22} />
    </CartButton>
  )
}