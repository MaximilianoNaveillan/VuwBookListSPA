<script setup>
// Este componente no necesita lógica, solo un slot para envolver contenido
</script>

<template>
  <div class="app-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 1200px; /* ancho máximo */
  margin: 0 auto; /* centra horizontalmente */
  padding: 24px; /* espacio interno */
  background-color: var(--gray-800); /* fondo dark mode */
  color: var(--gray-100); /* texto claro */
  border-radius: 8px; /* esquinas redondeadas */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
}
</style>
