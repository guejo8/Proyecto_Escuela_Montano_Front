<template>

<nav class="navbar navbar ">
  <div class="container-fluid">
          
          <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt="logo" class="logo" > </a>


           <nav class="navbar navbar-expand-lg  ">
            <div class="container-fluid" > 
              
              <div class="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
                <ul class="navbar-nav  mb-2 mb-lg-0">
                       
                  
                  <!-- ----------desplegable Escuela Montaño-------- -->
                  <li class="nav-item dropdown " >
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                      {{ $t("navbar.escuela") }}
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">{{ $t("navbar.somos") }}</a></li>
                      <li><a class="dropdown-item" href="#">{{ $t("navbar.contacto") }}</a></li>
                     
                    </ul>
                  </li>
                  
                  <li class="nav-item">
                    <a class="nav-link" href="#">{{ $t("navbar.menu_dia") }}</a>
                  </li>
                  
                  <li class="nav-item">
                    <a class="nav-link" href="#">{{ $t("navbar.menu_estrella") }}</a>
                  </li>
                               
                  <!-- ----------desplegable Mas--------- -->
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {{ $t("navbar.mas") }}
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">{{ $t("navbar.carniceria") }}</a></li>
                      <li><a class="dropdown-item" href="#">{{ $t("navbar.pasteleria") }}</a></li>
                      <li><a class="dropdown-item" href="#">{{ $t("navbar.raciones") }}</a></li>
                      <li><a class="dropdown-item" href="#">{{ $t("navbar.pinchos") }}</a></li>
                    </ul>
                  </li>

                              <!-- ----------desplegable idioma--------- -->
                  <li class="nav-item dropdown">

                      <i class="fa-solid fa-globe idioma-icono"></i><select v-model="$i18n.locale">
                        <option v-for=" locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
                      </select>

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
                    {{ $t("navbar.escuela") }}
                  </a>
                   <ul class="dropdown-menu dropdown-menu">
                     <li><a class="dropdown-item" href="#">{{ $t("navbar.somos") }}</a></li>
                    <li><a class="dropdown-item" href="#">{{ $t("navbar.contacto") }}</a></li>
                    </ul>


                <li class="nav-item">
                  <a class="nav-link" href="#">{{ $t("navbar.menu_dia") }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">{{ $t("navbar.menu_estrella") }}</a>
                  </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ $t("navbar.mas") }}
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#">{{ $t("navbar.carniceria") }}</a></li>
                        <li><a class="dropdown-item" href="#">{{ $t("navbar.pasteleria") }}</a></li>
                        <li><a class="dropdown-item" href="#">{{ $t("navbar.raciones") }}</a></li>
                        <li><a class="dropdown-item" href="#">{{ $t("navbar.pinchos") }}</a></li>
              
                   </ul>

                </li>
                    <li class="nav-item dropdown">

                        <i class="fa-solid fa-globe idioma-icono"></i> <select v-model="$i18n.locale">
                          <option v-for=" locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
                        </select>

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
      <br>
    <!-- <div>


    <hr>
    <br>
    <i class="fa-solid fa-globe idioma-icono"></i> Idioma: 
    <select v-model="$i18n.locale">
      <option v-for=" locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>


  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item" href="#"><img src="../assets/España.png" width="20"/>Español</a></li>
    <li><a class="dropdown-item" href="#"><img src="../assets/euskadi.jpeg" width="20"/> Euskara</a></li>
  </ul>

    <ul class="dropdown-menu dropdown-menu-dark">
      <select v-model="$i18n.locale">
        <option v-for=" locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
      </select>
    </ul>

  <img src="../assets/España.png" class="bandera-idioma"/>
  <img src="../assets/euskadi.jpeg" class="bandera-idioma"/>
    </div> -->
  
  <p>{{ $t("home.content") }}</p>
  <p>{{ $t("home.products", { count: 0 }) }}</p>
  <p>{{ $t("home.comments", 5) }}</p>
  <p>{{ $t("text.info") }}</p>
  
</template>

<script setup>


</script> 

<style lang="scss" scoped>
.navbar-toggler {
    display: none;
}

.idioma-icono{
  font-size: 1.1rem;
}

.logo{
  width: 10vw;
  min-width: 100px;
}

.bandera-idioma{
  width: 1.5rem;
  margin-right: .2rem;
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


    