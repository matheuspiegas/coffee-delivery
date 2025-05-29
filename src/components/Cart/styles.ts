import styled from "styled-components";

export const CartButton = styled.button`
  background: ${({ theme }) => theme.colors["yellow-light"]};
  border-radius: 6px;
  border: none;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  span {
    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 999px;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
  }

  svg {
    fill: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;
