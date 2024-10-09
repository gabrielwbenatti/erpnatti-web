import { Product } from "@/models/Product";
import { useState } from "react";
import ProductsFormComp from "../../../../components/products/products.form";

export default function ProductsEditPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [nome, setNome] = useState<string>("");

  return (
    <div className="md:space-y-3 md:px-8 md:py-3">
      {product ? (
        <>
          <h1 className="text-xl font-bold">{nome}</h1>

          <ProductsFormComp initialData={product} onPersonChange={() => {}} />
        </>
      ) : (
        <h1 className="text-xl font-bold">Carregando...</h1>
      )}
    </div>
  );
}
