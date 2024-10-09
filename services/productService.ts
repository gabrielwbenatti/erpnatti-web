import api from "./api";

const index = async () => {
  const response = await api.get("/products");

  return response;
};

export { index };
