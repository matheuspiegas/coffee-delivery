import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.colors["base-button"]};
  color: ${({ theme }) => theme.colors["base-text"]};
  border-radius: 6px;
  padding: 0.406rem 0.5rem;
  font-weight: 400;
  font-size: ${({ theme }) => theme.sizes["components-buttons-s"]};
  line-height: 1.6;
  border: none;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  svg {
    fill: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
    cursor: pointer;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    svg {
      fill: ${({ theme }) => theme.colors["purple-dark"]};
    }
  }
`;
