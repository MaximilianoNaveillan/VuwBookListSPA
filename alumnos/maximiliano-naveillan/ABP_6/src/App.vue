<script setup>
import NavTab from './components/NavTab.vue';
</script>

<template>
  <NavTab>
    <template #tituloapp> 📖 BookLis SPA </template>
  </NavTab>
  <main class="container">
    <div class="content">
      <router-view />
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100dvh - 55px);
}
.content {
  max-width: 600px;
  margin: 16px;
}
</style>
