<template>
<div class="admin">
    <h1 class="py-4">Vista AdminCarniceria</h1>
    <AdministrarProductos :categoriaProducto="'car'"/>
    <div class="contenedor">
      <div></div>
      <div>
        <PanelTabla/>
      </div>
    </div>
  </div>

</template>

<script setup>
import AdministrarProductos from "../componentesAdmin/AdministrarProductos.vue"
import PanelTabla from "../componentesAdmin/PanelTabla.vue"
</script>

<style lang="scss" scoped>
.admin {
    background-color: rgba(90, 160, 90, 0.63);
    min-height: 100vh;
    max-width: 100vw;
}
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