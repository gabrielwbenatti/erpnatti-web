import axios from "axios";

const apiService = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
    },
});

export default apiService;
