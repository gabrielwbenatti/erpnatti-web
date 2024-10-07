import apiService from "./apiService";

export default {
    async getAllPeople() {
        const response = await apiService.get("/people");
        return response;
    },

    async getById(id) {
        const response = await apiService.get(`/people/${id}`);
        return response;
    },

    async store(thirdy) {
        try {
            const response = await apiService.post("/people", thirdy);
            return response;
        } catch (error) {
            console.log("Erro ao gravar produto:", error);
            throw error;
        }
    },
};
