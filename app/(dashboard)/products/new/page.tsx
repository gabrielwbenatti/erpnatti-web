"use client";

import { axiosClient } from "@/api/axiosClient";
import { NattiButton, NattiButtonLink } from "@/components/common/NattiButton";
import { Input } from "antd";
import { Save, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

interface ProductDTO {
  name: string;
  barcode?: string;
  reference?: string;
  move_stock?: boolean;
  status?: boolean;
  minimum_stock?: number;
  maximum_stock?: number;
  current_stock?: number;
  sale_price?: number;
  promotional_price?: number;
  product_group_id?: number;
  product_line_id?: number;
}

const ProductsNewPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<ProductDTO>({
    name: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const handleSubmit = async () => {
    console.log(formData);
    // const res = await axiosClient.post("/products", formData);
    // if (res.status === 201) router.push("/products");
  };

  return (
    <div className="flex flex-col gap-8 px-8 pt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">new product</h1>
        <div className="flex gap-3">
          <NattiButton label="save" icon={<Save />} onClick={handleSubmit} />
          <NattiButtonLink
            href="/products"
            label="cancel"
            icon={<X />}
            type="text-only"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <form action="post" className="">
          <div className="grid grid-cols-12 gap-3">
            <Input
              size="large"
              className="col-span-9"
              name="name"
              placeholder="name"
              autoComplete="off"
              onChange={handleChange}
            />
            <Input
              size="large"
              className="col-span-3"
              name="reference"
              placeholder="reference"
              autoComplete="off"
              onChange={handleChange}
            />

            <Input
              size="large"
              className="col-span-3"
              name="sale_price"
              placeholder="sale price"
              autoComplete="off"
              onChange={handleNumberChange}
            />
            <Input
              size="large"
              className="col-span-3"
              name="promocional_price"
              placeholder="promocional price"
              autoComplete="off"
              onChange={handleNumberChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductsNewPage;
