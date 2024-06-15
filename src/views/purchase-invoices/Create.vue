<script setup>
import thirdiesService from "@/services/thirdiesService";
import { onMounted, ref } from "vue";

const suppliers = ref([]);

onMounted(async () => {
    const response = await thirdiesService.getAllThirdies({ isSupplier: true });
    if (response.status === 200) suppliers.value = response.data;
});
</script>

<template>
    <div class="labeled__input">
        <label class="labeled__input-label" for="supplier">Fornecedor</label>
        <input
            class="labeled__input-input"
            list="suppliers"
            name="supplier"
            id="supplier"
        />
    </div>

    <div class="labeled__input">
        <label class="labeled__input-label" for="issuanceDate"
            >Data de Emissão</label
        >
        <input
            class="labeled__input-input"
            type="date"
            name="issuanceDate"
            id="issuanceDate"
        />
    </div>

    <div class="labeled__input">
        <label class="labeled__input-label" for="entryDate"
            >Data de Entrada</label
        >
        <input
            class="labeled__input-input"
            type="date"
            name="entryDate"
            id="entryDate"
        />
    </div>

    <button type="submit">Salvar</button>

    <datalist id="suppliers">
        <option v-for="supplier in suppliers">{{ supplier.name }}</option>
    </datalist>
</template>

<style scoped>
.labeled__input {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;

    .labeled__input-input {
        padding: 8px;
        width: 60vw;
    }

    .labeled__input-label {
        margin-bottom: 0.3em;
    }
}
</style>
