import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useProductsStore = defineStore("products", () => {
    const products = ref([]);

    const fetchProducts = async () => {
        try {
            const url = "http://localhost:9000/products";
            const response = await fetch(url);
            const json = await response.json();
            products.value = json;
        } catch (error) {
            alert("Erro ao buscar produtos");
            console.error("Erro ao buscar produtos:", error);
        }
    };

    return { products, fetchProducts };
});
