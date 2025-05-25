import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
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
