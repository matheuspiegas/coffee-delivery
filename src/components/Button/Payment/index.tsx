import type { ComponentProps } from "react";
import { Container } from "./styles";

interface PaymentButtonProps extends ComponentProps<"button"> {}

export function PaymentButton(props: PaymentButtonProps) {
  return <Container {...props}>{props.children}</Container>;
}
