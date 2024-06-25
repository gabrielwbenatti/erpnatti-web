<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
    mainRoute: { type: String, required: true },
});

const emits = defineEmits(["onSubmit"]);
const router = useRouter();

const onCancel = () => router.push(`/${props.mainRoute}`);
</script>

<template>
    <form action="">
        <slot> </slot>

        <button type="button" v-on:click="emits('onSubmit')">Salvar</button>
        <button type="button" @click="onCancel">Cancelar</button>
    </form>
</template>
