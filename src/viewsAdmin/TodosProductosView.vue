<template>
    <h1>Todos los productos</h1>
    <div class="contenedor">
        <div>
        <PanelTabla/>
        </div>
    </div>
</template>

<script setup>
import PanelTabla from "../componentesAdmin/PanelTabla.vue"

</script>

<style lang="scss" scoped>

h1{
    text-align: center;
}
.contenedor{
  display: grid;
  grid-template-columns: 1fr;
  width: 95vw;
  margin: 0 auto;
}
</style>