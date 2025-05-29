import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  border-radius: 6px 36px;
  background: ${({ theme }) => theme.colors["base-card"]};
  width: 100%;
  padding: 1.25rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    margin-top: -1.25rem;
    width: 7.5rem;
    height: 7.5rem;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  width: 100%;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  justify-content: center;
  span {
    background: ${({ theme }) => theme.colors["yellow-light"]};
    color: ${({ theme }) => theme.colors["yellow-dark"]};
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.625rem;
  }
`;
export const HeadingContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin-right: 1.9rem;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }
`;
