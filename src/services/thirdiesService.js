import apiService from "./apiService";

export default {
    async getAllThirdies() {
        const response = await apiService.get("/thirdies");
        return response;
    },
};
