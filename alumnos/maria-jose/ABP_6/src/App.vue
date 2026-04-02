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
import { ref, provide } from 'vue';
/* import FormLibro from './views/FormLibro.vue';
import ListaLibros from './views/ListaLibros.vue'; */
import NavTab from './components/NavTab.vue';
// Importamos componentes hijos

// Lista reactiva de libros
// ref([]) crea un array reactivo
const libros = ref([
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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

function eliminarLibro(id) {
  libros.value = libros.value.filter(libro => libro.id !== id)
}


// hacemos disponible el estado global
provide("libros",libros)
provide("agregarLibro",agregarLibro)
provide("eliminarLibro",eliminarLibro)
</script>

<template>
  <div class="app-shell">
    <NavTab>
      <template #tituloapp>
        <span class="app-title">BookList SPA</span>
      </template>
    </NavTab>
    <main class="container">
      <router-view />
    </main>
    <footer class="app-footer">
      <span class="app-footer__brand">Editorial Nova</span>
      <p class="app-footer__copy">© 2024 Editorial Nova. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Work+Sans:wght@300;400;500;600&family=Public+Sans:wght@400;600&family=Noto+Sans+JP:wght@300;500&display=swap');

.app-shell {
  --primary: #006b5f;
  --primary-container: #00a896;
  --secondary: #633dd3;
  --secondary-container: #7e5bef;
  --surface: #f5fbf8;
  --surface-container-low: #eff5f2;
  --surface-container-lowest: #ffffff;
  --on-surface: #171d1b;
  --on-surface-variant: #3c4946;
  --outline-variant: #bbcac5;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--surface);
  color: var(--on-surface);
  font-family: 'Work Sans', sans-serif;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  flex: 1;
}

.app-title {
  font-family: 'Newsreader', serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: inherit;
}

.app-footer {
  background-color: var(--surface-container-low);
  padding: 2rem 3rem;
  text-align: center;
  margin-top: auto;
}

.app-footer__brand {
  font-family: 'Newsreader', serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--primary);
}

.app-footer__copy {
  font-family: 'Work Sans', sans-serif;
  font-size: 0.8rem;
  color: var(--on-surface-variant);
  letter-spacing: 0.03em;
  margin-top: 0.5rem;
}
</style>