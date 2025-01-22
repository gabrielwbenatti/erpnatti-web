import Link from "next/link";
import { products } from "./data";
import { NattiButtonLink } from "@/components/common/NattiButton";
import { Plus } from "lucide-react";

function ProductsPage() {
  // const handleNewClick = () => router.push("/products/new");

  return (
    <div className="flex flex-col gap-8 px-8 pt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">products</h1>
        <NattiButtonLink label="new" href="/products/new" icon={<Plus />} />
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-12 p-3">
          <span className="col-span-2">Reference</span>
          <span className="col-span-6">Name</span>
          <span className="col-span-2">Current Stock</span>
          <span className="col-span-2">Current Stock</span>
        </div>

        {products.map((e, i) => (
          <Link
            key={i}
            href={`/products/${e.id}`}
            className="rounded-lg hover:bg-primary-100"
          >
            <div className="grid grid-cols-12 p-3">
              <span className="col-span-2">{e.reference}</span>
              <span className="col-span-6">{e.name}</span>
              <span className="col-span-2">{e.current_stock}</span>
              <span className="col-span-2">{e.current_stock}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
