import { Product } from "@/models/Product";
import { FormProps } from "@/types/FormProps";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { ChangeEvent, useEffect, useState } from "react";

export default function ProductsFormComp({
  initialData,
  onChangeData,
  onSubmit,
  onCancel,
  onDelete,
}: FormProps<Product>) {
  const [product, setProduct] = useState<Product>(initialData);

  useEffect(() => {
    onChangeData(product);
  }, [product]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="md:space-y-3">
      <span className="md:col-span-4 md:mt-3 md:text-small">Cadastral</span>
      <div className="md:grid md:grid-cols-4 md:gap-3">
        <Input
          label="Referência"
          name="referencia"
          value={product.referencia}
          onChange={handleInputChange}
          autoComplete="off"
          className="md:col-span-1"
        />
        <Input
          label="Nome"
          required
          name="nome"
          value={product.nome}
          onChange={handleInputChange}
          autoComplete="off"
          className="md:col-span-3"
        />
        <Input
          label="Código de Barras"
          name="codigo_barra"
          value={product.codigo_barra || ""}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>

      <div className="flex space-x-3">
        <Checkbox
          isSelected={product.status}
          onValueChange={(isSelected) =>
            setProduct((prev) => ({ ...prev, status: isSelected }))
          }
        >
          Status
        </Checkbox>
        <Checkbox
          isSelected={product.movimenta_estoque}
          onValueChange={(isSelected) =>
            setProduct((prev) => ({ ...prev, movimenta_estoque: isSelected }))
          }
        >
          Movimenta Estoque
        </Checkbox>
      </div>

      <div className="flex">
        <Button type="button" variant="solid" onClick={onSubmit}>
          Salvar
        </Button>
        <Button type="button" variant="light" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="button" variant="light" color="danger" onClick={onDelete}>
          Excluir
        </Button>
      </div>
    </form>
  );
}
