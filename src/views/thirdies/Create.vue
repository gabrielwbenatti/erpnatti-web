<script setup>
import router from "@/router";
import thirdiesService from "@/services/thirdiesService";
import { ref } from "vue";

const thirdy = ref({});

async function save() {
    try {
        const response = await thirdiesService.store(thirdy.value);
        if (response.status === 201) router.push("/thirdies");
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <form action="">
        <div>
            <h2>Novo Terceiro</h2>
            <br />
        </div>

        <div class="labeled__input">
            <label for="name" class="labeled__input-label">Nome</label>
            <input
                type="text"
                name="name"
                id="name"
                autocomplete="off"
                v-model="thirdy.name"
                class="labeled__input-input"
            />
        </div>

        <div class="labeled__input">
            <label for="nameAlias" class="labeled__input-label"
                >Razão Social</label
            >
            <input
                type="text"
                name="nameAlias"
                id="nameAlias"
                autocomplete="off"
                v-model="thirdy.nameAlias"
                class="labeled__input-input"
            />
        </div>

        <div class="labeled__input">
            <label for="document" class="labeled__input-label">CPF/CNPJ</label>
            <input
                type="text"
                name="document"
                id="document"
                autocomplete="off"
                v-model="thirdy.document"
                class="labeled__input-input"
            />
        </div>

        <div>
            <input
                type="checkbox"
                name="isSupplier"
                id="isSupplier"
                v-model="thirdy.isSupplier"
                class="checkbox"
            />
            <label for="isSupplier">É Fornecedor</label>
        </div>

        <button type="button" v-on:click="save">Salvar</button>
        <button type="button" @click="router.push('/products')">
            Cancelar
        </button>
    </form>
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
