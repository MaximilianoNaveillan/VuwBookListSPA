<script setup>
import { ref } from 'vue';
import Card from './components/Card.vue';
/* Eventos (JS).... */
let msn = ref('Hola Vue.js 👌 ...');
const cambiarMensaje = () => {
  msn.value = 'Mensaje cambiado...';
};

let nombre = 'Maximiliano';
let apellido = 'Naveillan';

function saludar() {
  console.log('Hola');
}
</script>

<template>
  <!-- HTML Estructuras declarativas dentro de bloques <template> -->
  <Card :msn="msn" />
  <div class="card">
    <p>
      <!-- Interpolación de datos -->
      {{ 1 + 3 }}
      {{ nombre + ' ' + apellido }}
      {{ console.log('Hola mundo') }}
      {{ saludar() }}
    </p>
    <button @click="cambiarMensaje()">Click me</button>
  </div>
</template>

<style scoped>
/*CSS ...*/
</style>
