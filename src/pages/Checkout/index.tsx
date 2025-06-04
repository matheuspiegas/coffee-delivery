import {
  CreditCardIcon,
  CurrencyDollarIcon,
  MoneyIcon,
  SpinnerGapIcon,
} from "@phosphor-icons/react";
import { PaymentButton } from "../../components/Button/Payment";
import {
  AddressContainer,
  CoffeesContainer,
  Container,
  NoCoffeContainer,
  PaymentContainer,
  PersonalInfoContainer,
  RadioPaymentOptionsContainer,
  SelectedCoffeesContainer,
  SelectedCoffeesContent,
  Separator,
  TotalContainer,
} from "./styles";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { BankIcon, MapPinLineIcon } from "@phosphor-icons/react/dist/ssr";
import { PrimaryButton } from "../../components/Button/Primary";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card } from "./components/Card";
import { RegularText, TitleText } from "../../components/Typography";
import { SectionHeading } from "./components/SectionHeading";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { AddressForm } from "./components/AddressForm";

const newOrder = z.object({
  cep: z.number().min(8, "CEP deve ter 8 dígitos"),
  rua: z.string().min(1, "Rua é obrigatória"),
  numero: z.number().min(1, "Número é obrigatório"),
  complemento: z.string().optional(),
  bairro: z.string().min(1, "Bairro é obrigatório"),
  cidade: z.string().min(1, "Cidade é obrigatória"),
  uf: z.string().min(2, "UF deve ter 2 caracteres"),
  paymentMethod: z.string().min(1, "Forma de pagamento é obrigatória"),
});

export type FormInputs = z.infer<typeof newOrder>;

export function CheckoutPage() {
  const { colors } = useTheme();
  const { cart } = useContext(CartContext);

  const shippingCost = 3.5;

  const orderTotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const navigate = useNavigate();

  const methods = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  });

  return (
    <Container className="container">
      <PersonalInfoContainer>
        <div>
          <TitleText size="xs" weight={700} color="subtitle">
            Complete seu pedido
          </TitleText>
        </div>

        <AddressContainer>
          <SectionHeading
            icon={<MapPinLineIcon size={22} fill={colors["yellow-dark"]} />}
            title="Endereço de Entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
          />
          <FormProvider {...methods}>
            <AddressForm />
          </FormProvider>
        </AddressContainer>

        {/* Forma de pagamento */}
        <PaymentContainer>
          <SectionHeading
            icon={<CurrencyDollarIcon size={22} fill={colors.purple} />}
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          />
          <Controller
            name="paymentMethod"
            control={methods.control}
            render={({ field }) => (
              <RadioPaymentOptionsContainer
                value={field.value}
                onValueChange={field.onChange}
              >
                <RadioGroup.Item value="creditCard" asChild>
                  <PaymentButton
                    error={!!methods.formState.errors.paymentMethod}
                    disabled={methods.formState.isSubmitting}
                  >
                    <CreditCardIcon size={16} />
                    Cartão de crédito
                  </PaymentButton>
                </RadioGroup.Item>
                <RadioGroup.Item value="debitCard" asChild>
                  <PaymentButton
                    error={!!methods.formState.errors.paymentMethod}
                    disabled={methods.formState.isSubmitting}
                  >
                    <BankIcon size={16} />
                    Cartão de débito
                  </PaymentButton>
                </RadioGroup.Item>
                <RadioGroup.Item value="money" asChild>
                  <PaymentButton
                    error={!!methods.formState.errors.paymentMethod}
                    disabled={methods.formState.isSubmitting}
                  >
                    <MoneyIcon size={16} />
                    Dinheiro
                  </PaymentButton>
                </RadioGroup.Item>
              </RadioPaymentOptionsContainer>
            )}
          />
        </PaymentContainer>
      </PersonalInfoContainer>

      {/* Selected Coffees */}
      <SelectedCoffeesContainer>
        <div>
          <TitleText size="xs" weight={700} color="subtitle">
            Cafés selecionados
          </TitleText>
        </div>

        <SelectedCoffeesContent>
          {cart.length === 0 && (
            <NoCoffeContainer>
              <RegularText color="subtitle">
                Nenhum item no carrinho!
              </RegularText>
              <PrimaryButton onClick={() => navigate("/")}>
                Adicionar itens
              </PrimaryButton>
            </NoCoffeContainer>
          )}
          <CoffeesContainer>
            {cart.map((coffee) => {
              return (
                <div key={coffee.id}>
                  <Card
                    isLoading={methods.formState.isSubmitting}
                    quantity={coffee.quantity}
                    image={coffee.image}
                    title={coffee.title}
                    description={coffee.description}
                    price={coffee.price}
                    tags={coffee.tags}
                    id={coffee.id}
                  />
                  <Separator />
                </div>
              );
            })}
          </CoffeesContainer>

          {cart.length > 0 && (
            <TotalContainer>
              <div>
                <RegularText size="s" color="text">
                  Total de itens
                </RegularText>
                <RegularText size="m" color="text"></RegularText>
              </div>
              <div>
                <RegularText size="s" color="text">
                  Entrega
                </RegularText>
                <RegularText size="m" color="text">
                  {Intl.NumberFormat("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  }).format(shippingCost)}
                </RegularText>
              </div>
              <div>
                <RegularText size="l" color="subtitle" weight={"bold"}>
                  Total
                </RegularText>
                <RegularText size="l" color="subtitle" weight={"bold"}>
                  {Intl.NumberFormat("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  }).format(orderTotal + shippingCost)}
                </RegularText>
              </div>
            </TotalContainer>
          )}
          {cart.length > 0 && (
            <PrimaryButton
              type="submit"
              form="addressForm"
              isLoading={methods.formState.isSubmitting}
            >
              {methods.formState.isSubmitting ? (
                <SpinnerGapIcon size={16} />
              ) : (
                "Confirmar Pedido"
              )}
            </PrimaryButton>
          )}
        </SelectedCoffeesContent>
      </SelectedCoffeesContainer>
    </Container>
  );
}
