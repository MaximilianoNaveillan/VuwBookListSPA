<script setup>
import { inject } from "vue";
// fprop global enviada desde APP.vue
const libros = inject("libros");
</script>

<template>
  <div>
    <h2>Lista de Libros</h2>

    <!-- mensaje si no hay libros -->

    <p v-if="libros.length === 0">No hay libros aún</p>

    <!-- renderizado de lista -->

    <ul>
      <li v-for="libro in libros" :key="libro.id">
        <strong>{{ libro.titulo }}</strong>

        - {{ libro.autor }}

        ({{ libro.categoria }})
      </li>
    </ul>
  </div>
</template>