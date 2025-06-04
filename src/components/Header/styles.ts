import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  background: ${({ theme }) => theme.colors.background};
  > div {
    padding: 2rem 1rem;
    display: flex;
    justify-content: space-between;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
`;

export const LocateButton = styled.button`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.3;
  border-radius: 6px;
  gap: 0.25rem;
  border: none;
  background: ${({ theme }) => theme.colors["purple-light"]};
  color: ${({ theme }) => theme.colors["purple-dark"]};
  padding: 0.5rem;
  svg {
    color: ${({ theme }) => theme.colors["purple"]};
  }
`;

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
  transition: all 0.16s ease-in-out;

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
