<script setup>
import { computed, ref } from "vue";

const props = defineProps({
    options: { type: Array, required: true, default: () => [] },
    modelValue: { type: Object || String },
});
const emit = defineEmits(["update:modelValue"]);
const isOpen = ref(true);
const search = ref("");

const filteredOptions = computed(() => {
    if (search.value === "") return [];

    return props.options.filter((item) => {
        if (item.name.toLowerCase().includes(search.value.toLowerCase())) {
            return item;
        }
    });
});

const setSelected = (item) => {
    isOpen.value = false;
    search.value = item.name;
    emit("update:modelValue");
};

const handleInput = (event) => {
    isOpen.value = true;
    search.value = event.target.value;
    emit("update:modelValue");
};
</script>

<template>
    <div class="div__input">
        <input type="text" v-model="search" @input="handleInput" />
        <ul v-if="filteredOptions.length && isOpen">
            <li v-for="option in filteredOptions" @click="setSelected(option)">
                {{ option.name }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
.div__input {
    width: 60vw;
}

.div__input input {
    padding: 8px;
    width: 100%;
}

.div__input ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.div__input ul li {
    padding: 8px;
}
</style>
