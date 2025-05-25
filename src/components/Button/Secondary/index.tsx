import { TrashIcon } from "@phosphor-icons/react";
import { ButtonContainer } from "./styles";
import type { ComponentProps } from "react";

interface SecondaryButtonProps extends ComponentProps<"button"> {}

export function SecondaryButton(props: SecondaryButtonProps) {
  return (
    <ButtonContainer {...props}>
      <TrashIcon size={16} />
      {props.children}
    </ButtonContainer>
  );
}
