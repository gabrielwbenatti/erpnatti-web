<script setup>
import { onBeforeMount, ref } from "vue";

const props = defineProps({ id: String });
const product = ref(null);

onBeforeMount(async () => {
    try {
        const id = props.id;
        const url = new URL(`http://localhost:9000/products/${id}`);

        const response = await fetch(url);

        if (!response) {
            throw new Error(`HTTP Error: status ${response.status}`);
        }

        const json = await response.json();
        product.value = json;

        console.log(product.value);
    } catch (error) {
        throw new Error(`Erro ao buscar produto ${id}: ${error}`);
    }
});
</script>

<template>
    <div>Produto {{ product.id }}</div>
    <br />
    <div>{{ product.name }}</div>
</template>

<style scoped></style>
