<script setup>
// Aquí se importa la referencia que usaremos más tarde
  import { ref } from 'vue';

// Referencia le da el valor a un array, sirve para almacenar los datos del input (usuarios)
  let usuarios = ref([]);

// Referencia a un string (valor de texto) para capturar el valor y almacenarlo en la referencia usuarios
  let nuevoUsuario = ref("")

// Función que entrega el valor del string nuevoUsuario a usuarios a través de un push
// Hay que hacer .value para entregar el valor a usuarios
  function crearUsuario (){
    // console.log(nuevoUsuario)
    usuarios.value.push(nuevoUsuario.value)
    nuevoUsuario.value = ""
  }
</script>

<template>
<!-- Se crea un elemento para captar el valor ingresado. Se guarda en la referencia de nuevoUsuario con v-model -->
 <input type="text" v-model="nuevoUsuario">
<!-- Se crea botón que capta el click y ejecuta lo que está dentro de la función crearUsuario -->
 <button @click="crearUsuario">Crear Usuario</button>
<!-- En el h1, creamos una condición de que si no hay valores ingresados en la referencia usuarios se imprime -->
<h1 v-if="usuarios.length === 0">
  No hay usuarios
</h1>
<!-- Si hay usuario ingresado, se imprime el contenido -->
<div v-else>

  <!-- Se utiliza v-for para generar un listado de todos los usuarios ingresados -->
 <h2 v-for="(user,index) in usuarios" :key="index">
  {{ user }}
 </h2>
</div>
</template>

<style>

</style>
