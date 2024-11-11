"use client";

import MainWrapperComp from "@/components/shared/main.wrapper";
import Table from "@/components/shared/Table";
import ProductDTO from "@/dtos/ProductDTO";
import * as productService from "@/services/productService";
import { Button } from "@nextui-org/button";
import { Ellipsis } from "lucide-react";
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

  const renderRow = (product: ProductDTO) => {
    return (
      <tr>
        <td>
          <div className="flex flex-col">
            <span>{product.name}</span>
            <span className="text-small italic">{product.reference}</span>
          </div>
        </td>
        <td>
          <Button isIconOnly variant="light">
            <Ellipsis />
          </Button>
        </td>
      </tr>
    );
  };

  return (
    <MainWrapperComp>
      <div className="flex items-center justify-between pt-8">
        <h1 className="text-xl font-bold">Produtos</h1>

        <Link href="/products/create">
          <Button variant="solid">Novo Produto</Button>
        </Link>
      </div>

      <Table
        data={products}
        renderRow={renderRow}
        columns={[
          { header: "Nome", accessor: "name" },
          { header: "Ações", accessor: "actions" },
        ]}
      />
    </MainWrapperComp>
  );
}
