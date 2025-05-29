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
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function SuccessPage() {
  const { order } = useContext(CartContext);
  const formattedOrder = {
    money: "Dinheiro",
    creditCard: "Cartão de crédito",
    debitCard: "Cartão de débito",
  };
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
                Entrega em{" "}
                <strong>
                  {order.rua}, {order.numero}
                </strong>{" "}
                <br />
                {order.bairro} - {order.cidade}, {order.uf}
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
                <strong>
                  {
                    formattedOrder[
                      order.paymentMethod as keyof typeof formattedOrder
                    ]
                  }
                </strong>
              </RegularText>
            </OrderInfoItem>
          </OrderInfoContent>
        </OrderInfoContainer>
      </OrderContainer>
      <img src={incomingOrded} alt="" />
    </Container>
  );
}
