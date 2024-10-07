<script setup>
import router from "@/router";
import purchaseInvoicesService from "@/services/purchaseInvoicesService";
import peopleService from "@/services/personService";
import { onMounted, ref } from "vue";

const suppliers = ref([]);
const invoice = ref({});

onMounted(async () => {
    const response = await peopleService.getAllThirdies({ isSupplier: true });
    if (response.status === 200) suppliers.value = response.data;
});

async function save() {
    const storeResponse = await purchaseInvoicesService.store(invoice.value);
    if (storeResponse.status === 201) router.push("/thirdies");
}
</script>

<template>
    <VAutocomplete
        v-model="invoice.supplier"
        :items="suppliers"
        :return-object="true"
        :item-title="'name'"
        :label="'Fornecedor'"
        :variant="'outlined'"
    />

    <div class="labeled__input">
        <label class="labeled__input-label" for="issuanceDate"
            >Data de Emissão</label
        >
        <input
            class="labeled__input-input"
            type="date"
            name="issuanceDate"
            id="issuanceDate"
            v-model="invoice.issuanceDate"
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
            v-model="invoice.entryDate"
        />
    </div>

    <div class="labeled__input">
        <label class="labeled__input-label" for="entryDate">Valor total</label>
        <input
            class="labeled__input-input"
            type="number"
            name="totalAmount"
            id="totalAmount"
            v-model="invoice.totalAmount"
        />
    </div>

    <button type="button" @click="save">Salvar</button>

    <datalist id="suppliers">
        <option v-for="supplier in suppliers">{{ supplier.rowid }}</option>
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
