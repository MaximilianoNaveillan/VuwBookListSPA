<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  msn: String,
});

let estado = ref(false);
let canciones = [
  { id: 1, nombre: 'Bohemian Rhapsody', artista: 'Queen' },
  { id: 2, nombre: 'Stairway to Heaven', artista: 'Led Zeppelin' },
  { id: 3, nombre: 'Hotel California', artista: 'Eagles' },
];
</script>

<template>
  <div :class="estado ? 'card selected' : 'card'">
    <h2>{{ msn }}</h2>
    <p>esto es un componente dentro de App.vue</p>
    <!-- Directiva de eventos v-on @click -->
    <button @click="estado = !estado">Cambiar estado</button>
    <!-- Directias estructurales -->
    <!-- directivas v-if, v-else , v-show , v-for son implementadas como atributos en HTML-->
    <!-- atributos en HTML ( <etiqueta-apertura src alt style ...> </cierre etiqueta>) -->
    <!-- directivas "Guia_Vue_DataBinding" -->
    <div v-if="estado">El estado es true</div>
    <div v-else>El estado es false</div>
    <ul>
      <li v-for="cancion in canciones" :key="cancion.id">{{ cancion.nombre }}</li>
    </ul>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #111;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
}
.selected {
  background-color: #007fff;
  color: #fff;
}
</style>
