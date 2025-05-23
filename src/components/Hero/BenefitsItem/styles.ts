import styled from "styled-components";

export const BenefitsItemContainer = styled.li`
    display: flex;
    align-items: center;
    gap: 0.66rem;
    width: 100%;
    p {
      color: ${({ theme }) => theme.colors.base["base-text"]};
      font-size: ${({ theme }) => theme.typography.roboto.texts.m.size};
      font-weight: ${({ theme }) => theme.typography.roboto.texts.m.weight};
      line-height: ${({ theme }) => theme.typography.roboto.texts.m["line-height"]};
    }

    span {
    border-radius: 100%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;
      svg {
        fill: ${({ theme }) => theme.colors.base.background};
      }
    }

    &.coffee {
      grid-area: coffee;
      span {
        background-color: ${({ theme }) => theme.colors.product.purple};
      }
    }
    &.package {
      grid-area: package;
      span {
        background-color: ${({ theme }) => theme.colors.base["base-text"]};
      }
    }
    &.timer {
      grid-area: timer;
      span {
        background-color: ${({ theme }) => theme.colors.product.yellow};
      }
    }
    &.shopping {
      grid-area: shopping;
      span {
        background-color: ${({ theme }) => theme.colors.product["yellow-dark"]};
      }
    }
   
`