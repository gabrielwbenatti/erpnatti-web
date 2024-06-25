<script setup>
import thirdiesService from "@/services/thirdiesService";
import { onBeforeMount, ref } from "vue";

const props = defineProps({ id: String });
const thirdy = ref({});

onBeforeMount(async () => {
    const response = await thirdiesService.getById(props.id);
    if (response.status === 200) thirdy.value = response.data;
});
</script>

<template>
    <div>Terceiro {{ thirdy.rowid }}</div>
    <br />
    <div>{{ thirdy.name }}</div>
</template>
