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
import { Trash2, Pencil } from "lucide-react";

export default function PurchasesItemsFormComp() {
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
              <Input />
            </TableCell>
            <TableCell key={2}>
              <Input type="number" />
            </TableCell>
            <TableCell key={3}>
              <Input type="number" startContent={<span>R$</span>} />
            </TableCell>
            <TableCell key={4}>
              <Input type="number" startContent={<span>R$</span>} />
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
