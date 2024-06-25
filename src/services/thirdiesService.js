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
};
