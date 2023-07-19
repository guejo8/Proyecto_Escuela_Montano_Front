<template>
    <div class="background-container">
      <div class="line-overlay"></div>
      <h2 class="title1">{{ $t("home.titulo") }}</h2>
    </div>
  </template>
  
  <script>

  </script>
  
  <style>
  .background-container {
    background-image: url('../assets/img/Img_Home/foto_yerson.png');
    background-size: cover;
    padding: 5rem;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .line-overlay {
    position: absolute;
    
    left: 6rem;
    width: 90%;
    height: 0.6rem;
    background-color: #0D904F;
  }
  
  .title1 {
    color: #FFFFFF;
    text-align: center;
    padding-top: 17rem;
    font-size: 3.5rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  
  
  
  
  /* Media Query para pantallas pequeñas (ejemplo: teléfonos móviles) */
  @media (max-width: 576px) {
    .background-container {
      padding: 3rem;
      min-height: 50vh;
    }
  
    .title1 {
      font-size: 3rem;
      padding-top: 10rem;
    }
  
    .line-overlay {
      top: 17rem; /* Ajusta la posición de la línea para pantallas pequeñas */
      left: 1rem;
    }
  
  }
  
  </style>
  