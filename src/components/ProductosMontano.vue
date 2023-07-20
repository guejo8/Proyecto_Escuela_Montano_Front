<template>
    <h1>titulo</h1>
    <div class="tarjetasProductos d-flex flex-wrap">
        <div v-for="(producto, index) in productos" :key="index" class="tarjetaIndividualProducto col-xl-2 col-lg-3 col-md-3 col-sm-12">
            <div class="imagenProducto">
                <img src="../assets/img/carniceria/pechugas.jpg" alt="">
            </div>
            <div class="nombreProducto">
                {{ producto.nombre }}
            </div>
            <div class="precioProducto">
                {{ producto.precio }}
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "ProductosMontano",

        data(){
            return{
                categoriaProducto: "car",
                productos: "",
            };
        },
        methods:{
            async recibirProductosPorCategoria(){
                const url = "http://127.0.0.1:5000/productos/" + this.categoriaProducto;
                try {
                    const response = await fetch(url);
                    const data = await response.json(); 
                    this.productos = data;
                }catch (error){
                    console.log(error);
                }
            },
        },
        mounted(){
            this.recibirProductosPorCategoria();
        }
    }
</script>

<style>
.tarjetasProductos{
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
}

.tarjetaIndividualProducto{
    border: solid 1px black;
    width: 20rem;
    height: 20rem;
    margin-bottom: 1rem;
}

.imagenProducto{
    border: 1px solid black;
    height: 15rem;
}

.imagenProducto > img{
    max-width: 100%;
    max-height: 100%;
}
</style>