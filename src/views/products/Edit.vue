<script setup>
import productsService from "@/services/productsService";
import ProductForm from "./components/ProductForm.vue";
import { onBeforeMount, ref } from "vue";

const props = defineProps({ id: String });
const product = ref({});

onBeforeMount(async () => {
    const response = await productsService.getById(props.id);
    if (response.status === 200) {
        product.value = response.data;
    }
});
</script>

<template>
    <ProductForm :isEditMode="true" :initialData="product" />
</template>

<style scoped></style>
