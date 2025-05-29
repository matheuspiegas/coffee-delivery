import styled from "styled-components";

interface RegularTextContainerProps {
  size?: "l" | "m" | "s" | "xs";
  color?: "subtitle" | "text" | "label";
  weight?: string | number;
}

interface TitleContainerProps {
  size?: "xl" | "l" | "m" | "s" | "xs";
  color?: "title" | "subtitle" | "text" | "label";
  weight?: string | number;
}

export const RegularText = styled.p<RegularTextContainerProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ size, theme }) => theme.sizes[`text-regular-${size ?? "m"}`]};
  color: ${({ color, theme }) => theme.colors[`base-${color ?? "title"}`]};
  font-weight: ${({ weight }) => weight ?? "400"};
  line-height: 1.3;
`;

export const TitleText = styled.h1<TitleContainerProps>`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ size, theme }) => theme.sizes[`text-title-${size ?? "m"}`]};
  color: ${({ color, theme }) => theme.colors[`base-${color ?? "title"}`]};
  font-weight: ${({ weight }) => weight ?? 800};
  line-height: 1.3;
`;
