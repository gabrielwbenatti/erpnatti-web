<script setup>
import productsService from "@/services/productsService";
import { onBeforeMount, ref } from "vue";

const props = defineProps({ id: String });
const product = ref(null);

onBeforeMount(async () => {
    await productsService
        .getById(props.id)
        .then((response) => (product.value = response.data));
});
</script>

<template>
    <div>Produto {{ product.rowid }}</div>
    <br />
    <div>{{ product.name }}</div>
</template>

<style scoped></style>
