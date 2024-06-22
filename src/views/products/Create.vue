<script setup>
import router from "@/router";
import productsService from "@/services/productsService";
import { ref } from "vue";

const product = ref({
    reference: "",
    name: "",
    nameAlias: "",
    status: true,
    toSell: true,
    toBuy: true,
});

async function save() {
    try {
        const response = await productsService.getByReference(
            product.value.reference
        );
        if (response.data.length == 0) {
            const storeResponse = await productsService.store(product.value);
            if (storeResponse.status === 201) {
                router.push("/products");
            }
        }
    } catch (error) {
        console.error(error);
    }
}
</script>

<template>
    <main>
        <div>
            <h2>Novo Produto</h2>
            <br />
        </div>

        <div class="labeled__input">
            <label for="reference" class="labeled__input-label"
                >Referência</label
            >
            <input
                type="text"
                name="reference"
                id="reference"
                autocomplete="off"
                v-model="product.reference"
                class="labeled__input-input"
            />
        </div>

        <div class="labeled__input">
            <label for="name" class="labeled__input-label">Nome</label>
            <input
                type="text"
                name="name"
                id="name"
                autocomplete="off"
                v-model="product.name"
                class="labeled__input-input"
            />
        </div>

        <div class="labeled__input">
            <label for="nameAlias" class="labeled__input-label"
                >Nome Apelido</label
            >
            <input
                type="text"
                name="nameAlias"
                id="nameAlias"
                autocomplete="off"
                v-model="product.nameAlias"
                class="labeled__input-input"
            />
        </div>

        <div>
            <input
                type="checkbox"
                name="status"
                id="status"
                v-model="product.status"
                class="checkbox"
            />
            <label for="status">Status</label>
        </div>

        <div style="display: block">
            <input
                type="checkbox"
                name="toSell"
                id="toSell"
                v-model="product.toSell"
                class="checkbox"
            />
            <label for="toSell">Para Vender</label>
        </div>

        <div>
            <input
                type="checkbox"
                name="toBuy"
                id="toBuy"
                v-model="product.toBuy"
                class="checkbox"
            />
            <label for="toBuy">Para Comprar</label>
        </div>

        <button type="button" v-on:click="save()">Salvar</button>
        <button type="button" @click="router.back()">Cancelar</button>
    </main>
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

.checkbox {
    margin-right: 0.3em;
}
</style>
