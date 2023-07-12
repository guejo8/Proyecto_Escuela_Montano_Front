<template>

<nav class="navbar navbar  fixed-top">
  <div class="container-fluid">
          
          <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt="logo" class="logo" > </a>


           <nav class="navbar navbar-expand-lg navbar-fixed-top ">
            <div class="container-fluid" > 
              
              <div class="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
                <ul class="navbar-nav  mb-2 mb-lg-0">
                       
                  
                  <!-- ----------desplegable Escuela Montaño-------- -->
                  <li class="nav-item dropdown " >
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                      Escuela Montaño
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Quienes Somos</a></li>
                      <li><a class="dropdown-item" href="#">Contacto</a></li>
                     
                    </ul>
                  </li>
                  
                  <li class="nav-item">
                    <a class="nav-link" href="#">Menu del Dia</a>
                  </li>
                  
                  <li class="nav-item">
                    <a class="nav-link" href="#">Menu Estrella</a>
                  </li>
                               
                  <!-- ----------desplegable Mas--------- -->
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Mas
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Carniceria</a></li>
                      <li><a class="dropdown-item" href="#">Pasteleria</a></li>
                      <li><a class="dropdown-item" href="#">Pasteleria</a></li>
                      <li><a class="dropdown-item" href="#">Pintxos</a></li>
                    </ul>
                  </li>

                              <!-- ----------desplegable idioma--------- -->
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Idioma
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#"><img src="../assets/España.png" width="20"/>Español</a></li>
                      <li><a class="dropdown-item" href="#"><img src="../assets/euskadi.jpeg" width="20"/> Euskara</a></li>
                      
                    </ul>
                  </li>
                  </ul> 
              </div>
            </div>
          </nav>   
          <!-- -----------Menu hamburguesa----------- -->

          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-start text-bg-" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <!-- <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5> -->
              <button type="button" class="btn-close btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <!-- <li class="nav-item"></li>
                  <a class="nav-link" href="#">Escuela de Montaño</a> -->
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Escuela Montaño
                  </a>
                   <ul class="dropdown-menu dropdown-menu">
                     <li><a class="dropdown-item" href="#">Quienes somos</a></li>
                    <li><a class="dropdown-item" href="#">Contacto</a></li>
                    </ul>


                <li class="nav-item">
                  <a class="nav-link" href="#">Menu del dia</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Menu Estrella</a>
                  </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Mas
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                     <li><a class="dropdown-item" href="#">Carniceria</a></li>
                    <li><a class="dropdown-item" href="#">Pasteleria</a></li>
                    <li><a class="dropdown-item" href="#">Raciones</a></li>
                    <li><a class="dropdown-item" href="#">Pintxos</a></li>
                    <li><a class="dropdown-item" href="#">Idiomas</a></li>
              
                   </ul>


                   <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Idiomas
                  </a>
                   <ul class="dropdown-menu dropdown-menu-dark">
                     <li><a class="dropdown-item" href="#"><img src="../assets/España.png" width="20"/>Castellano</a></li>
                    <li><a class="dropdown-item" href="#"><img src="../assets/euskadi.jpeg" width="20" />Euskara</a></li>
                    </ul>


                  
                    <!-- <ul>
                   <li class="nav-item">
                    <a class="nav-link" href="#">Idioma</a>
                  </li>
                   </ul> -->

                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-success" type="submit">Search</button> -->
              </form>
            </div>
          </div>
        </div>
      </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.navbar-toggler {
    display: none;
}

.logo{
  width: 10vw;
  min-width: 100px;
}

@media only screen and (max-width: 600px) {
  .logo{
  min-width: 100px;
}

.navbar-toggler {
        display: block;
    }
}






// .navbar-toggler {
//     top: 300px;
// }

</style>


    