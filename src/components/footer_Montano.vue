<template>
    <footer class="text-center mt-5 " style="background-color: #15440a">
        <!-- Grid container -->
        <div class="col-md-3 col-lg-3 col-xl-4 mt-1">
            
                <img src="../assets/logo.png" alt="logo" width="200" class="mx-auto d-block ms-2 mb-5 mt-3" />
            
            <!-- <div class="col-md-4 col-lg-3 col-xl-3 mx-auto"> -->
            <!-- <div class="mx-auto d-block mt-3" class="mapouter"> -->
            <div class="gmap_canvas">
                <iframe class="gmap_iframe" width="100%" fram="0" scrolling="no" marginheight="0" marginwidth="0"
                    src="https://maps.google.com/maps?width=247&amp;height=99&amp;hl=en&amp;q=bilbao&amp;t=&amp;z=8&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a
                    href="https://pdflist.com/" alt="pdflist.com">Pdflist.com</a>
            </div>
        </div>
        <p class="mb-1">
            <i class="fas fa-home mt-1"></i> &nbsp; Bilbo, Bb 48002, Vz
        </p>
        
        <p class="mb-1">
            <i class="fas fa-phone"></i> &nbsp; + 34 234 567 88 00
        </p>
        <!-- </div> -->
        <!-- Grid column -->
        <!-- </div> -->
        <!--Grid row-->
        <!-- </section> -->
        <!-- Section: Links -->

        <hr class="my-1" />

        <!-- Section: Copyright -->
        <section class="p-2 pt-0">
            <div class="row d-flex align-items-center">
                <!-- Grid column -->
                <div class="col-md-7 col-lg-8 text-center text-md-start">
                    <!-- Copyright -->
                    <div>
                        <p class="text-white">© 2023 Copyright</p>
                    </div>
                    <!-- Copyright -->
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                    <!-- Facebook -->
                    
                    <!-- Twitter -->
                    
                    <!-- Google -->
                    
                
                </div>
                <!-- Grid column -->
            </div>
        </section>
        <!-- Section: Copyright -->
        
        <!-- Grid container -->
    </footer>
</template>

<script setup>

</script>

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
</style>