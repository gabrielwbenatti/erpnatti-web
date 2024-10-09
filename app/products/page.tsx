"use client";

import { Product } from "@/models/Product";
import * as productService from "@/services/productService";
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
      <h1>ProductsPage</h1>

      <main>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.nome}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
