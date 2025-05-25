import {
  CreditCardIcon,
  CurrencyDollarIcon,
  MoneyIcon,
} from "@phosphor-icons/react";
import { PaymentButton } from "../../components/Button/Payment";
import {
  AddressContainer,
  AddressHeading,
  Container,
  Heading,
  PaymentContainer,
  PaymentHeading,
  PersonalInfoContainer,
  RadioPaymentOptionsContainer,
  SelectedCoffeesContainer,
  SelectedCoffeesContent,
} from "./styles";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { BankIcon, MapPinLineIcon } from "@phosphor-icons/react/dist/ssr";
import { Input } from "../../components/Input";
import { PrimaryButton } from "../../components/Button/Primary";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card } from "../../components/Card";
import { TitleContainer } from "../../components/Text/TitleText/styles";
import { RegularTextContainer } from "../../components/Text/RegularText/styles";

const newOrder = z.object({
  cep: z.number(),
  rua: z.string(),
  numero: z.number(),
  complemento: z.string().optional(),
  bairro: z.string(),
  cidade: z.string(),
  uf: z.string(),
  paymentMethod: z.string(),
});

type FormInputs = z.infer<typeof newOrder>;

export function CheckoutPage() {
  const { register, handleSubmit, setValue } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  });

  function onSubmit(data: FormInputs) {
    console.log(data);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PersonalInfoContainer>
          <Heading>
            <TitleContainer size="xs" weight={700} color="subtitle">
              Complete seu pedido
            </TitleContainer>
          </Heading>

          {/* Informações do pedido */}
          <AddressContainer>
            <AddressHeading>
              <MapPinLineIcon size={22} />
              <div>
                <RegularTextContainer size="m" weight={400} color="subtitle">
                  Endereço de Entrega
                </RegularTextContainer>
                <RegularTextContainer size="s" weight={400} color="text">
                  Informe o endereço onde deseja receber seu pedido
                </RegularTextContainer>
              </div>
            </AddressHeading>
            <div className="info">
              <Input
                placeholder="CEP"
                required
                containerProps={{ style: { gridArea: "cep" } }}
                {...register("cep", { valueAsNumber: true })}
              />
              <Input
                placeholder="Rua"
                required
                containerProps={{ style: { gridArea: "rua" } }}
                {...register("rua")}
              />
              <Input
                placeholder="Número"
                required
                containerProps={{ style: { gridArea: "numero" } }}
                {...register("numero", { valueAsNumber: true })}
              />
              <Input
                placeholder="Complemento"
                containerProps={{ style: { gridArea: "complemento" } }}
                {...register("complemento")}
              />
              <Input
                placeholder="Bairro"
                required
                containerProps={{ style: { gridArea: "bairro" } }}
                {...register("bairro")}
              />
              <Input
                placeholder="Cidade"
                required
                containerProps={{ style: { gridArea: "cidade" } }}
                {...register("cidade")}
              />
              <Input
                placeholder="UF"
                required
                containerProps={{ style: { gridArea: "uf" } }}
                {...register("uf")}
              />
            </div>
          </AddressContainer>

          {/* Forma de pagamento */}
          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollarIcon size={22} fill="" />
              <div>
                <h2>Pagamento</h2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeading>
            <RadioPaymentOptionsContainer
              onValueChange={(value) => setValue("paymentMethod", value)}
            >
              <RadioGroup.Item value="creditCard" asChild>
                <PaymentButton>
                  <CreditCardIcon size={16} />
                  Cartão de crédito
                </PaymentButton>
              </RadioGroup.Item>
              <RadioGroup.Item value="debitCard" asChild>
                <PaymentButton>
                  <BankIcon size={16} />
                  Cartão de débito
                </PaymentButton>
              </RadioGroup.Item>
              <RadioGroup.Item value="money" asChild>
                <PaymentButton>
                  <MoneyIcon size={16} />
                  Dinheiro
                </PaymentButton>
              </RadioGroup.Item>
            </RadioPaymentOptionsContainer>
          </PaymentContainer>
        </PersonalInfoContainer>

        {/* Selected Coffees */}
        <SelectedCoffeesContainer>
          <Heading>
            <h1>Cafés selecionados</h1>
          </Heading>

          <SelectedCoffeesContent>
            <Card />
            <PrimaryButton>Confirmar Pedido</PrimaryButton>
          </SelectedCoffeesContent>
        </SelectedCoffeesContainer>
      </form>
    </Container>
  );
}
