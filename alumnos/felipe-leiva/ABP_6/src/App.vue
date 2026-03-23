<script setup>
import { NavTab } from './components';
import { useLibrosStore } from './stores/librosStores';
import { useRoute } from 'vue-router';

const route = useRoute();
const store = useLibrosStore();
</script>

<template>
  <NavTab>
    <template #tituloapp> 📖 BookLis SPA </template>
  </NavTab>
  <main class="container">
    <router-view />
  </main>
</template>

<style scoped></style>
