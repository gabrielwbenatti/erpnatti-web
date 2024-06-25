<script setup>
import BaseForm from "@/components/shared/BaseForm.vue";
import { ref } from "vue";

const emits = defineEmits(["onSubmit"]);

const props = defineProps({
    initialData: { type: Object, default: () => ({}) },
    isEditMode: { type: Boolean, default: false },
});
</script>

<template>
    <h2 v-if="props.isEditMode">{{ props.initialData.name }}</h2>
    <h2 v-else>Novo Cadastro</h2>
    <br />

    <BaseForm :mainRoute="'products'" @onSubmit="emits('onSubmit')">
        <div class="labeled__input">
            <label for="reference" class="labeled__input-label"
                >Referência</label
            >
            <input
                type="text"
                name="reference"
                id="reference"
                autocomplete="off"
                v-model="props.initialData.reference"
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
                v-model="props.initialData.name"
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
                v-model="props.initialData.nameAlias"
                class="labeled__input-input"
            />
        </div>

        <div>
            <input
                type="checkbox"
                name="status"
                id="status"
                v-model="props.initialData.status"
                class="checkbox"
            />
            <label for="status">Status</label>
        </div>

        <div style="display: block">
            <input
                type="checkbox"
                name="toSell"
                id="toSell"
                v-model="props.initialData.toSell"
                class="checkbox"
            />
            <label for="toSell">Para Vender</label>
        </div>

        <div>
            <input
                type="checkbox"
                name="toBuy"
                id="toBuy"
                v-model="props.initialData.toBuy"
                class="checkbox"
            />
            <label for="toBuy">Para Comprar</label>
        </div>
    </BaseForm>
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
