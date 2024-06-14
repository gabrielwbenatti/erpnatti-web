import apiService from "./apiService";

export default {
    async getAllProducts(searchTerm) {
        let params = {};
        if (searchTerm) {
            params = { searchTerm: searchTerm };
        }
        const response = await apiService.get("/products", {
            params: params,
        });
        return response;
    },

    async getById(id) {
        const response = await apiService.get(`/products/${id}`);
        return response;
    },

    async getByReference(reference) {
        let params = {};
        if (reference) {
            params = { reference: reference };
        }
        const response = await apiService.get("/products", {
            params: params,
        });
        return response;
    },
};
