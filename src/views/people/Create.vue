<script setup>
import router from "@/router";
import personService from "@/services/personService";
import { ref } from "vue";
import PeopleForm from "./components/PeopleForm.vue";

const person = ref({});

async function save() {
    try {
        const response = await personService.store(person.value);
        if (response.status === 201) {
            router.push("/people");
        }
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <PeopleForm :isEditMode="false" :initialData="person" @onSubmit="save" />
</template>
