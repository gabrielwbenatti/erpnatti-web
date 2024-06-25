<template>
    <div>
        <form action="">
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
                <label for="document" class="labeled__input-label"
                    >CPF/CNPJ</label
                >
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

            <button type="button" v-on:click="save">Salvar</button>
            <button type="button" @click="router.push('/products')">
                Cancelar
            </button>
        </form>
    </div>
</template>

<script setup>
const props = defineProps({
    initialData: { type: Object, default: () => ({}) },
    isEditMode: { type: Boolean, required: true },
});
</script>

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
