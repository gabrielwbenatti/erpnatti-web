<script setup>
import productsService from "@/services/productsService";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const products = ref([]);
const search = ref("");
const router = useRouter();

function navToDetail(id) {
    router.push({ path: `/products/${id}` });
}

onMounted(async () => {
    const response = await productsService.getAllProducts();
    if (response.status === 200) products.value = response.data;
});
</script>

<template>
    <main>
        <div class="search">
            <input
                type="text"
                class="search__input"
                placeholder="Pesquise aqui"
                v-model="search"
            />
            <RouterLink to="/products/create">
                <button class="search__new">Novo</button>
            </RouterLink>
        </div>

        <br />

        <div class="listing">
            <div v-for="product in products" :key="product.rowid">
                <div class="listing__card" @click="navToDetail(product.rowid)">
                    <div class="listing__card-content">
                        <div>
                            {{ product.reference }}
                        </div>
                        <div class="listing__card-title">
                            {{ product.nameAlias || product.name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.search {
    display: flex;
    justify-content: space-between;
    margin-inline: auto;

    .search__input {
        padding: 10px;
        border-radius: 10px;
        width: 300px;

        &:focus {
            outline: none;
        }
    }

    .search__new {
        padding: 10px 20px;
        border-radius: 10px;
    }
}

.listing {
    .listing__card {
        border-radius: 10px;
        padding: 10px;
        margin-inline: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &:hover {
            cursor: pointer;
            font-weight: bold;
        }

        .listing__card-content {
            display: flex;
            flex-direction: column;
        }
    }
}
</style>
