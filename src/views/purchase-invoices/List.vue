<script setup>
import purchaseInvoicesService from "@/services/purchaseInvoicesService";
import { onMounted, ref } from "vue";

const invoices = ref([]);

async function fetchData() {
    try {
        const response = await purchaseInvoicesService.getAllInvoices();
        if (response.status === 200) {
            invoices.value = response.data.data;
        }
    } catch (error) {
        console.log(error);
    }
}

onMounted(async () => {
    await fetchData();
});
</script>

<template>
    <nav>
        <ul>
            <li><a href="/">Inicio</a></li>
        </ul>
        <br />
    </nav>

    <main>
        <div class="search">
            <input
                type="text"
                class="search__input"
                placeholder="Pesquise aqui"
            />
            <RouterLink to="/purchases/create">
                <button class="search__new">Novo</button>
            </RouterLink>
        </div>

        <br />

        <div class="listing">
            <div v-for="purchase in purchases" :key="purchase.id">
                <div class="listing__card" @click="navToDetail(purchase.id)">
                    <div class="listing__card-content">
                        <div class="listing__card-title"></div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
