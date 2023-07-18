<template>
  <div class="d-flex justify-content-center" style="background-color: #F4F4F4; padding: 3rem">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4" v-for="card in cards" :key="card.id">
          <router-link :to="card.link">
            <div class="card h-90">
              <img :src="card.image" class="card-img-top" :alt="card.alt">
            </div>
          </router-link>
            <div class="card-body p-4">
              <h5 class="card-title text-center">{{ card.title }}</h5>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'; // Importa el componente RouterLink de Vue Router
export default {
  components: {
    RouterLink, // Registra el componente RouterLink en tu componente actual
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          image: require("../assets/img/Img_Home/PINTXO_ACEITUNA.png"),
          alt: "",
          title: "PINTXOS ",
          link: "/pintxos"
        },
        {
          id: 2,
          image: require("../assets/img/Img_Home/Pasteleria.png"),
          alt: "",
          title: "PASTELERÍA",
          link: "/pasteleria"
        },
        {
          id: 3,
          image: require("../assets/img/Img_Home/Carniceria.png"),
          alt: "",
          title: "CARNICERÍA ",
          link: "/carniceria"
        },
        {
          id: 4,
          image: require("../assets/img/Img_Home/Menu_del_dia.png"),
          alt: "",
          title: "MENÚ DEL DÍA",
          link: "/menu-dia"
        },
        {
          id: 5,
          image: require("../assets/img/Img_Home/Menu_izarra.png"),
          alt: "",
          title: "MENÚ ESTRELLA ",
          link: "/menu-estrella"
        },
        {
          id: 6,
          image: require("../assets/img/Img_Home/ULTIMA_BOLSA.png"),
          alt: "",
          title: "RACIONES ",
          link: "/raciones"
        }
      ]
    };
  }
};
</script>

<style>
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
   .card {
    height: auto; /* Permitimos que la altura de las tarjetas se ajuste automáticamente */
    margin-bottom: 2rem;
  }
}

</style>
