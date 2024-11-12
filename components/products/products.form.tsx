import ProductDTO from "@/dtos/ProductDTO";
import { FormProps } from "@/types/FormProps";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { ChangeEvent, useEffect, useState } from "react";
import SectionWrapper from "../shared/SectionWrapper";

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
    <form className="box-border space-y-3">
      <SectionWrapper title="Cadastral" className="space-y-3">
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
          <Checkbox
            isSelected={product.status}
            onValueChange={(isSelected) =>
              setProduct((prev) => ({ ...prev, status: isSelected }))
            }
          >
            Status
          </Checkbox>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Controle de Estoque" className="space-y-3">
        <Checkbox
          isSelected={product.move_stock}
          onValueChange={(isSelected) =>
            setProduct((prev) => ({ ...prev, move_stock: isSelected }))
          }
        >
          Movimenta Estoque
        </Checkbox>

        <div className="space-y-3 md:grid md:grid-cols-3 md:gap-3">
          <Input
            type="number"
            name="minimum_stock"
            onChange={handleChange}
            value={String(product.minimum_stock)}
            label="Estoque Mínimo"
            isDisabled={!product.move_stock}
          />
          <Input
            type="number"
            name="maximum_stock"
            onChange={handleChange}
            value={String(product.maximum_stock)}
            label="Estoque Máximo"
            isDisabled={!product.move_stock}
          />
          <Input
            type="number"
            name="current_stock"
            onChange={handleChange}
            value={String(product.current_stock)}
            label="Estoque Atual"
            isDisabled={!product.move_stock || product.id !== undefined}
          />
        </div>
      </SectionWrapper>

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
