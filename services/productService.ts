import { Product } from "@/models/Product";
import { api } from "./api";
import { ApiResponse } from "@/types/ApiResponse";

const index = async (search?: any) => {
  const response = await api.get<ApiResponse<Product[]>>("/products", {
    params: search,
  });
  return response;
};

const show = async (id: number) => {
  const response = await api.get<ApiResponse<Product>>(`/products/${id}`);
  return response;
};

const store = async (product: Product) => {
  const body = JSON.stringify(product);
  const response = await api.post<ApiResponse<Product>>("/products", body);
  return response;
};

const update = async (product: Product) => {
  const { id } = product;
  const body = JSON.stringify(product);
  const response = await api.put<ApiResponse<Product>>(`/products/${id}`, body);
  return response;
};

const remove = async (id: number) => {
  const response = await api.delete<ApiResponse<Product>>(`/products/${id}`);
  return response;
};

export { index, show, store, update, remove };
