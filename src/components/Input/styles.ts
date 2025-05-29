import styled, { css } from "styled-components";

interface InputWrapperProps {
  isFocused: boolean;
  error: boolean;
}

export const InputWrapper = styled.label<InputWrapperProps>`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors["base-input"]};
  border-radius: 4px;
  border: 1px solid
    ${({ theme, isFocused }) =>
      isFocused ? theme.colors["yellow-dark"] : theme.colors["base-button"]};

  ${({ error }) => css`
    border-color: ${error ? "red" : ""};
  `}
  input {
    background: transparent;
    padding: 0.75rem;
    border: 0;
    outline: none;
    width: 100%;
    color: ${({ theme }) => theme.colors["base-text"]};

    &::placeholder {
      color: ${({ theme }) => theme.colors["base-label"]};
    }
    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }

  span {
    font-style: italic;
    margin-right: 0.75rem;
    color: ${({ theme }) => theme.colors["base-label"]};
    font-size: ${({ theme }) => theme.sizes["text-regular-s"]};
  }
`;
