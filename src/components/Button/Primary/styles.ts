import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.colors.product.yellow};
  color: ${({ theme }) => theme.colors.base.white};
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  font-weight: ${({ theme }) => theme.typography.roboto.buttons.g.weight};
  font-size: ${({ theme }) => theme.typography.roboto.buttons.g.size};
  line-height: ${({ theme }) => theme.typography.roboto.buttons.g["line-height"]};
  border: none;
  width: 8.25rem;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.product["yellow-dark"]};
    cursor: pointer;
  }
`