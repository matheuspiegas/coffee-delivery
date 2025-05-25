import { useState, type ComponentProps } from "react";
import { InputWrapper } from "./styles";

interface InputProps extends ComponentProps<"input"> {
  containerProps: ComponentProps<"label">;
}

export function Input(props: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputWrapper isFocused={isFocused} {...props.containerProps}>
      <input
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {!props.required && <span>Opcional</span>}
    </InputWrapper>
  );
}
