import { Product } from "@/models/Product";
import api from "./api";

const index = async () => {
  const response = await api.get("/products");
  return response;
};

const show = async (id: number) => {
  const response = await api.get(`/products/${id}`);
  return response;
};

const store = async (product: Product) => {
  const body = JSON.stringify(product);
  const response = await api.post("/products", body);
  return response;
};

const update = async (product: Product) => {
  const { id } = product;
  const body = JSON.stringify(product);
  const response = await api.put(`/products/${id}`, body);
  return response;
};

const remove = async (id: number) => {
  const response = await api.delete(`/products/${id}`);
  return response;
};

export { index, show, store, update, remove };
