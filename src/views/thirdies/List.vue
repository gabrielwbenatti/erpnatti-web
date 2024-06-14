<script setup>
import thirdiesService from "@/services/thirdiesService";
import { onMounted, ref } from "vue";

const thirdies = ref([]);

onMounted(async () => {
    const response = await thirdiesService.getAllThirdies();
    thirdies.value = response.data;
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
            <RouterLink to="/products/create">
                <button class="search__new">Novo</button>
            </RouterLink>
        </div>

        <br />

        <div class="listing">
            <div v-for="thirdy in thirdies" :key="thirdy.rowid">
                <div class="listing__card">
                    <div class="listing__card-content">
                        <div class="listing__card-title">
                            <div>{{ thirdy.nameAlias || thirdy.name }}</div>
                            <div>{{ thirdy.document }}</div>
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
            color: #efefef;
            font-weight: bold;
            background-color: rgb(28, 28, 28);
        }

        .listing__card-content {
            display: flex;
            flex-direction: column;
        }
    }
}
</style>
