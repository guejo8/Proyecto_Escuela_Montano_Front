<template>
  <div class="background-container">
    <div class="line-overlay"></div>
    <h2 class="title1">OSTALARITZA ESKOLA</h2>
  </div>
  <div class="d-flex justify-content-center" style="background-color: #F4F4F4; padding: 3rem">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4" v-for="card in cards" :key="card.id">
          <div class="card h-90">
            <img :src="card.image" class="card-img-top" :alt="card.alt">
          </div>
          <div class="card-body p-4">
            <h5 class="card-title text-center">{{ card.title }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          image: require("../assets/img/Img_Home/PINTXO_ACEITUNA.png"),
          alt: "",
          title: "PINTXOS "
        },
        {
          id: 2,
          image: require("../assets/img/Img_Home/Pasteleria.png"),
          alt: "",
          title: "PASTELERÍA"
        },
        {
          id: 3,
          image: require("../assets/img/Img_Home/Carniceria.png"),
          alt: "",
          title: "CARNICERÍA "
        },
        {
          id: 4,
          image: require("../assets/img/Img_Home/Menu_del_dia.png"),
          alt: "",
          title: "MENÚ DEL DÍA"
        },
        {
          id: 5,
          image: require("../assets/img/Img_Home/Menu_izarra.png"),
          alt: "",
          title: "MENÚ ESTRELLA "
        },
        {
          id: 6,
          image: require("../assets/img/Img_Home/ULTIMA_BOLSA.png"),
          alt: "",
          title: "RACIONES "
        }
      ]
    };
  }
};
</script>

<style>
.background-container {
  background-image: url('../assets/img/Img_Home/foto_yerson.png');
  background-size: cover;
  padding: 5rem;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.line-overlay {
  position: absolute;
  top: 27rem;
  left: 6rem;
  width: 90%;
  height: 0.6rem;
  background-color: #0D904F;
}

.title1 {
  color: #FFFFFF;
  text-align: center;
  padding-top: 17rem;
  font-size: 5rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}


.card {
  height: 20rem;
  width: 20rem;
}

/* Estilo para imágenes en las tarjetas */
.card img {
  width: 20rem; /* Establecemos el ancho del 100% para todas las imágenes */
  height: 18rem; /* Permite que la altura se ajuste proporcionalmente */
  object-fit: cover; /* Ajustamos el tamaño de la imagen para cubrir toda la tarjeta */
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

  .card {
    height: auto; /* Permitimos que la altura de las tarjetas se ajuste automáticamente */
    margin-bottom: 2rem;
  }
}

</style>
