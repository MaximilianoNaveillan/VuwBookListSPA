<!-- Aquí vive el estado principal de los libros -->
<!-- Es el Single Source of Truth de la aplicación -->
<!-- 
        App.vue
           │
           │ prop:estado libros
           ▼
     ListaLibros.vue

        App.vue
           ↑
           │
           │ emit:function          
     FormLibro.vue
 -->
<script setup>
// ref se usa para datos reactivos simples
import { ref } from 'vue';
import FormLibro from './components/FormLibro.vue';
// Importamos componentes hijos

// Lista reactiva de libros
// ref([]) crea un array reactivo
const libros = ref([]); // array vacío inicialmente
console.log(libros); // [{},{},...] --> ref() --> {value: [{},{},...]}

// función que se ejecutará cuando el formulario envíe un nuevo libro
function agregarLibro(libro) {
  //Agregar un ID único
  const nuevo = {
    ...libro,
    id: Date.now(),
  };
  // Agregar el nuevo libro al array de libros
  libros.value.push(nuevo);
}
</script>

<template>
  <div class="container">
    <h1>BookList SPA</h1>
    <FormLibro />
  </div>
</template>

<style scoped></style>
