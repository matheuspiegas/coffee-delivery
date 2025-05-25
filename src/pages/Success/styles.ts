import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 5rem auto 5rem auto;
  max-width: 70rem;
  gap: 6.375rem;
  align-items: end;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: ${({ theme }) => theme.colors.product["yellow-dark"]};
    font-family: ${({ theme }) => theme.typography.baloo2["font-family"]};
    font-size: ${({ theme }) => theme.typography.baloo2.titles.l.size};
    font-weight: ${({ theme }) => theme.typography.baloo2.titles.l.weight};
    line-height: ${({ theme }) =>
      theme.typography.baloo2.titles.l["line-height"]};
  }
  p {
    font-size: ${({ theme }) => theme.typography.roboto.texts.l.size};
    font-weight: ${({ theme }) => theme.typography.roboto.texts.l.weight};
    line-height: ${({ theme }) =>
      theme.typography.roboto.texts.l["line-height"]};
    color: ${({ theme }) => theme.colors.base["base-subtitle"]};
  }
`;

export const OrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  flex-shrink: 0;
`;

export const OrderInfoContainer = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) => css`
    linear-gradient(to bottom right, ${theme.colors.product.yellow}, ${theme.colors.product.purple})
  `};
`;

export const OrderInfoContent = styled.div`
  padding: 2.5rem;
  background-color: white;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

interface OrderInfoItemProps {
  variant: "purple" | "yellow" | "yellow-dark";
}
export const OrderInfoItem = styled.div<OrderInfoItemProps>`
  display: flex;
  align-items: center;
  gap: 1rem;

  > span {
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    ${(props) => css`
      background-color: ${props.variant === "purple"
        ? props.theme.colors.product.purple
        : props.variant === "yellow"
          ? props.theme.colors.product.yellow
          : props.theme.colors.product["yellow-dark"]};
    `}

    > svg {
      fill: white;
    }
  }
  > p {
    max-width: 22.125rem;
    font-size: ${({ theme }) => theme.typography.roboto.texts.m.size};
    font-weight: ${({ theme }) => theme.typography.roboto.texts.m.weight};
    line-height: ${({ theme }) =>
      theme.typography.roboto.texts.m["line-height"]};
    color: ${({ theme }) => theme.colors.base["base-subtitle"]};
  }
`;
