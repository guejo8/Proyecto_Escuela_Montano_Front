<template>
    <div class="formulario">
        <h2>Agregar Producto</h2>
        <form @submit.prevent="agregarProducto">
            <label>Imagen del Producto:</label>
            <input type="file" ref="imagenProducto" accept="image/*" @change="cargarImagen" />
            <br />

            <label>Categoría del Producto:</label>
            <select v-model="categoria">
                <option value="car">Carniceria</option>
                <option value="pas">Pasteleria</option>
                <option value="pin">Pintxos</option>
                <option value="rac">Raciones</option>
            </select>
            <br />

            <label>Nombre del Producto:</label>
            <input type="text" v-model="nombre" />
            <br />

            <label>Precio del Producto:</label>
            <input type="text" v-model="precio" />
            <br />

            <button type="submit">Agregar</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categoria: "",
            nombre: "",
            precio: "",
            imagen: null,
        };
    },
    methods: {
        cargarImagen(event) {
            this.imagen = event.target.files[0];
        },
        agregarProducto() {

            console.log("Imagen:", this.imagen);
            console.log("Categoría:", this.categoria);
            console.log("Nombre:", this.nombre);
            console.log("Precio:", this.precio);

            this.categoria = "";
            this.nombre = "";
            this.precio = "";
            this.imagen = null;
            this.$refs.imagenProducto.value = "";
        },
    },
};
</script>

<style>
/* Estilos para centrar el formulario */
.formulario {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

form {
    max-width: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 10px;
}

input,
select,
button {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button {
    background-color: #4caf50;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</style>