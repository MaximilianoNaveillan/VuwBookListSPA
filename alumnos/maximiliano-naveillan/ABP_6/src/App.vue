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
import ListaLibros from './views/ListaLibros.vue';
// Importamos componentes hijos

// Lista reactiva de libros
// ref([]) crea un array reactivo
const libros = ref([
  {
    titulo: 'Introducción a JavaScript',
    autor: 'Carlos Ramírez',
    descripcion: 'Guía práctica para aprender los fundamentos de JavaScript desde cero.',
    disponible: true,
    formato: ['Físico', 'Digital'],
    categoria: 'Tecnología',
    editorial: 'Penguin',
    stock: 12,
  },
  {
    titulo: 'Arquitectura de Software Moderna',
    autor: 'Laura Méndez',
    descripcion: 'Explora patrones y buenas prácticas para diseñar aplicaciones escalables.',
    disponible: true,
    formato: ['Digital'],
    categoria: 'Tecnología',
    editorial: "O'Reilly",
    stock: 8,
  },
  {
    titulo: 'Bases de Datos para Desarrolladores',
    autor: 'Miguel Torres',
    descripcion: 'Conceptos esenciales de modelado, SQL y optimización de bases de datos.',
    disponible: false,
    formato: ['Físico'],
    categoria: 'Tecnología',
    editorial: 'McGraw-Hill',
    stock: 0,
  },
  {
    titulo: 'React y el Ecosistema Frontend',
    autor: 'Andrea Salinas',
    descripcion: 'Aprende a construir interfaces modernas usando React y herramientas actuales.',
    disponible: true,
    formato: ['Físico', 'Digital'],
    categoria: 'Tecnología',
    editorial: 'Penguin',
    stock: 15,
  },
]); // array vacío inicialmente

const tab = ref('ListaLibros');

// función que se ejecutará cuando el formulario envíe un nuevo libro
function agregarLibro(libro) {
  //Agregar un ID único
  const nuevo = {
    ...libro,
    id: Date.now(),
  };
  // Agregar el nuevo libro al array de libros
  libros.value.push(nuevo);
  tab.value = 'ListaLibros';
}

function cambiarTab(nuevoTab) {
  tab.value = nuevoTab;
}
</script>

<template>
  <nav>
    <h1>📚 BookList SPA</h1>
    <ul>
      <li><a href="#" @click="cambiarTab('FormLibro')">Agregar libro</a></li>
      <li><a href="#" @click="cambiarTab('ListaLibros')">Mis libros</a></li>
    </ul>
    {{ tab }}
  </nav>
  <div class="container">
    <!--
    El formulario emitirá un evento llamado "agregar"
    cuando el usuario envíe un libro
    -->
    <!--    
                    ⬆️ (:EMIT -> APP)
    -->
    <!-- EMIT       FUMCTION  -->
    <main v-if="tab === 'FormLibro'">
      <FormLibro @agregar="agregarLibro" />
    </main>

    <!--
    Pasamos los libros al componente ListaLibros
    mediante props
    -->
    <!--            🔽  (:prop (DEFINEPROPS)-> )  -->
    <main v-if="tab === 'ListaLibros'">
      <ListaLibros :libros="libros" />
    </main>
  </div>
</template>

<style scoped></style>
