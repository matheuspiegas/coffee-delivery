import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.colors.base["base-button"]};
  color: ${({ theme }) => theme.colors.base["base-text"]};
  border-radius: 6px;
  padding: 0.406rem 0.5rem;
  font-weight: ${({ theme }) => theme.typography.roboto.buttons.m.weight};
  font-size: ${({ theme }) => theme.typography.roboto.buttons.m.size};
  line-height: ${({ theme }) => theme.typography.roboto.buttons.m["line-height"]};
  border: none;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  svg {
    fill: ${({ theme }) => theme.colors.product.purple}
  }

  &:hover {
    background: ${({ theme }) => theme.colors.base["base-hover"]};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.base["base-subtitle"]};
    svg {
    fill: ${({ theme }) => theme.colors.product["purple-dark"]}
  }
  }
`