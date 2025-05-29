import styled from "styled-components";

export const QuantityButtonContainer = styled.div`
  background: ${({ theme }) => theme.colors["base-button"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  span {
    min-width: 1.25rem;
    text-align: center;
    display: inline-block;
  }

  button {
    color: ${({ theme }) => theme.colors.purple};
    display: flex;
    align-items: center;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
    }
  }
`;
