<script setup>
import thirdiesService from "@/services/personService";
import { onBeforeMount, ref } from "vue";
import PeopleForm from "./components/PeopleForm.vue";

const props = defineProps({ id: String });
const person = ref({});

onBeforeMount(async () => {
    const response = await thirdiesService.getById(props.id);
    if (response.status === 200) {
        person.value = response.data;
    }
});
</script>

<template>
    <PeopleForm :isEditMode="true" :initialData="person" />
</template>
