<template>
    <AgregarProducto />

<div class="contenedor">
    <div>
    <PanelTabla/>
    </div>
</div>
</template>

<script setup>
import AgregarProducto from "../componentesAdmin/AgregarProducto.vue"
import PanelTabla from "../componentesAdmin/PanelTabla.vue"
</script>

<style lang="scss" scooped>
.contenedor{
  display: grid;
  grid-template-columns: 1fr;
  width: 95vw;
  margin: 0 auto;
}
</style>