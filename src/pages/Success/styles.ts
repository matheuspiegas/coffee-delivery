import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  margin: 5rem auto 5rem auto;
  gap: 6.375rem;
  align-items: end;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: ${({ theme }) => theme.colors["yellow-dark"]};
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
    linear-gradient(to bottom right, ${theme.colors.yellow}, ${theme.colors.purple})
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
    ${(props) => {
      switch (props.variant) {
        case "purple":
          return css`
            background-color: ${props.theme.colors.purple};
          `;
        case "yellow":
          return css`
            background-color: ${props.theme.colors.yellow};
          `;
        case "yellow-dark":
          return css`
            background-color: ${props.theme.colors["yellow-dark"]};
          `;
        default:
          return css`
            background-color: ${props.theme.colors["yellow-dark"]};
          `;
      }
    }}

    > svg {
      fill: white;
    }
  }
`;
