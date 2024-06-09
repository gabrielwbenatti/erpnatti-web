<script setup>
import router from "@/router";
import { ref } from "vue";

const reference = ref("");
const name = ref("");
const nameAlias = ref("");
const status = ref(true);
const toSell = ref(true);
const toBuy = ref(true);

async function referenceAlreadyExists(reference) {
    const url = new URL("http://localhost:9000/products");
    url.searchParams.append("reference", reference.trim());
    const response = await fetch(url);
    if (response) {
        return true;
    } else {
        return false;
    }
}

async function save() {
    if ((await referenceAlreadyExists(reference.value)) === true) return;

    const url = new URL("http://localhost:9000/products");
    await fetch(url, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
            reference: reference.value,
            name: name.value,
            nameAlias: nameAlias.value,
            status: status.value,
            toSell: toSell.value,
            toBuy: toBuy.value,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    }).then((res) => {
        if (res.status === 201) {
            router.back();
        }
    });
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
                v-model="reference"
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
                v-model="name"
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
                v-model="nameAlias"
                class="labeled__input-input"
            />
        </div>

        <div>
            <input
                type="checkbox"
                name="status"
                id="status"
                v-model="status"
                class="checkbox"
            />
            <label for="status">Status</label>
        </div>

        <div style="display: block">
            <input
                type="checkbox"
                name="toSell"
                id="toSell"
                v-model="toSell"
                class="checkbox"
            />
            <label for="toSell">Para Vender</label>
        </div>

        <div>
            <input
                type="checkbox"
                name="toBuy"
                id="toBuy"
                v-model="toBuy"
                class="checkbox"
            />
            <label for="toBuy">Para Comprar</label>
        </div>

        <button type="button" @click="save">Salvar</button>
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
