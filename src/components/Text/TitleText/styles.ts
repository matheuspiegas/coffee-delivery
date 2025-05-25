import styled from "styled-components";

interface TitleContainerProps {
  size: "xl" | "l" | "m" | "s" | "xs";
  color: "title" | "subtitle" | "text" | "label";
  weight: string | number;
}

export const TitleContainer = styled.h1<TitleContainerProps>`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ size, theme }) => theme.sizes[`text-title-${size}`]};
  color: ${({ color, theme }) => theme.colors[`base-${color}`]};
  font-weight: ${({ weight }) => weight};
  line-height: 1.3;
`;
