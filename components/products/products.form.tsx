import { Product } from "@/models/Product";
import { Input } from "@nextui-org/input";
import { useState } from "react";

export interface ProductsFormComp {
  initialData: Product;
  onPersonChange: (product: Product) => void;
  handleSubmit?: () => void;
  handleCancelClick?: () => void;
}

export default function ProductsFormComp({
  initialData,
  onPersonChange,
  handleCancelClick,
  handleSubmit,
}: ProductsFormComp) {
  const [product, setProduct] = useState<Product>(initialData);

  return (
    <form>
      <div>
        <Input
          label="Nome"
          required
          name="nome"
          value={product.nome}
          autoComplete="off"
        />
      </div>
    </form>
  );
}
