import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  background: ${({ theme }) => theme.colors.background};
  > div {
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem;
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
