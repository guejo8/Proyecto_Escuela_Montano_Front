<template>
    <div class="background-container">
      <div class="line-overlay"></div>
      <h2 class="title1">{{ $t("home.titulo") }}</h2>
    </div>
</template>

<script>
</script>

<style>
.background-container {
  background-image: url('../assets/img/Img_Home/foto_yerson.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10rem;
  min-height: 70vh;
  display: grid;
  justify-content: center;
  align-items: center;
}

.line-overlay {
  position: absolute;
  top: 25rem;
  left: 4rem;
  width: 90%;
  height: 0.6rem;
  background-color: #0D904F;
}

.title1 {
  color: #FFFFFF;
  text-align: center;
  padding-top: 12rem;
  font-size: 4rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.icons-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
  position: relative;
}

.icon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.phone-icon,.carta-icon{
    border-radius: 50%;
}

.icons-container img {
  width: 4rem;
  height: 4rem;
}

.icon-data {
  font-size: 1rem;
  margin-top: 0.5rem;
  color: rgb(255, 255, 255);
}

/* Media Queries */

@media (max-width: 1024px) {
  .background-container {
    background-image: url('../assets/img/Img_Home/foto_yerson.png');
    background-size: cover;
    padding: 5rem;
    min-height: 50vh;
    display: flex;
  }
  
  .line-overlay {
    top: 10rem;
    left: 1.5rem;
  }
  
  .icons-container {
    flex-direction: column;
    align-items: center;
  }
  
  .icons-container img {
    width: 2rem;
    height: 2rem;
  }
}
</style>
