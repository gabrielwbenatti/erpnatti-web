"use client";

import MainWrapperComp from "@/components/shared/main.wrapper";
import ProductDTO from "@/dtos/ProductDTO";
import * as productService from "@/services/productService";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await productService.index();
      setProducts(res.data.result);
    }

    fetchData();
  }, []);

  return (
    <>
      <MainWrapperComp>
        <Link href="/products/create">
          <Button variant="solid">Novo</Button>
        </Link>

        <ul>
          {products.map((product) => (
            <li
              key={product.id}
              className="flex hover:bg-light-onSurface hover:bg-opacity-[.08] md:rounded-lg md:p-2"
            >
              <Link
                className="flex w-full flex-col"
                href={`/products/edit/${product.id}`}
              >
                <span className="font-bold">{product.name}</span>
                {product.reference && (
                  <span className="text-small">{product.reference}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </MainWrapperComp>
    </>
  );
}
