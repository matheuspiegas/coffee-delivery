import type { ComponentProps } from "react";
import { Container } from "./styles";

interface PaymentButtonProps extends ComponentProps<"button"> {
  error?: boolean;
}

export function PaymentButton(props: PaymentButtonProps) {
  return (
    <Container {...props} error={props.error || false}>
      {props.children}
    </Container>
  );
}
