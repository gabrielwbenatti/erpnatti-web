<script setup>
import BaseForm from "@/components/shared/BaseForm.vue";

const props = defineProps({
    initialData: { type: Object, default: () => ({}) },
    isEditMode: { type: Boolean, required: true },
});

const emits = defineEmits(["onSubmit"]);
</script>

<template>
    <h2 v-if="props.isEditMode">{{ props.initialData.name }}</h2>
    <h2 v-else>Novo Cadastro</h2>
    <br />

    <BaseForm :mainRoute="'thirdies'" @onSubmit="emits('onSubmit')">
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
                >Razão Social</label
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

        <div class="labeled__input">
            <label for="document" class="labeled__input-label">CPF/CNPJ</label>
            <input
                type="text"
                name="document"
                id="document"
                autocomplete="off"
                v-model="props.initialData.document"
                class="labeled__input-input"
            />
        </div>

        <div>
            <input
                type="checkbox"
                name="isSupplier"
                id="isSupplier"
                v-model="props.initialData.isSupplier"
                class="checkbox"
            />
            <label for="isSupplier">É Fornecedor</label>
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
