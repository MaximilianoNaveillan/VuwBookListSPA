<script setup>
defineProps({
  book: { type: Object, required: true }
})
defineEmits(['delete'])
</script>

<template>
  <div class="book-card">
    <div class="info">
      <h4>{{ book.title }}</h4>
      <p class="author">Autor: {{ book.author }}</p>
      <span class="badge">{{ book.category }}</span>
    </div>
    <div class="actions">
      <router-link :to="`/libros/${book.id}`" class="btn-detail">Ver Detalles</router-link>
      <button @click="$emit('delete', book.id)" class="btn-delete">Eliminar</button>
    </div>
  </div>
</template>

<style scoped>
.book-card { background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); display: flex; flex-direction: column; justify-content: space-between; }
h4 { margin: 0 0 0.5rem 0; color: #2c3e50; }
.author { color: #666; font-size: 0.9rem; margin: 0 0 0.5rem 0; }
.badge { display: inline-block; background: #e2e8f0; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem; margin-bottom: 1rem; }
.actions { display: flex; gap: 0.5rem; }
.btn-detail { flex: 1; text-align: center; background: #3498db; color: white; padding: 0.4rem; text-decoration: none; border-radius: 4px; font-size: 0.9rem; }
.btn-delete { flex: 1; background: #e74c3c; color: white; border: none; padding: 0.4rem; border-radius: 4px; cursor: pointer; font-size: 0.9rem; }
</style>