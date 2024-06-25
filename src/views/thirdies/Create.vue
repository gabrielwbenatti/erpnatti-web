<script setup>
import router from "@/router";
import thirdiesService from "@/services/thirdiesService";
import ThirdyForm from "./components/ThirdyForm.vue";
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
    <ThirdyForm :isEditMode="false" :initialData="thirdy" @onSubmit="save" />
</template>
