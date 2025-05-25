import styled from "styled-components";

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors["base-card"]};
  padding: 0.5rem 0.25rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  img {
    width: 64px;
    height: 64px;
  }

  .buttons {
    display: flex;
    gap: 0.5rem;
  }

  .coffeeInfo {
    font-size: ${({ theme }) => theme.sizes["text-regular-m"]};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const Price = styled.div`
  margin-left: auto;
  display: inline-block;
  font-weight: bold;
  color: ${({ theme }) => theme.colors["base-text"]};
`;
