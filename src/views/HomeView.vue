<template>

<div class="contenido">

</div>
  <FooterMontano />
    
    <router-view/>
  </template>
  
  <script  setup>
  

  import FooterMontano from '../components/FooterMontano.vue';

</script>

<style lang="scss" scoped>
.contenido{
  min-height: 100vh;
}
</style>