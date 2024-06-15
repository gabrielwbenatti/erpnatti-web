<script setup>
import productsService from "@/services/productsService";
import { onBeforeMount, ref } from "vue";

const props = defineProps({ id: String });
const product = ref({});

onBeforeMount(async () => {
    const response = await productsService.getById(props.id);
    if (response.status === 200) product.value = response.data;
});
</script>

<template>
    <div>Produto {{ product.rowid }}</div>
    <br />
    <div>{{ product.name }}</div>
</template>

<style scoped></style>
