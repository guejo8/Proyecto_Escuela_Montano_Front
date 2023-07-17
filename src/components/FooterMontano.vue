<template>
  <!-- Site footer -->
  <footer class="site-footer bg-">
    <div class="container  ">
      <div class="row">
        <div class="col-sm-12 col-md-4 p-lg-3 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.065870029503!2d-2.9212682602773956!3d43.270995823811774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4fc1a40c4bcb%3A0x605fd1698ff98ecc!2sMonta%C3%B1o%20Zentroa!5e0!3m2!1ses!2ses!4v1689152373737!5m2!1ses!2ses"
            width="250"
            height="150"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <h6></h6>
          <!-- <p class="text-justify"><i>BiciEnergy</i> busca hacer uso de bicicletas para generar energía y
                    utilizarla en la ciudad es una iniciativa interesante que combina la actividad física con la
                    generación de electricidad. Este concepto se conoce comúnmente como "bicicletas generadoras". -->
        </div>

        <div class="col-xs-6 col-md-3  d-flex  p-lg-3"> 
            <h3>Como llegar:</h3>
            
            <img src="" alt="Bilbobus: A1">
            <img src="" alt="Metro linea 3:">
            <i class="fa-solid fa-bus-simple"></i>
        </div>

        <div class="col-xs-3 col-md-3 d-flex p-lg-3 ">
          <!-- <h6>Secciones</h6> -->
          <!-- <ul class="footer-links"> -->
              <img class="recycling" src="../assets/recycling.png" alt="" />
            <div>
              <p style="font-size: 18px; font-weight: bold;font-family: 'Open' sans-serif;"> Nuestros vasos,platos y cubiertos son biodegradables,compostables:hecchos a base de fecula de maiz </p>
             <p style="font-size: 12px; font-weight: bold;font-family: 'Oswald', sans-serif; " >Empresa comprometida con el medio ambiente:Peñascal Scoop.</p> 
            </div>
        </div>
      </div>
      <hr />
    </div>
                  <!-- ------------copyright centrado------------- -->
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-2 col-xs-6  d-flex justify-content-end">
          <img class="logot" src="../assets/img/logtras.png"> 
            <p class="copyright-text">
            Copyright &copy; 2023 All Rights Reserved by
             </p>
        </div>

       
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.mapouter {
  position: relative;
  text-align: right;
  width: 100%;
  height: 99px;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 100%;
  height: 99px;
  -radius: 40px;
}

.gmap_iframe {
  height: 99px !important;
}
.recycling {
  width: 40%;
  margin-bottom: 5em;
  display: block;
  margin-left: 40%;
  padding-left: 10%;
}
.site-footer{
    background-color: #008948;
}
.logot{
    background-color: #008948;
}
.copyright-text{
    padding-top: 1.5em;
}
</style>