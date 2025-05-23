import styled from "styled-components";

export const CartButton = styled.button`
  background: ${({ theme }) => theme.colors.product["yellow-light"]};
  border-radius: 6px;
  border: none;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  svg {
    fill: ${({ theme }) => theme.colors.product["yellow-dark"]};
  }
`