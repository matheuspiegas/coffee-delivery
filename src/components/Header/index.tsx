import { MapPinIcon } from "@phosphor-icons/react";
import coffeDeliveryLogo from "../../assets/coffe_delivery_logo.svg";
import { Cart } from "../Cart";
import { ButtonsWrapper, HeaderContainer, LocateButton } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeDeliveryLogo} alt="" />
      <ButtonsWrapper>
        <LocateButton>
          <MapPinIcon weight="fill" size={22} />
          Porto Alegre, RS
        </LocateButton>
        <Cart />
      </ButtonsWrapper>
    </HeaderContainer>
  );
}
