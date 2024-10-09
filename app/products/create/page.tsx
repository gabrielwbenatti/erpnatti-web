"use client";

import ProductsFormComp from "@/components/products/products.form";
import MainWrapperComp from "@/components/shared/main.wrapper";
import * as productService from "@/services/productService";
import { Product } from "@/models/Product";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductsCreatePage() {
  const router = useRouter();

  const [product, setProdict] = useState<Product>({
    movimenta_estoque: true,
    nome: "",
    status: true,
  });

  const handleSubmit = async () => {
    await productService.store(product).then((res) => {
      if (res.status === 201) {
        router.push("/products");
      }
    });
  };

  const handleCancel = () => router.push("/products");

  return (
    <div>
      <MainWrapperComp>
        <h1>Novo Produto</h1>

        <ProductsFormComp
          initialData={product}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          onProductChange={setProdict}
        />
      </MainWrapperComp>
    </div>
  );
}
