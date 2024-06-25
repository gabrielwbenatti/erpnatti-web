import apiService from "./apiService";

export default {
    async getAllThirdies(filters = {}) {
        const response = await apiService.get("/thirdies", { params: filters });
        return response;
    },

    async getById(id) {
        const response = await apiService.get(`/thirdies/${id}`);
        return response;
    },

    async store(thirdy) {
        try {
            const response = await apiService.post("/thirdies", thirdy);
            return response;
        } catch (error) {
            console.log("Erro ao gravar produto:", error);
            throw error;
        }
    },
};
