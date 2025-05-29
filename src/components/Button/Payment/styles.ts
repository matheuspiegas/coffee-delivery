import styled, { css } from "styled-components";

interface ContainerProps {
  error: boolean;
}

export const Container = styled.button<ContainerProps>`
  background: ${({ theme }) => theme.colors["base-button"]};
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.75rem;
  width: 188px;
  padding: 1rem;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors["base-text"]};
  font-size: ${({ theme }) => theme.sizes["components-buttons-s"]};
  line-height: 1.6;
  font-weight: 400;
  text-transform: uppercase;
  border: 1px solid transparent;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  ${({ error }) => css`
    border-color: ${error ? "red" : ""};
  `}

  > svg {
    fill: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }

  &[data-state="checked"] {
    border: 1px solid ${({ theme }) => theme.colors.purple};
    background: ${({ theme }) => theme.colors["purple-light"]};
  }
`;
