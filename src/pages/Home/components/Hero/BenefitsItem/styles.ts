import styled from "styled-components";

export const BenefitsItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 0.66rem;
  width: 100%;

  span {
    border-radius: 100%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;
    svg {
      fill: ${({ theme }) => theme.colors.background};
    }
  }

  &.coffee {
    grid-area: coffee;
    span {
      background-color: ${({ theme }) => theme.colors.purple};
    }
  }
  &.package {
    grid-area: package;
    span {
      background-color: ${({ theme }) => theme.colors["base-text"]};
    }
  }
  &.timer {
    grid-area: timer;
    span {
      background-color: ${({ theme }) => theme.colors.yellow};
    }
  }
  &.shopping {
    grid-area: shopping;
    span {
      background-color: ${({ theme }) => theme.colors["yellow-dark"]};
    }
  }
`;
