import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
padding: 2rem 10rem;
background-color: violet;

@media (max-width: 768px) {
  padding: 2rem 1rem;
}

`

export const ButtonsWrapper = styled.div`
display: flex;
gap: 0.75rem;
`


export const LocateButton = styled.button`
display: flex;
align-items: center;
font-weight: ${({ theme }) => theme.typography.roboto.texts.s.weight};
font-size: ${({ theme }) => theme.typography.roboto.texts.s.size};
line-height: ${({ theme }) => theme.typography.roboto.texts.s["line-height"]};
border-radius: 6px;
border: none;
background: ${({ theme }) => theme.colors.product["purple-light"]};
color: ${({ theme }) => theme.colors.product["purple-dark"]};
padding: 0.5rem;
svg {
  color: ${({ theme }) => theme.colors.product["purple"]};
}
`