"use client";

import ProductsFormComp from "@/components/products/products.form";
import MainWrapperComp from "@/components/shared/main.wrapper";
import * as productService from "@/services/productService";
import { Product } from "@/models/Product";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductsCreatePage() {
  const router = useRouter();

  const [product, setProduct] = useState<Product>({
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
    <MainWrapperComp>
      <h1 className="text-xl font-bold">Novo Cadastro</h1>

      <ProductsFormComp
        initialData={product}
        onChangeData={setProduct}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </MainWrapperComp>
  );
}
