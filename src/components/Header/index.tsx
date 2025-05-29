import { MapPinIcon } from "@phosphor-icons/react";
import coffeDeliveryLogo from "../../assets/coffe_delivery_logo.svg";
import { Cart } from "../Cart";
import { ButtonsWrapper, HeaderContainer, LocateButton } from "./styles";
import { NavLink } from "react-router-dom";

export function Header() {
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
            <Cart />
          </NavLink>
        </ButtonsWrapper>
      </div>
    </HeaderContainer>
  );
}
