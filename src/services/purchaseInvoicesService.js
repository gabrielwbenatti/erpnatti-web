import apiService from "./apiService";

export default {
    async getAllInvoices() {
        const response = await apiService.get();
    },
};
