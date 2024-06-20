import apiService from "./apiService";

export default {
    async getAllInvoices() {
        const response = await apiService.get();
    },

    async store(invoice) {
        try {
            const response = await apiService.post("/purchase-invoices", {
                ...invoice,
            });
            return response;
        } catch (error) {
            console.log("Erro ao gravar fatura:", error);
            throw error;
        }
    },
};
