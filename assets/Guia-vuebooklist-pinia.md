# 📚 Guía Paso a Paso — Migrar VueBookList a Pinia

En esta guía aprenderemos a migrar el manejo de estado de **provide/inject** hacia **Pinia**, el gestor de estado oficial de Vue.

---

# 🎯 Objetivo del ejercicio

Migrar el estado de la aplicación **VueBookList** para que:

- La lista de libros viva en un **store de Pinia**
- La función **agregarLibro()** sea una **acción del store**
- Los componentes accedan al estado global usando el store

---

# 🧠 ¿Por qué usar Pinia?

Pinia permite:

- Centralizar el estado de la aplicación
- Compartir datos entre múltiples componentes
- Organizar mejor la lógica
- Escalar aplicaciones SPA

---

# 1️⃣ Instalar Pinia

Abrir la terminal en el proyecto y ejecutar:

```bash
npm install pinia
```

---

# 2️⃣ Registrar Pinia en la aplicación

Abrir el archivo:

```
main.js
```

Modificar el archivo de la siguiente forma:

```javascript
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount('#app');
```

---

# 3️⃣ Crear la carpeta de stores

Dentro de `src` crear una nueva carpeta:

```
src/stores
```

Luego crear el archivo:

```
src/stores/librosStore.js
```

---

# 4️⃣ Crear el store de libros

Abrir el archivo:

```
src/stores/librosStore.js
```

Agregar el siguiente código:

```javascript
import { defineStore } from 'pinia';

export const useLibrosStore = defineStore('libros', {
  state: () => ({
    libros: [
      {
        id: 0,
        titulo: 'Introducción a JavaScript',
        autor: 'Carlos Ramírez',
        descripcion: 'Guía práctica para aprender los fundamentos de JavaScript.',
        disponible: true,
        formato: ['Físico', 'Digital'],
        categoria: 'Tecnología',
        editorial: 'Penguin',
        stock: 12,
      },
    ],
  }),

  actions: {
    agregarLibro(libro) {
      const nuevo = {
        ...libro,
        id: Date.now(),
      };

      this.libros.push(nuevo);
    },
  },
});
```

---

# 5️⃣ Usar el store en ListaLibros.vue

Abrir:

```
ListaLibros.vue
```

Importar el store:

```javascript
<script setup>
  import {useLibrosStore} from "../stores/librosStore"; const store = useLibrosStore();
</script>
```

Modificar el template:

```html
<template>
  <div>
    <h2>Lista de Libros</h2>

    <p v-if="store.libros.length === 0">No hay libros aún</p>

    <ul>
      <li v-for="libro in store.libros" :key="libro.id">
        <strong>{{ libro.titulo }}</strong>

        - {{ libro.autor }} ({{ libro.categoria }})
      </li>
    </ul>
  </div>
</template>
```

---

# 6️⃣ Usar el store en FormLibro.vue

Abrir:

```
FormLibro.vue
```

Importar el store:

```javascript
<script setup>

import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useLibrosStore } from "../stores/librosStore";

const router = useRouter();
const store = useLibrosStore();

const nuevoLibro = reactive({
  titulo: "",
  autor: "",
  descripcion: "",
  disponible: false,
  formato: [],
  categoria: "",
  editorial: "",
  stock: 0
});

function guardarLibro() {

  store.agregarLibro({ ...nuevoLibro });

  router.push("/");

}

</script>
```

---

# 7️⃣ Eliminar provide / inject

Ahora que usamos Pinia, podemos eliminar desde **App.vue**:

```javascript
provide('libros', libros);
provide('agregarLibro', agregarLibro);
```

El estado ahora se administra completamente desde el **store de Pinia**.

---

# 📦 Arquitectura final del proyecto

La estructura del proyecto quedará así:

```
src
 ├ components
 ├ views
 ├ stores
 │   └ librosStore.js
 ├ router
 ├ App.vue
 └ main.js
```

---

# 🏆 Desafío para estudiantes

Agregar nuevas **acciones al store**:

### 1️⃣ eliminarLibro()

Eliminar un libro por `id`.

---

### 2️⃣ editarLibro()

Actualizar los datos de un libro existente.

---

### 3️⃣ buscarLibros()

Filtrar libros por:

- título
- autor
- categoría

---

💡 **Desafío avanzado**

Crear un **campo de búsqueda reactivo** que filtre la lista de libros en tiempo real usando **Pinia**.
