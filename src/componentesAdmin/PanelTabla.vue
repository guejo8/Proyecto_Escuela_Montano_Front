<template>
                                <div class="card shadow border-0 mb-7">
                                    <div class="card-header">
                                        <h5 class="my-2 text-center">Productos agregados</h5>
                                    </div>
                                    <div class="table-responsive">
                                        <table class="table table-hover table-nowrap">
                                            <thead class="thead-light">
                                                <tr>
                                                    <th scope="col" class="campo">Imagen</th>
                                                    <th scope="col" class="campo">Nombre</th>
                                                    <th scope="col" class="campo">Precio</th>
                                                    <th scope="col" class="campo"></th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="ancho">
                                                        <img alt="..."
                                                            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                            class="imagen">
                                                    </td>
                                                    <td>
                                                        Nombre del producto
                                                    </td>

                                                    <td class="ancho">
                                                        $3.500
                                                    </td>
                                                    <td class="ancho">
                                                        <span class="badge badge-lg badge-dot ">
                                                            <a href="#" class="btn btn-sm btn-neutral">Editar</a>
                                                        </span>
                                                        
                                                    </td>
                                                    <td class="ancho">
                                                        
                                                        <button type="button"
                                                            class="btn btn-sm btn-square btn-neutral text-danger-hover borrar ">
                                                            <i class="bi bi-trash "></i>
                                                        </button>
                                                    </td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="card-footer border-0 py-5">
                                        <span class="text-muted text-sm">Showing 10 items out of 250 results found</span>
                                    </div>
                                </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.ancho{
    width: 10%;
}

.campo{
    text-transform: capitalize;
    font-size: medium;
    padding-left: 1rem;
}
.imagen{
    width: 90%;
    margin: 0 auto;
}

.borrar{
    background-color: rgb(157, 32, 32);
    color: white;
}

td{
    border: 1px red solid;
}
</style>