import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import type { FormInputs } from "../..";
import { useNavigate } from "react-router-dom";

export function AddressForm() {
  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useFormContext<FormInputs>();

  const { handleCheckout } = useContext(CartContext);
  const navigate = useNavigate();

  async function onSubmit(data: FormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    handleCheckout(data);
    navigate("/success");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="info" id="addressForm">
      <Input
        placeholder="CEP"
        required
        disabled={isSubmitting}
        inputMode="numeric"
        error={!!errors?.cep}
        containerProps={{ style: { gridArea: "cep" } }}
        {...register("cep", { valueAsNumber: true })}
      />
      <Input
        placeholder="Rua"
        required
        disabled={isSubmitting}
        error={!!errors?.rua}
        containerProps={{ style: { gridArea: "rua" } }}
        {...register("rua")}
      />
      <Input
        placeholder="Número"
        error={!!errors?.numero}
        required
        disabled={isSubmitting}
        inputMode="numeric"
        containerProps={{ style: { gridArea: "numero" } }}
        {...register("numero", { valueAsNumber: true })}
      />
      <Input
        placeholder="Complemento"
        disabled={isSubmitting}
        error={!!errors?.complemento}
        containerProps={{ style: { gridArea: "complemento" } }}
        {...register("complemento")}
      />
      <Input
        placeholder="Bairro"
        required
        disabled={isSubmitting}
        error={!!errors?.bairro}
        containerProps={{ style: { gridArea: "bairro" } }}
        {...register("bairro")}
      />
      <Input
        placeholder="Cidade"
        required
        disabled={isSubmitting}
        error={!!errors?.cidade}
        containerProps={{ style: { gridArea: "cidade" } }}
        {...register("cidade")}
      />
      <Input
        placeholder="UF"
        required
        disabled={isSubmitting}
        error={!!errors?.uf}
        containerProps={{ style: { gridArea: "uf" } }}
        {...register("uf")}
      />
    </form>
  );
}
