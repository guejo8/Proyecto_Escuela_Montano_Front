<template>
    <div class="tarjetasProductos d-flex flex-wrap">
        <div v-for="(producto, index) in productos" :key="index" class="tarjetaIndividualProducto col-xl-2 col-lg-3 col-md-3 col-sm-12">
            <div class="imagenProducto">
                <img src="../assets/img/carniceria/pechugas.jpg" alt="">
            </div>
            <div class="contenidoTexto">
                <div class="nombreProducto">
                    {{ producto.nombre }}
                </div>
                <div class="precioProducto">
                    {{ producto.precio }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "ProductosMontano",
        props:{
            categoriaProducto:{
                type: String,
                required: true
            }
        },
        data(){
            return{
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
    width: 20rem;
    margin-bottom: 1rem;
    box-shadow: rgba(155, 155, 155, 0.35) 0px 5px 15px;
}

.tarjetaIndividualProducto:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.imagenProducto {
    position: relative; 
    border: 1px solid black;
    height: 15rem;
    overflow: hidden;
    }

.imagenProducto > img {
    max-width: 100%;
    max-height: 100%;
    transition: transform 0.3s; 
}

.imagenProducto:hover > img {
    transform: scale(1.2); 
}

.contenidoTexto{
    display: flex;
    flex-direction: column;
    margin: 1rem 1rem;
    gap: 1rem;
}

.precioProducto{
    text-align: center;
}
</style>