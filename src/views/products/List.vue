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

async function fetchData() {
    try {
        const response = await productsService.getAllProducts();
        if (response.status === 200) {
            products.value = response.data.data;
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
                v-model="search"
            />
            <RouterLink to="/products/create">
                <button class="search__new">Novo</button>
            </RouterLink>
        </div>

        <br />

        <div class="listing">
            <div v-for="product in products" :key="product.id">
                <div class="listing__card" @click="navToDetail(product.id)">
                    <div class="listing__card-content">
                        <div class="listing__card-title">
                            {{ product.nome }}
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
