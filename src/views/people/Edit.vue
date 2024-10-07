<script setup>
import personService from "@/services/personService";
import { onBeforeMount, ref } from "vue";
import PeopleForm from "./components/PeopleForm.vue";

const props = defineProps({ id: String });
const person = ref({});

async function fetchData() {
    const response = await personService.getById(props.id);
    if (response.status === 200) {
        person.value = response.data.data;
    }
}

onBeforeMount(async () => {
    await fetchData();
});
</script>

<template>
    <PeopleForm :isEditMode="true" :initialData="person" />
</template>
