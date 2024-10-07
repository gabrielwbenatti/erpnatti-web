import apiService from "./apiService";

export default {
    async getAllProducts(searchTerm) {
        let params = {};
        if (searchTerm) params = { searchTerm: searchTerm };

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
        const response = await apiService.get("/products", {
            params: { reference: reference },
        });
        return response;
    },

    async store(product) {
        try {
            console.log(product);
            const response = await apiService.post("/products", product);
            return response;
        } catch (error) {
            console.log("Erro ao gravar produto:", error);
            throw error;
        }
    },
};
