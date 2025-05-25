import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Container = styled.main`
  form {
    max-width: 70rem;
    margin: 2.5rem auto;
    display: flex;
    gap: 2rem;
  }
`;

export const Heading = styled.div``;

export const PersonalInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.base["base-card"]};
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px;
  .info {
    display: grid;
    grid-template-columns: 200px 1fr 60px;
    grid-template-areas:
      "cep . ."
      "rua rua rua"
      "numero complemento complemento "
      "bairro cidade uf";
    flex-direction: column;
    gap: 1rem;
  }
`;
export const AddressHeading = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    fill: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors["base-card"]};
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px;
`;
export const RadioPaymentOptionsContainer = styled(RadioGroup.Root)`
  display: flex;
  gap: 0.75rem;
`;
export const PaymentHeading = styled(AddressHeading)`
  svg {
    fill: ${({ theme }) => theme.colors.purple};
  }
`;

export const SelectedCoffeesContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SelectedCoffeesContent = styled.div`
  background: ${({ theme }) => theme.colors.base["base-card"]};
  border-radius: 6px 36px;
  padding: 2.5rem;
  button {
    width: 100%;
    text-transform: uppercase;
  }
`;
