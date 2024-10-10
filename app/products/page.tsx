"use client";

import MainWrapperComp from "@/components/shared/main.wrapper";
import { Product } from "@/models/Product";
import * as productService from "@/services/productService";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await productService.index();
      setProducts(res.data.data);
    }

    fetchData();
  }, []);

  return (
    <>
      <Link href="/products/create">
        <Button variant="solid">Novo</Button>
      </Link>

      <MainWrapperComp>
        <ul>
          {products.map((product) => (
            <li
              key={product.id}
              className="flex hover:bg-light-on-surface hover:bg-opacity-[.08] md:rounded-lg md:p-2"
            >
              <a
                href={`/products/edit/${product.id}`}
                className="flex w-full flex-col"
              >
                <span className="font-bold">{product.nome}</span>
                {product.referencia && (
                  <span className="text-small">{product.referencia}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </MainWrapperComp>
    </>
  );
}
