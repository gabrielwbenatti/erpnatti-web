import Link from "next/link";
import { NattiButtonLink } from "@/components/common/NattiButton";
import { Plus } from "lucide-react";
import { axiosClient, NattiResponse } from "@/api/axiosClient";

interface ProductDTO {
  id: number;
  name: string;
  barcode?: string;
  reference?: string;
  current_stock: number;
  group?: { id: number; name: string };
  line?: { id: number; name: string };
}

const fetchProducts = async () => {
  const res = await axiosClient.get<NattiResponse<ProductDTO[]>>("/products");
  const data = res.data.result;
  return data;
};

async function ProductsPage() {
  const data = await fetchProducts();

  return (
    <div className="flex flex-col gap-8 px-8 pt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">products</h1>
        <NattiButtonLink label="new" href="/products/new" icon={<Plus />} />
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-12 p-3">
          <span className="col-span-2">reference</span>
          <span className="col-span-6">name</span>
          <span className="col-span-2">current stock</span>
          <span className="col-span-2">group</span>
        </div>

        {data.map((e, i) => (
          <Link
            key={i}
            href={`/products/${e.id}`}
            className="rounded-lg hover:bg-primary-100"
          >
            <div className="grid grid-cols-12 p-3">
              <span className="col-span-2 line-clamp-2 text-ellipsis">
                {e.reference}
              </span>
              <span className="col-span-6 line-clamp-2 text-ellipsis">
                {e.name}
              </span>
              <span className="col-span-2 line-clamp-2 text-ellipsis">
                {e.current_stock}
              </span>
              <span className="col-span-2 line-clamp-2 text-ellipsis">
                {e.group?.name || "--"}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
