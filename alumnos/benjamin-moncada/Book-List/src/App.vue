<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div id="app-container">
    <NavBar />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f7f6;
  color: #333;
}
.main-content {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}
</style>