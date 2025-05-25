import styled from "styled-components";

export const QuantityButtonContainer = styled.div`
  background: ${({ theme }) => theme.colors["base-button"]};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  button {
    color: ${({ theme }) => theme.colors.purple};
  }
`;
