import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  border-radius: 6px 36px;
  background: ${({ theme }) => theme.colors["base-card"]};
  padding: 1.25rem;
  width: 100%;
  padding-top: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    margin-top: -1.25rem;
    width: 7.5rem;
    height: 7.5rem;
  }

  @media (width < 768px) {
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding-top: 1.25rem;
    gap: 1rem;
    img {
      margin-top: 0;
      width: auto;
      height: 5.5rem;
    }
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

  @media (width < 768px) {
    display: none;
  }

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

export const CoffeeCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  flex: 1;
`;

export const HeadingContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  @media (width < 768px) {
    margin-bottom: 0;
    p {
      display: none;
    }
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
`;
export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (width < 768px) {
    justify-content: start;
  }
  gap: 1.438rem;
  align-items: center;
  width: 100%;
`;
