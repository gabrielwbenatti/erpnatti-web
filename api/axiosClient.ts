import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3001",
});

interface NattiResponse<T> {
  result: T;
  meta: any;
}

export { axiosClient, type NattiResponse };
