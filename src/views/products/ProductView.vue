<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue'

const products = ref([
    {
        "rowid": 13,
        "reference": "82688",
        "name": "Egeo Des Col Dolce C\/Car 90ml",
        "nameAlias": "",
        "status": false,
        "toSell": false,
        "toBuy": false
    },
    {
        "rowid": 14,
        "reference": "25458",
        "name": "Floratta Blue Desodorante Colônia, 75ml",
        "nameAlias": "",
        "status": false,
        "toSell": false,
        "toBuy": false
    },
    {
        "rowid": 15,
        "reference": "57530",
        "name": "Estj Egeo Choc Amor\/24",
        "nameAlias": "",
        "status": false,
        "toSell": false,
        "toBuy": false
    }
])
const isModalShow = ref(false)

function showModal() { isModalShow = true; }
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

        <Modal v-if="isModalShow" />
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
