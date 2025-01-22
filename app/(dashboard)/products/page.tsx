"use client";

import NattiButton from "@/components/shared/NattiButton";
import DataTable from "./data-table";
import { columns } from "./columns";

function ProductsPage() {
  return (
    <div className="flex flex-col gap-8 px-8 pt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">products</h1>
        <div className="flex gap-3">
          <NattiButton label="new" />
          <input
            placeholder="search"
            className="rounded-lg border border-black px-2 focus:outline-none"
          />
        </div>
      </div>

      <DataTable columns={columns} data={[]} />
    </div>
  );
}

export default ProductsPage;
