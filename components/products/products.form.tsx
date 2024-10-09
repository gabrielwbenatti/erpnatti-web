import { Product } from "@/models/Product";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { ChangeEvent, useEffect, useState } from "react";

export interface ProductsFormComp {
  initialData: Product;
  onProductChange: (product: Product) => void;
  handleSubmit?: () => void;
  handleCancel?: () => void;
  handleDelete?: () => void;
}

export default function ProductsFormComp({
  initialData,
  onProductChange,
  handleSubmit,
  handleCancel,
  handleDelete,
}: ProductsFormComp) {
  const [product, setProduct] = useState<Product>(initialData);

  useEffect(() => {
    onProductChange(product);
  }, [product]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2">
        <Input
          label="Nome"
          required
          name="nome"
          value={product.nome}
          onChange={handleInputChange}
          autoComplete="off"
          className="col-span-2"
        />
        <Input
          label="Código de Barras"
          name="codigo_barras"
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
        <Button type="button" variant="solid" onClick={handleSubmit}>
          Salvar
        </Button>
        <Button type="button" variant="light" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button
          type="button"
          variant="light"
          color="danger"
          onClick={handleDelete}
        >
          Excluir
        </Button>
      </div>
    </form>
  );
}
