<script setup>
import router from "@/router";
import thirdiesService from "@/services/personService";
import { onMounted, ref } from "vue";

const people = ref([]);

function navToDetail(id) {
    router.push({ path: `/people/${id}` });
}

async function fetchData() {
    try {
        const response = await thirdiesService.getAllPeople();
        if (response.status === 200) {
            people.value = response.data.data;
        }
    } catch (error) {
        console.log(error);
    }
}

onMounted(async () => {
    await fetchData();
});
</script>

<template>
    <main>
        <div class="search">
            <input
                type="text"
                class="search__input"
                placeholder="Pesquise aqui"
            />
            <RouterLink to="/people/create">
                <button class="search__new">Novo</button>
            </RouterLink>
        </div>

        <br />

        <div class="listing">
            <div v-for="person in people" :key="person.id">
                <div class="listing__card" @click="navToDetail(person.id)">
                    <div class="listing__card-content">
                        <div class="listing__card-title">
                            <div>{{ person.nome }}</div>
                            <div>{{ person.cpf_cnpj }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.search {
    display: flex;
    justify-content: space-between;
    margin-inline: auto;

    .search__input {
        padding: 10px;
        border-radius: 10px;
        width: 300px;

        &:focus {
            outline: none;
        }
    }

    .search__new {
        padding: 10px 20px;
        border-radius: 10px;
    }
}

.listing {
    .listing__card {
        border-radius: 10px;
        padding: 10px;
        margin-inline: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &:hover {
            cursor: pointer;
            font-weight: bold;
        }

        .listing__card-content {
            display: flex;
            flex-direction: column;
        }
    }
}
</style>
