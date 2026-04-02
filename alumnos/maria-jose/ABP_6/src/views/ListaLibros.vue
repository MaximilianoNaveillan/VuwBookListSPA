<script setup>
import { inject, provide } from "vue";
// fprop global enviada desde APP.vue
const libros = inject("libros");
const eliminarLibro = inject("eliminarLibro")
</script>

<template>
  <div>
    <h2>Lista de Libros</h2>

    <!-- mensaje si no hay libros -->

    <p v-if="libros.length === 0">No hay libros aún</p>

    <!-- renderizado de lista -->

    <ul>
      <li v-for="libro in libros" :key="libro.id">
        <router-link :to="`detalle-libro/${libro.id}`" class="link">
        <strong>{{ libro.titulo }}</strong>

        - {{ libro.autor }}

        ({{ libro.categoria }})

        <button @click="eliminarLibro(libro.id)">Eliminar Libro</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>