<script setup>
</script>

<template>
    <main>
        <div>
            <h2>Novo Produto</h2>
            <br>
        </div>

        <div>
            <label for="reference">Referência</label>
            <input type="text" name="reference" id="reference" autocomplete="off">
        </div>

        <div>
            <label for="name">Nome</label>
            <input type="text" name="name" id="name" autocomplete="off">
        </div>

        <div>
            <label for="nameAlias">Nome Apelido</label>
            <input type="text" name="nameAlias" id="nameAlias" autocomplete="off">
        </div>

        <div>
            <label for="status">Status</label>
            <input type="checkbox" name="status" id="status">
        </div>

        <div>
            <label for="toSell">Para Vender</label>
            <input type="checkbox" name="toSell" id="toSell">
        </div>

        <div>
            <label for="toBuy">Para Comprar</label>
            <input type="checkbox" name="toBuy" id="toBuy">
        </div>

        <button type="button">Salvar</button>
        <button type="button">Cancelar</button>
    </main>
</template>

<style scoped></style>