import styled from "styled-components";

export const CartButtonContainer = styled.button`
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors["purple-dark"]};
  border-radius: 6px;
  svg {
    fill: ${({ theme }) => theme.colors["base-card"]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors["purple"]};
  }
`;
