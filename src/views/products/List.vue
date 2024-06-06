<script setup>
import { onMounted, ref } from 'vue';

const products = ref([])

async function fetchProducts() {
    await fetch('http://localhost:9000/products')
        .then(res => res.json())
        .then(json => products.value = json)
}

onMounted(async () => { await fetchProducts() })
</script>

<template>
    <main>
        <div class="search">
            <input type="text" class="search__input" placeholder="Pesquise aqui">
            <button class="search__new">Novo</button>
        </div>

        <br>

        <div class="listing">
            <div v-for="product in products" @click="showModal">
                <div class="listing__card">
                    <div> {{ product.reference }}</div>
                    <div class="listing__card-title">
                        {{ product.nameAlias || product.name }}
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>


<style scoped>
.search {
    width: 80vw;
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
        width: 80vw;
        border-radius: 10px;
        padding: 10px;
        margin-inline: auto;

        &:hover {
            cursor: pointer;
            color: #efefef;
            font-weight: bold;
            background-color: rgb(28, 28, 28);
        }
    }
}
</style>
