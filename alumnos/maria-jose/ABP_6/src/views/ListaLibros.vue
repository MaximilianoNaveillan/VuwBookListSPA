<script setup>
import { defineProps } from 'vue';
defineProps({
  libros: Array
})
</script>

<template>
  <div>
    <h2>Lista de Libros</h2>

    <p v-if="libros.length === 0">
      No hay libros aún
    </p>

    <ul>
      <li v-for="libro in libros" :key="libro.id">
        <strong>{{ libro.titulo }}</strong>
        - {{ libro.autor }}
        ({{ libro.categoria }})
      </li>
    </ul>
  </div>
</template>