import { ColumnDef } from "@tanstack/react-table";

export type Product = {
  id: number;
  name: string;
  barcode: string;
  reference: string;
  current_stock: number;
};

export const columns: ColumnDef<Product>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "reference", header: "Reference" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "current_stock", header: "Current Stock" },
];
