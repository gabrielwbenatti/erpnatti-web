<script setup>
import purchaseInvoicesService from "@/services/purchaseInvoicesService";
import { onMounted, ref } from "vue";

const invoices = ref([]);

onMounted(async () => {
    // const response = await purchaseInvoicesService.getAllInvoices();
});
</script>

<template>
    <div class="listing">
        <div v-for="invoice in invoices" :key="invoice.rowid">
            <div class="listing__card">
                <div class="listing__card-content">
                    <div class="listing__card-title"></div>
                </div>
            </div>
        </div>
    </div>
</template>
