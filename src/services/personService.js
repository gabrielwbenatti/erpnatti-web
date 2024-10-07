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

    async store(people) {
        try {
            const response = await apiService.post("/people", people);
            return response;
        } catch (error) {
            console.log("Erro ao gravar produto:", error);
            throw error;
        }
    },
};
