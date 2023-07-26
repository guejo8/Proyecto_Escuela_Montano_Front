<template>
    <div class="container">
      <form class="form" @submit.prevent="submitForm">
        <h2>Formulario</h2>
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" v-model="nombre" required />
        </div>
        <div class="form-group">
          <label for="apellido">Apellido</label>
          <input type="text" id="apellido" v-model="apellido" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Enviar</button>
        <button type="button" @click="intranet">Intranet</button>
      </form>
    </div>
  </template>
  
  
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const nombre = ref('');
const apellido = ref('');
const email = ref('');
const password = ref('');

const router = useRouter();

const submitForm = async () => {
  try {
    // Enviar datos a la ruta de la base de datos utilizando Axios
    const response = await axios.post('http://127.0.0.1:5000/add_user', {
      nombre: nombre.value,
      apellido: apellido.value,
      email: email.value,
      password: password.value
    }
    );

    console.log(response.data); // Respuesta del servidor
  } catch (error) {
  console.log(error);
  }
};

const intranet = () => {
  // Aquí se puede realizar cualquier lógica adicional antes de redirigir a la vista "intranet"
  router.push('/intranet');
};
</script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .form {
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
  }
  
  .form h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type='text'],
  input[type='email'],
  input[type='password'] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button[type='submit'],
  button[type='button'] {
    display: block;
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button[type='submit']:hover,
  button[type='button']:hover {
    background-color: #45a049;
  }
  </style>
  