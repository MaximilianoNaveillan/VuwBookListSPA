<!-- Aquí vive el estado principal de los libros --><!-- 
        App.vue
           │
           │ prop:estado
           libros
           ▼
     ListaLibros.vue


             App.vue
           ⬆️
           │ emit:function
           libros
           ▼
     FormLibro.vue
 -->
<!-- Es el single source of truth de la aplicación -->


<script setup>
 // Ref se usa para datos reactivos simples
import { ref } from 'vue';
import FormLibro from './components/FormLibro.vue';
//Importamos componentes hijos
import ListaLibros from './views/ListaLibros.vue'

//Lista reactiva de libros
// ref es una función provista por vue
// ref([]) //Crea un array reactivo
const libros = ref([]); // Array vacío inicialmente

// Función que se ejecutará cuando el formulario agregue un nuevo libro
function agregarLibro(libro){
// Agregar un ID único
const nuevo = {
  ...libro,
  id: Date.now(),

};

//Agregar el nuevo libro al array de libros
libros.value.push(nuevo);
}

// console.log(libros); // [{}],[{}],....] ---> ref() ----> {value: [{}],[{},....]}

</script>

<template>
  <div class="container">
  <h1>Booklist SPA</h1>
  <FormLibro @agregar="agregarLibro" />
</div>
</template>

<style scoped></style>
