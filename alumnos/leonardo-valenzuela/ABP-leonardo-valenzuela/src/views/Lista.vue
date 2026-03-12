<script setup>
import { useLibroStore } from "@/stores/libroStore";


const libroStore = useLibroStore();
</script>

<template>
  <h2>
    <p>Lista</p>
    <p>{{ libroStore.libros }}</p>

  </h2>
</template>

<style scoped>
</style>
