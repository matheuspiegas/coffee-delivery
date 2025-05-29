import { ShoppingCartIcon } from "@phosphor-icons/react";
import { CartButton } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Cart() {
  const { quantityOfItemsInCart } = useContext(CartContext);
  return (
    <CartButton>
      {quantityOfItemsInCart > 0 && <span>{quantityOfItemsInCart}</span>}
      <ShoppingCartIcon weight="fill" size={22} />
    </CartButton>
  );
}
