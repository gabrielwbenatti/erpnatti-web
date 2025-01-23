import { axiosClient, NattiResponse } from "@/api/axiosClient";
import NattiScaffold from "@/components/common/NattiScaffold";

interface ProductDTO {
  id: number;
  name: string;
  barcode?: string;
  reference: string;
  move_stock: boolean;
  status: boolean;
  minimum_stock: number;
  maximum_stock: number;
  current_stock: number;
  sale_price: number;
  promotional_price: number;
  product_group_id?: number;
  product_line_id?: number;
}

const getProduct = async (id: string) => {
  const res = await axiosClient.get<NattiResponse<ProductDTO>>(
    `/products/${id}`,
  );
  const data = res.data.result;
  return data;
};

const ProductsEdit = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  const data = await getProduct(id);

  return (
    <NattiScaffold title={data.name} actions={<></>}>
      <div>coming soon...</div>
    </NattiScaffold>
  );
};

export default ProductsEdit;
