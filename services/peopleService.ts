import api from "./api";

const index = async () => {
  const response = await api.get("/people");

  return response;
};

const show = async (id: number) => {
  const response = await api.get(`/people/${id}`);

  return response;
};

export { index, show };
