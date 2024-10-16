import { Pessoa } from "@/models/Pessoa";
import api from "./api";
import { ApiResponse } from "@/types/ApiResponse";

const index = async () => {
  const response = await api.get<ApiResponse<Pessoa[]>>("/people");
  return response;
};

const store = async (person: Pessoa) => {
  const body = JSON.stringify(person);
  const response = await api.post<ApiResponse<Pessoa>>("/people", body);
  return response;
};

const show = async (id: number) => {
  const response = await api.get<ApiResponse<Pessoa>>(`/people/${id}`);
  return response;
};

const update = async (pessoa: Pessoa) => {
  const { id } = pessoa;
  const body = JSON.stringify(pessoa);
  const response = await api.put<Pessoa>(`/people/${id}`, body);
  return response;
};

export { index, store, show, update };
