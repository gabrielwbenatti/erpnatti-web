"use client";

import { useEffect, useState } from "react";
import ProductsFormComp from "../../../../components/products/products.form";
import * as productService from "@/services/productService";
import { useRouter } from "next/navigation";
import { HttpStatusCode } from "axios";
import MainWrapperComp from "@/components/shared/main.wrapper";
import ProductDTO from "@/dtos/ProductDTO";

interface ProductsEditPageProps {
  params: { id: string };
}

export default function ProductsEditPage({ params }: ProductsEditPageProps) {
  const [product, setProduct] = useState<ProductDTO | null>(null);
  const [name, setName] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      await productService.show(+params.id).then((res) => {
        setProduct(res.data.result);
        setName(res.data.result.name || "<undefined>");
      });
    }

    fetchData();
  }, [params.id]);

  const handleSubmit = async () => {
    if (!product) {
      return;
    }

    await productService.update(product).then((res) => {
      if (res.status === HttpStatusCode.Ok) {
        router.push("/products");
      }
    });
  };

  const handleCancel = () => router.push("/products");

  const handleDelete = async () => {
    await productService.remove(+params.id).then((res) => {
      if (res.status === HttpStatusCode.Ok) {
        router.push("/products");
      }
    });
  };

  return (
    <div className="md:space-y-3 md:px-8 md:py-3">
      {product ? (
        <MainWrapperComp>
          <h1 className="text-xl font-bold">{name}</h1>

          <ProductsFormComp
            initialData={product}
            onChangeData={setProduct}
            onSubmit={handleSubmit}
            onDelete={handleDelete}
            onCancel={handleCancel}
          />
        </MainWrapperComp>
      ) : (
        <h1 className="text-xl font-bold">Carregando...</h1>
      )}
    </div>
  );
}
