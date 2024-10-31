import ProductDTO from "@/dtos/ProductDTO";
import { api } from "./api";
import { ApiResponse } from "@/types/ApiResponse";

const index = async () => {
  const response = await api.get<ApiResponse<ProductDTO[]>>("/products");
  return response;
};

const show = async (id: number) => {
  const response = await api.get<ApiResponse<ProductDTO>>(`/products/${id}`);
  return response;
};

const store = async (product: ProductDTO) => {
  const body = JSON.stringify(product);
  const response = await api.post<ApiResponse<ProductDTO>>("/products", body);
  return response;
};

const update = async (product: ProductDTO) => {
  const { id } = product;
  const body = JSON.stringify(product);
  const response = await api.put<ApiResponse<ProductDTO>>(
    `/products/${id}`,
    body,
  );
  return response;
};

const remove = async (id: number) => {
  const response = await api.delete<ApiResponse<ProductDTO>>(`/products/${id}`);
  return response;
};

export { index, show, store, update, remove };
