import { Product } from "@/models/Product";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import * as productService from "@/services/productService";
import { Trash2, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { HttpStatusCode } from "axios";

export default function PurchasesItemsFormComp() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = (search: string) => {
    async function fetchData() {
      await productService.index(search).then((res) => {
        if (res.status === HttpStatusCode.Ok) {
          setProducts(res.data.result);
        }
      });
    }

    if (search.length > 3) {
      console.log("fetch");
      fetchData();
    }
  };

  return (
    <div className="md:w-full">
      <span className="md:col-span-4 md:mt-3 md:text-small">Itens</span>

      <Table>
        <TableHeader>
          <TableColumn>Item</TableColumn>
          <TableColumn>Qtde</TableColumn>
          <TableColumn>R$ Unitário</TableColumn>
          <TableColumn>R$ Total</TableColumn>
          <TableColumn width={100}>Ações</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell key={1}>
              <Autocomplete onChange={(e) => fetchProducts(e.target.value)}>
                {products.map((product) => (
                  <AutocompleteItem
                    key={product.id!}
                    value={product.id!}
                    aria-labelledby={product.nome!}
                  >
                    {product.nome}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
            </TableCell>
            <TableCell key={2}>
              <Input type="number" aria-labelledby="aaa" />
            </TableCell>
            <TableCell key={3}>
              <Input type="number" aria-labelledby="aaa" startContent="R$" />
            </TableCell>
            <TableCell key={4}>
              <Input type="number" aria-labelledby="aaa" startContent="R$" />
            </TableCell>
            <TableCell key={5}>
              <div className="md:flex md:gap-2">
                <Button isIconOnly color="danger">
                  <Trash2 />
                </Button>
                <Button isIconOnly>
                  <Pencil />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
