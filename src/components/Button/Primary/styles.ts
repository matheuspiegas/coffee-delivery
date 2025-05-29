import styled, { keyframes } from "styled-components";

const spinner = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

export const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizes["components-buttons-g"]};
  line-height: 1.6;
  border: none;
  width: 8.25rem;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors["yellow-dark"]};
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    animation: ${spinner} 1s linear infinite;
  }
`;
