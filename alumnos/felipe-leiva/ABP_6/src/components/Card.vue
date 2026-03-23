<script setup></script>

<template>
  <div class="card">
    <header class="card-header">
      <slot name="c-header"></slot>
    </header>

    <div class="card-body">
      <slot name="c-body"></slot>
    </div>

    <footer class="card-footer">
      <slot name="c-footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  background: var(--gray-800); /* Fondo de la tarjeta dark */
  display: flex;
  flex-direction: column;
}

.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 16px;
}

.card-footer {
  padding: 12px 16px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
</style>
