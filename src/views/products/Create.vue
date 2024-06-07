<script setup>
import router from '@/router';
import { ref } from 'vue';

const reference = ref("")
const name = ref("")
const nameAlias = ref("")
const status = ref(true)
const toSell = ref(true)
const toBuy = ref(true)

async function save() {
    await fetch('http://localhost:9000/products', {
        method: "POST",
        body: JSON.stringify({
            reference: reference.value,
            name: name.value,
            nameAlias: nameAlias.value,
            status: status.value,
            toSell: toSell.value,
            toBuy: toBuy.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res => {
        if (res.status === 201) {
            router.back()
        }
    })
}
</script>

<template>
    <main>
        <div>
            <h2>Novo Produto</h2>
            <br>
        </div>

        <div>
            <label for="reference">Referência</label>
            <input type="text" name="reference" id="reference" autocomplete="off" v-model="reference"
                class="input__text">
        </div>

        <div>
            <label for="name">Nome</label>
            <input type="text" name="name" id="name" autocomplete="off" v-model="name" class="input__text">
        </div>

        <div>
            <label for="nameAlias">Nome Apelido</label>
            <input type="text" name="nameAlias" id="nameAlias" autocomplete="off" v-model="nameAlias"
                class="input__text">
        </div>

        <div>
            <label for="status">Status</label>
            <input type="checkbox" name="status" id="status" v-model="status">
        </div>

        <div style="display: block;">
            <label for="toSell">Para Vender</label>
            <input type="checkbox" name="toSell" id="toSell" v-model="toSell">
        </div>

        <div>
            <label for="toBuy">Para Comprar</label>
            <input type="checkbox" name="toBuy" id="toBuy" v-model="toBuy">
        </div>

        <button type="button" @click="save">Salvar</button>
        <button type="button" @click="router.back()">Cancelar</button>
    </main>
</template>

<style scoped>
.input__text {
    padding: 8px;
    width: 60vw;
}
</style>