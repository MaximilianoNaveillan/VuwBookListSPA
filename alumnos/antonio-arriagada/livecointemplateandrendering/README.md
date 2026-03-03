# livecointemplateandrendering

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

---

# 📦 ¿Qué es Pinia?

Pinia es la librería oficial de gestión de estado para aplicaciones
hechas con Vue 3.

En aplicaciones pequeñas podemos manejar datos dentro de cada
componente. Pero cuando la aplicación crece y varios componentes
necesitan compartir datos, aparece un problema:

❓ ¿Cómo compartimos estado sin pasar props manualmente por muchos
niveles?

Ahí aparece Pinia.

---

# 🎯 ¿Para qué sirve Pinia?

Pinia permite:

- Centralizar el estado (una sola fuente de verdad)
- Evitar el "prop drilling"
- Mantener un flujo de datos claro y simple
- Separar lógica de negocio de la vista
- Escalar aplicaciones grandes
- Es más simple y moderna que Vuex

---

# 🧠 Conceptos Clave de Pinia

A diferencia de Vuex, Pinia es más simple y no usa mutations.

Se basa en 3 pilares principales:

## 1️⃣ State

Es el estado global de la aplicación.

```js
state: () => ({
  tareas: [],
});
```

Es la fuente única de verdad.

---

## 2️⃣ Actions

Reemplazan a mutations y actions de Vuex. Aquí se modifica directamente
el estado.

```js
actions: {
  agregarTarea(texto) {
    this.tareas.push({
      id: Date.now(),
      texto,
      completada: false
    });
  }
}
```

Pueden ser:

- Síncronas
- Asíncronas
- Más simples que Vuex

---

## 3️⃣ Getters

Son propiedades computadas globales.

```js
getters: {
  totalTareas: (state) => state.tareas.length;
}
```

---

# 🏗 ¿Cómo quedará la estructura del proyecto?

Supongamos que el proyecto fue creado con:

    npm create vue@latest

La estructura relevante quedará así:

    src/
    │
    ├── main.js
    ├── App.vue
    │
    ├── stores/
    │   └── tareas.js
    │
    └── views/
        ├── Tareas.vue
        └── Estadisticas.vue

---

# 📄 1️⃣ Archivo: src/stores/tareas.js

Este es el corazón de Pinia.

```js
// src/stores/tareas.js

import { defineStore } from 'pinia';

export const useTareasStore = defineStore('tareas', {
  // 🔹 Estado global
  state: () => ({
    tareas: [],
  }),

  // 🔹 Getters
  getters: {
    totalTareas: (state) => state.tareas.length,

    tareasCompletadas: (state) => state.tareas.filter((t) => t.completada).length,
  },

  // 🔹 Actions (modifican el estado directamente)
  actions: {
    agregarTarea(texto) {
      this.tareas.push({
        id: Date.now(),
        texto,
        completada: false,
      });
    },

    eliminarTarea(id) {
      this.tareas = this.tareas.filter((t) => t.id !== id);
    },

    toggleTarea(id) {
      const tarea = this.tareas.find((t) => t.id === id);
      if (tarea) {
        tarea.completada = !tarea.completada;
      }
    },
  },
});
```

---

# 📄 2️⃣ Archivo: src/main.js

Aquí conectamos Pinia con la aplicación.

```js
// src/main.js

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia()); // Inyectamos Pinia
app.mount('#app');
```

✔ Ahora cualquier componente puede usar el store.

---

# 📄 3️⃣ Archivo: views/Tareas.vue

Componente que usa el store.

```vue
<script setup>
import { ref } from 'vue';
import { useTareasStore } from '../stores/tareas';

const store = useTareasStore();
const nuevaTarea = ref('');

const agregar = () => {
  if (!nuevaTarea.value) return;

  store.agregarTarea(nuevaTarea.value);
  nuevaTarea.value = '';
};
</script>

<template>
  <div>
    <h2>Tareas</h2>

    <form @submit.prevent="agregar">
      <input v-model="nuevaTarea" />
      <button>Agregar</button>
    </form>

    <ul>
      <li v-for="t in store.tareas" :key="t.id">
        {{ t.texto }}

        <button @click="store.toggleTarea(t.id)">✔</button>

        <button @click="store.eliminarTarea(t.id)">❌</button>
      </li>
    </ul>
  </div>
</template>
```

---

# 📄 4️⃣ Archivo: views/Estadisticas.vue

```vue
<script setup>
import { useTareasStore } from '../stores/tareas';

const store = useTareasStore();
</script>

<template>
  <div>
    <h2>Estadísticas</h2>

    <p>Total: {{ store.totalTareas }}</p>
    <p>Completadas: {{ store.tareasCompletadas }}</p>
  </div>
</template>
```

---

# 🔄 Flujo de Pinia en la práctica

1.  El usuario envía el formulario\
2.  El componente llama directamente a una action\
3.  La action modifica el state\
4.  Vue re-renderiza automáticamente

Sin mutations. Sin commit. Más simple.

---

# 🎯 Conclusión

Pinia sirve para:

- Centralizar estado
- Hacer aplicaciones más mantenibles
- Reducir complejidad comparado con Vuex
- Tener una API más moderna y simple

En Vue 3, Pinia es la opción recomendada actualmente.
