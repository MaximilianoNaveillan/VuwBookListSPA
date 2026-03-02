<script setup>
import { ref } from 'vue';
import Card from './components/card.vue';
/* Eventos (JS).... */
let msn = ref('Hola Vue.js 👌 ...');
const cambiarMensaje = () => {
  msn.value = 'Mensaje cambiado...';
};
</script>

<template>
  <!-- HTML Estructuras declarativas dentro de bloques <template> -->
  <h1>{{ msn }}</h1>
  <p>Esto es una plantilla Vue.js</p>
  <Card />
  <p>
    {{ 1 + 3 }}
    <!-- Interpolación de datos -->
  </p>
  <button @click="cambiarMensaje()">Click me</button>
</template>

<style scoped>
/*CSS ...*/
</style>