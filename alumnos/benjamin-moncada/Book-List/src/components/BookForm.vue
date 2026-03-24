<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-book'])

// Modelo reactivo conectado al formulario
const newBook = ref({
  title: '',
  author: '',
  category: ''
})

const submitForm = () => {
  if (!newBook.value.title || !newBook.value.author || !newBook.value.category) return
  
  // Emitimos el evento con una copia del libro
  emit('add-book', { ...newBook.value, id: Date.now().toString() })
  
  // Limpiamos el formulario
  newBook.value = { title: '', author: '', category: '' }
}
</script>

<template>
  <form @submit.prevent="submitForm" class="book-form">
    <h3>Añadir Nuevo Libro</h3>
    <div class="form-group">
      <label>Título:</label>
      <input v-model="newBook.title" type="text" placeholder="Ej. Fundamentos de Física" required />
    </div>
    <div class="form-group">
      <label>Autor:</label>
      <input v-model="newBook.author" type="text" placeholder="Nombre del autor" required />
    </div>
    <div class="form-group">
      <label>Categoría:</label>
      <select v-model="newBook.category" required>
        <option value="" disabled>Selecciona una categoría</option>
        <option value="Ciencia">Ciencia</option>
        <option value="Programación">Programación</option>
        <option value="Filosofía">Filosofía</option>
        <option value="Ficción">Ficción</option>
      </select>
    </div>
    <button type="submit" class="btn-submit">Registrar Libro</button>
  </form>
</template>

<style scoped>
.book-form { background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 2rem; }
.form-group { margin-bottom: 1rem; }
.form-group label { display: block; margin-bottom: 0.5rem; font-weight: bold; font-size: 0.9rem; }
.form-group input, .form-group select { width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
.btn-submit { background-color: #42b983; color: white; padding: 0.5rem 1rem; border: none; border-radius: 4px; cursor: pointer; width: 100%; font-weight: bold; }
.btn-submit:hover { background-color: #3aa876; }
</style>