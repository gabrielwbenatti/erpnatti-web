import PersonDTO from "@/dtos/PersonDTO";
import { api } from "./api";
import { ApiResponse } from "@/types/ApiResponse";

const index = async () => {
  const response = await api.get<ApiResponse<PersonDTO[]>>("/people");
  return response;
};

const store = async (person: PersonDTO) => {
  const body = JSON.stringify(person);
  const response = await api.post<ApiResponse<PersonDTO>>("/people", body);
  return response;
};

const show = async (id: number) => {
  const response = await api.get<ApiResponse<PersonDTO>>(`/people/${id}`);
  return response;
};

const update = async (person: PersonDTO) => {
  const { id } = person;
  const body = JSON.stringify(person);
  const response = await api.put<PersonDTO>(`/people/${id}`, body);
  return response;
};

export { index, store, show, update };
