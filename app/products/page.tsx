"use client";

import MainWrapperComp from "@/components/shared/main.wrapper";
import Table, { TableColumnProps } from "@/components/shared/Table";
import ProductDTO from "@/dtos/ProductDTO";
import * as productService from "@/services/productService";
import { Button } from "@nextui-org/button";
import { Ellipsis, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const columns: TableColumnProps[] = [
  { header: "Nome", accessor: "name" },
  { header: "Estoque", accessor: "current_stock" },
  { header: "Ações", accessor: "actions" },
];

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
      <tr key={product.id}>
        <td>
          <div className="flex flex-col">
            <span>{product.name}</span>
            <span className="text-small italic">{product.reference}</span>
          </div>
        </td>

        <td>{product.current_stock || 0}</td>

        <td>
          <div className="table-cell p-2">
            <Link href={`/products/edit/${product.id}`}>
              <Button isIconOnly variant="light">
                <Eye />
              </Button>
            </Link>
            <Button isIconOnly color="danger">
              <Trash2 />
            </Button>
          </div>
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

      <Table data={products} renderRow={renderRow} columns={columns} />
    </MainWrapperComp>
  );
}
