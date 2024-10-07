<script setup>
import ProductForm from "./components/ProductForm.vue";
import productsService from "@/services/productsService";
import { ref } from "vue";
import { useRouter } from "vue-router";

const product = ref({
    nome: "",
    status: true,
});

const router = useRouter();

async function save() {
    try {
        const storeResponse = await productsService.store(product.value);
        if (storeResponse.status === 201) {
            router.push("/products");
        }
    } catch (error) {
        console.error(error);
    }
}
</script>

<template>
    <ProductForm
        :isEditMode="false"
        :initialData="product"
        @onSubmit="save"
    ></ProductForm>
</template>
