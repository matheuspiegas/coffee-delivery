import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Container = styled.main`
  margin: 2.5rem 0;
  display: flex;
  gap: 2rem;
`;

export const PersonalInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors["base-card"]};
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px;
  .info {
    display: grid;
    grid-template-columns: 12.5rem 1fr 3.75rem;
    grid-template-areas:
      "cep . ."
      "rua rua rua"
      "numero complemento complemento "
      "bairro cidade uf";
    flex-direction: column;
    gap: 1rem;
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

export const SelectedCoffeesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`;

export const SelectedCoffeesContent = styled.div`
  background: ${({ theme }) => theme.colors["base-card"]};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 6px 36px;
  padding: 2.5rem;
  button {
    width: 100%;
    text-transform: uppercase;
  }
`;

export const CoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 320px;
  overflow-y: auto;
`;

export const Separator = styled.div`
  display: block;
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors["base-button"]};
`;

export const NoCoffeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  text-align: center;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.844rem;
  div {
    display: flex;
    justify-content: space-between;
  }
`;
