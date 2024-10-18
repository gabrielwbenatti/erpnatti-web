import { Product } from "@/models/Product";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import * as productService from "@/services/productService";
import { Trash2, Pencil } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { FormProps } from "@/types/FormProps";
import { PurchaseItem } from "@/models/PurchaseItem";
import { useAsyncList } from "@react-stately/data";

export default function PurchasesItemsFormComp({
  initialData = [],
}: FormProps<PurchaseItem[]>) {
  const [purchaseItems, setPurchaseItems] =
    useState<PurchaseItem[]>(initialData);

  let list = useAsyncList<Product>({
    async load({ filterText }) {
      const res = await productService.index(filterText);
      return { items: res.data.result };
    },
  });

  const handleItemChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof PurchaseItem;
    const newItems = [...purchaseItems];

    if (typeof newItems[index][fieldName] === "number")
      newItems[index][fieldName] = Number(value) as any;

    if (typeof newItems[index][fieldName] === "string")
      newItems[index][fieldName] = value as any;

    setPurchaseItems(newItems);
  };

  const handleAddItem = () => {
    setPurchaseItems([...purchaseItems, {}]);
  };

  const handleSubmit = () => {
    console.log(purchaseItems);
  };

  return (
    <div className="space-y-3 md:w-full">
      <span className="block md:col-span-4 md:mt-3 md:text-small">Itens</span>

      {purchaseItems.map((item, index) => (
        <div className="md:flex md:gap-3" key={index}>
          <Autocomplete
            size="sm"
            label="Produto"
            inputValue={list.filterText}
            onInputChange={list.setFilterText}
            isLoading={list.isLoading}
            items={list.items}
          >
            {(it) => (
              <AutocompleteItem key={it.id!} value={it.id!}>
                {it.nome}
              </AutocompleteItem>
            )}
          </Autocomplete>

          <Input
            size="sm"
            name="quantidade"
            label="Qtde"
            type="number"
            onChange={(e) => handleItemChange(index, e)}
          />
          <Input
            size="sm"
            label="R$ Unitário"
            name="valor_unitario"
            type="number"
            onChange={(e) => handleItemChange(index, e)}
          />
          <Input
            size="sm"
            label="R$ Total"
            name="valor_total"
            type="number"
            onChange={(e) => handleItemChange(index, e)}
          />

          <ButtonGroup>
            <Button isIconOnly color="danger" variant="light">
              <Trash2 />
            </Button>
            {/* <Button isIconOnly variant="light">
              <Pencil />
            </Button> */}
          </ButtonGroup>
        </div>
      ))}

      <Button onClick={handleAddItem}>Adicionar Novo Item</Button>
      <Button onClick={handleSubmit}>Salvar</Button>
    </div>
  );
}
