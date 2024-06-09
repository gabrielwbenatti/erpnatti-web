<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const products = ref([]);
const search = ref("");
const router = useRouter();

function navToDetail(id) {
    router.push({
        path: `/products/${id}`,
    });
}

async function fetchProducts(searchTerm) {
    try {
        const url = new URL("http://localhost:9000/products");

        if (searchTerm.value !== "") {
            url.searchParams.append("searchTerm", searchTerm);
        }

        const response = await fetch(url);

        if (!response) {
            throw new Error(`HTTP Error: status ${response.status}`);
        }

        const json = await response.json();
        products.value = json;
    } catch (error) {
        console.error("Falha ao buscar produtos", error);
    }
}

async function searchProducts(e) {
    const key = e.keyCode;
    if (key == 13) fetchProducts(search.value);
}

onMounted(async () => {
    await fetchProducts(search);
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
                v-on:keydown="searchProducts"
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
                        <div>{{ product.reference }}</div>
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
            color: #efefef;
            font-weight: bold;
            background-color: rgb(28, 28, 28);
        }

        .listing__card-content {
            display: flex;
            flex-direction: column;
        }
    }
}
</style>
