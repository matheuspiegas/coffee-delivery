import type { ComponentProps } from "react";
import { ButtonContainer } from "./styles";

interface PrimaryButtonProps extends ComponentProps<"button"> {}

export function PrimaryButton(props: PrimaryButtonProps) {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
}
