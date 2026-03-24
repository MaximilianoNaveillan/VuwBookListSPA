<script setup>
import { ref } from 'vue'
import BookForm from '../components/BookForm.vue'
import BookCard from '../components/BookCard.vue'

// Estado inicial con algunos libros predefinidos
const books = ref([
  { id: '1', title: 'Introducción a la Mecánica Cuántica', author: 'David J. Griffiths', category: 'Ciencia' },
  { id: '2', title: 'Estructuras de Datos en C++ y Python', author: 'Michael Main', category: 'Programación' },
  { id: '3', title: 'El Pensamiento de Sócrates en la Ciencia', author: 'Gregory Vlastos', category: 'Filosofía' }
])

const handleAddBook = (newBook) => {
  books.value.push(newBook)
}

const handleDeleteBook = (idToRemove) => {
  books.value = books.value.filter(book => book.id !== idToRemove)
}
</script>

<template>
  <div>
    <h2>Gestión de Catálogo</h2>
    
    <BookForm @add-book="handleAddBook" />

    <hr class="divider" />

    <h3>Lista de Libros</h3>
    <div v-if="books.length === 0" class="empty-state">
      <p>El catálogo está vacío. Utiliza el formulario para añadir un libro.</p>
    </div>

    <div v-else class="book-grid">
      <BookCard 
        v-for="book in books" 
        :key="book.id" 
        :book="book" 
        @delete="handleDeleteBook" 
      />
    </div>
  </div>
</template>

<style scoped>
.divider { border: 0; height: 1px; background: #ddd; margin: 2rem 0; }
.book-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem; }
.empty-state { text-align: center; padding: 2rem; background: white; border-radius: 8px; color: #666; }
</style>