import {
  CurrencyDollarSimpleIcon,
  MapPinIcon,
  TimerIcon,
} from "@phosphor-icons/react";
import {
  Container,
  HeadingContainer,
  OrderContainer,
  OrderInfoContainer,
  OrderInfoContent,
  OrderInfoItem,
} from "./styles";

import incomingOrded from "../../assets/incoming-order.svg";
import { RegularText, TitleText } from "../../components/Typography";

export function SuccessPage() {
  return (
    <Container className="container">
      <OrderContainer>
        <HeadingContainer>
          <TitleText size="l" color="text">
            Uhu! Pedido confirmado
          </TitleText>
          <RegularText size="l" color="subtitle">
            Agora é só aguardar que logo o café chegará até você
          </RegularText>
        </HeadingContainer>

        <OrderInfoContainer>
          <OrderInfoContent>
            <OrderInfoItem variant="purple">
              <span>
                <MapPinIcon weight="fill" />
              </span>
              <RegularText color="text">
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{" "}
                <br />
                Farrapos - Porto Alegre, RS
              </RegularText>
            </OrderInfoItem>
            <OrderInfoItem variant="yellow">
              <span>
                <TimerIcon weight="fill" />
              </span>
              <RegularText color="text">
                Previsão de entrega <br /> <strong>20 min - 30 min</strong>
              </RegularText>
            </OrderInfoItem>
            <OrderInfoItem variant="yellow-dark">
              <span>
                <CurrencyDollarSimpleIcon weight="fill" />
              </span>
              <RegularText color="text">
                Pagamento na entrega <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            </OrderInfoItem>
          </OrderInfoContent>
        </OrderInfoContainer>
      </OrderContainer>
      <img src={incomingOrded} alt="" />
    </Container>
  );
}
