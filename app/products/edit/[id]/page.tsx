"use client";

import { Product } from "@/models/Product";
import { useEffect, useState } from "react";
import ProductsFormComp from "../../../../components/products/products.form";
import * as productService from "@/services/productService";
import { useRouter } from "next/navigation";
import { HttpStatusCode } from "axios";

interface ProductsEditPageProps {
  params: { id: string };
}

export default function ProductsEditPage({ params }: ProductsEditPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [nome, setNome] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      await productService.show(+params.id).then((res) => {
        setProduct(res.data.result);
        setNome(res.data.result.nome || "<undefined>");
      });
    }

    fetchData();
  }, [params.id]);

  const handleSubmit = async () => {
    if (!product) return;

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
        <>
          <h1 className="text-xl font-bold">{nome}</h1>

          <ProductsFormComp
            initialData={product}
            onChangeData={setProduct}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            onDelete={handleDelete}
          />
        </>
      ) : (
        <h1 className="text-xl font-bold">Carregando...</h1>
      )}
    </div>
  );
}
