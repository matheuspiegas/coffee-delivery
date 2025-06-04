import { MapPinIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import coffeDeliveryLogo from "../../assets/coffe_delivery_logo.svg";
import {
  ButtonsWrapper,
  CartButton,
  HeaderContainer,
  LocateButton,
} from "./styles";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const { quantityOfItemsInCart } = useContext(CartContext);

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to={"/"}>
          <img src={coffeDeliveryLogo} alt="" />
        </NavLink>
        <ButtonsWrapper>
          <LocateButton>
            <MapPinIcon weight="fill" size={22} />
            Porto Alegre, RS
          </LocateButton>
          <NavLink to={"/checkout"}>
            <CartButton>
              {quantityOfItemsInCart > 0 && (
                <span>{quantityOfItemsInCart}</span>
              )}
              <ShoppingCartIcon size={22} weight="fill" />
            </CartButton>
          </NavLink>
        </ButtonsWrapper>
      </div>
    </HeaderContainer>
  );
}
