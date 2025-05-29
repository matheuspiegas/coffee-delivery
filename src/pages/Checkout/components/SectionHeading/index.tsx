import type { ReactNode } from "react";
import { RegularText } from "../../../../components/Typography";
import { SectionHeadingContainer } from "./styles";

interface SectionHeadingProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export function SectionHeading({ icon, title, subtitle }: SectionHeadingProps) {
  return (
    <SectionHeadingContainer>
      {icon}
      <div>
        <RegularText size="m" weight={400} color="subtitle">
          {title}
        </RegularText>
        <RegularText size="s" weight={400} color="text">
          {subtitle}
        </RegularText>
      </div>
    </SectionHeadingContainer>
  );
}
