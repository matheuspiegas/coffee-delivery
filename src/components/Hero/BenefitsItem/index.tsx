import type { ComponentProps, ReactElement } from "react";
import { BenefitsItemContainer } from "./styles";
import type { IconProps } from "@phosphor-icons/react";
import { RegularTextContainer } from "../../Text/RegularText/styles";

interface BenefitsItemProps extends ComponentProps<"li"> {
  icon: ReactElement<IconProps>;
  label: string;
}

export function BenefitsItem(props: BenefitsItemProps) {
  return (
    <BenefitsItemContainer {...props}>
      <span>{props.icon}</span>
      <RegularTextContainer size="m" color="text" weight={400}>
        {props.label}
      </RegularTextContainer>
    </BenefitsItemContainer>
  );
}
