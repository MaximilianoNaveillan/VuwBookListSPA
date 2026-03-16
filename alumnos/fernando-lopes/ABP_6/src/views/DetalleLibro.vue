<script setup>
import { inject, computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const libros = inject('libros');
const libro = computed(() => {
  return libros.value.find((l) => l.id == route.params.id);
});
</script>

<template>
  <h1>libro</h1>
  {{ libro }}
</template>
