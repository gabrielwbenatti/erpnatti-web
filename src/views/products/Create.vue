<script setup>
import ProductForm from "./components/ProductForm.vue";
import productsService from "@/services/productsService";
import { ref } from "vue";
import { useRouter } from "vue-router";

const product = ref({
    status: true,
    toSell: true,
    toBuy: true,
});

const router = useRouter();

async function save() {
    try {
        const response = await productsService.getByReference(
            product.value.reference
        );
        if (response.data.length == 0) {
            const storeResponse = await productsService.store(product.value);
            if (storeResponse.status === 201) {
                router.push("/products");
            }
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
