import apiService from "./apiService";

export default {
    async getAllThirdies() {
        const response = await apiService.get("/thirdies");
        return response;
    },

    async getById(id) {
        const response = await apiService.get(`/thirdies/${id}`);
        return response;
    },
};
