import type { ComponentProps } from "react";
import { ButtonContainer } from "./styles";

interface PrimaryButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean;
}

export function PrimaryButton({
  isLoading = false,
  ...props
}: PrimaryButtonProps) {
  return (
    <ButtonContainer {...props} disabled={isLoading}>
      {props.children}
    </ButtonContainer>
  );
}
