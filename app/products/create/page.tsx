"use client";

import ProductsFormComp from "@/components/products/products.form";
import MainWrapperComp from "@/components/shared/main.wrapper";
import * as productService from "@/services/productService";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HttpStatusCode, isAxiosError } from "axios";
import ProductDTO from "@/dtos/ProductDTO";
import { toast, Toaster } from "sonner";

export default function ProductsCreatePage() {
  const router = useRouter();

  const [product, setProduct] = useState<ProductDTO>({
    name: "",
    current_stock: 0,
    minimum_stock: 0,
    maximum_stock: 0,
    move_stock: true,
    status: true,
  });

  const handleSubmit = async () => {
    // console.log(product);
    await productService
      .store(product)
      .then((res) => {
        if (res.status === HttpStatusCode.Created) {
          router.push("/products");
        }
      })
      .catch((error) => {
        if (isAxiosError(error)) {
          toast.error(error.response?.data.message);
        }
      });
  };

  const handleCancel = () => router.push("/products");

  return (
    <>
      <Toaster position="top-right" richColors />
      <MainWrapperComp>
        <h1 className="pt-8 text-xl font-bold">Novo Cadastro</h1>

        <ProductsFormComp
          initialData={product}
          onChangeData={setProduct}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </MainWrapperComp>
    </>
  );
}
