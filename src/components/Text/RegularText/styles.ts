import styled from "styled-components";

interface RegularTextContainerProps {
  size: "l" | "m" | "s" | "xs";
  color: "subtitle" | "text" | "label";
  weight: string | number;
}

export const RegularTextContainer = styled.p<RegularTextContainerProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ size, theme }) => theme.sizes[`text-regular-${size}`]};
  color: ${({ color, theme }) => theme.colors[`base-${color}`]};
  font-weight: ${({ weight }) => weight};
  line-height: 1.3;
`;
