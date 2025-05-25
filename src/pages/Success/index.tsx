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

export function SuccessPage() {
  return (
    <Container>
      <OrderContainer>
        <HeadingContainer>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </HeadingContainer>

        <OrderInfoContainer>
          <OrderInfoContent>
            <OrderInfoItem variant="purple">
              <span>
                <MapPinIcon weight="fill" />
              </span>
              <p>
                Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
                Alegre, RS
              </p>
            </OrderInfoItem>
            <OrderInfoItem variant="yellow">
              <span>
                <TimerIcon weight="fill" />
              </span>
              <p>
                Previsão de entrega <strong>20 min - 30 min</strong>
              </p>
            </OrderInfoItem>
            <OrderInfoItem variant="yellow-dark">
              <span>
                <CurrencyDollarSimpleIcon weight="fill" />
              </span>
              <p>
                Pagamento na entrega <br />
                Cartão de Crédito
              </p>
            </OrderInfoItem>
          </OrderInfoContent>
        </OrderInfoContainer>
      </OrderContainer>
      <img src={incomingOrded} alt="" />
    </Container>
  );
}
