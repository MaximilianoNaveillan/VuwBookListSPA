<script setup>
  import { ref } from 'vue';

  let usuarios = ref([]);

  let nuevoUsuario = ref("")

  function crearUsuario (){
    usuarios.value.push(nuevoUsuario.value)
    nuevoUsuario.value = ""
  }
</script>

<template>
 <input type="text" v-model="nuevoUsuario"> 
 <button @click="crearUsuario">Crear Usuario</button>
<h1 v-if="usuarios.length === 0">
  No hay usuarios
</h1>
<div v-else>
 <h2 v-for="(user,index) in usuarios" :key="index">
  {{ user }}
 </h2>
</div>
</template>

<style>

</style>
