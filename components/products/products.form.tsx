import ProductDTO from "@/dtos/ProductDTO";
import { FormProps } from "@/types/FormProps";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

export default function ProductsFormComp({
  initialData,
  onChangeData,
  onSubmit,
  onCancel,
  onDelete,
}: FormProps<ProductDTO>) {
  const [product, setProduct] = useState<ProductDTO>(initialData);

  useEffect(() => {
    onChangeData(product);
  }, [product]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="space-y-3">
      <span className="text-small md:col-span-4 md:mt-3">Cadastral</span>
      <div className="grid gap-3 md:grid-cols-4">
        <Input
          label="Referência"
          name="reference"
          value={product.reference || ""}
          onChange={handleChange}
          autoComplete="off"
          className="md:col-span-1"
        />
        <Input
          label="Nome"
          required
          name="name"
          value={product.name || ""}
          onChange={handleChange}
          autoComplete="off"
          className="md:col-span-3"
        />
        <Input
          label="Código de Barras"
          name="barcode"
          value={product.barcode || ""}
          onChange={handleChange}
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
          isSelected={product.move_stock}
          onValueChange={(isSelected) =>
            setProduct((prev) => ({ ...prev, move_stock: isSelected }))
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
        {product.id && (
          <Button
            type="button"
            variant="light"
            color="danger"
            onClick={onDelete}
          >
            Excluir
          </Button>
        )}
      </div>
    </form>
  );
}
