import type { ComponentProps, ReactElement } from "react";
import { BenefitsItemContainer } from "./styles";
import type { IconProps } from "@phosphor-icons/react";
import { RegularText } from "../../../../../components/Typography";

interface BenefitsItemProps extends ComponentProps<"li"> {
  icon: ReactElement<IconProps>;
  label: string;
}

export function BenefitsItem(props: BenefitsItemProps) {
  return (
    <BenefitsItemContainer {...props}>
      <span>{props.icon}</span>
      <RegularText size="m" color="text">
        {props.label}
      </RegularText>
    </BenefitsItemContainer>
  );
}
