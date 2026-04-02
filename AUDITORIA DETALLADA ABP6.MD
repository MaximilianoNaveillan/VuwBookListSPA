---

# 📋 AUDITORÍA DETALLADA — ABP_6 / María José

---

## ✅ ESTRUCTURA DEL PROYECTO

La estructura base es **correcta** y sigue la recomendación del README:

```
src/
 ├── assets/styles/main.css  ✅
 ├── components/
 │     ├── Libro.vue          ⚠️ ARCHIVO VACÍO
 │     └── NavTab.vue         ✅
 ├── views/
 │     ├── InicioView.vue     ⚠️ ARCHIVO VACÍO
 │     ├── FormLibro.vue      ✅
 │     ├── ListaLibros.vue    ✅
 │     └── DetalleLibro.vue   ✅
 ├── router/index.js          ✅
 ├── App.vue                  ✅
 └── main.js                  ✅
```

Además existen un directorio `stores/` con `counter.js` que **no se usa** — es un residuo del scaffolding de Vue + Pinia que debería eliminarse o ignorarse.

---

## 🧩 ANÁLISIS POR LECCIÓN

---

### Lección 1 — Introducción a Vue.js

| Requisito | Estado | Detalle |
|---|---|---|
| `App.vue` con `<template>`, `<script>`, `<style>` | ✅ | Presente y correcto |
| Patrón MVVM | ✅ | Se aplica: `data` → `ref`, `methods` → funciones, `template` → view |
| Contador reactivo (`data`, `methods`) | ❌ | **No implementado en ningún componente** |
| Mostrar nombre de usuario dinámicamente | ❌ | **No implementado** |

**Nota:** El contador reactivo es explícitamente pedido como tarea de la Lección 1. Aunque el proyecto avanzó a etapas más complejas, este ítem básico falta.

---

### Lección 2 — Templates y Rendering

| Requisito | Estado | Detalle |
|---|---|---|
| Componente `Libro.vue` | ❌ | **El archivo existe pero está VACÍO (0 bytes)** |
| `v-bind` | ✅ | Usado con `:to`, `:key`, `:class` |
| `v-if` | ✅ | Usado en `ListaLibros.vue` y `DetalleLibro.vue` |
| `v-show` | ❌ | **No se usa en ningún archivo** |
| `v-for` | ✅ | Usado en `ListaLibros.vue` y `DetalleLibro.vue` |
| Mensaje cuando no hay libros | ✅ | `<p v-if="libros.length === 0">` en `ListaLibros.vue` |

**`Libro.vue` vacío es el problema más crítico del proyecto.** Es el componente reutilizable por excelencia que debería renderizar la tarjeta de cada libro, y actualmente no existe.

---

### Lección 3 — Binding de Formularios

| Requisito | Estado | Detalle |
|---|---|---|
| `input` con `v-model` | ✅ | Título, autor, stock |
| `select` con `v-model` | ✅ | Editorial |
| `textarea` con `v-model` | ✅ | Descripción |
| Vinculación bidireccional | ✅ | `reactive()` + `v-model` bien aplicados |
| Preview en tiempo real | ⚠️ | Los datos se capturan pero **no hay sección visible que muestre el preview** |

El formulario está bien construido. Se usan correctamente `v-model.trim`, `v-model.number` y checkboxes múltiples.

---

### Lección 4 — Manejo de Eventos

| Requisito | Estado | Detalle |
|---|---|---|
| `@click` para agregar libros | ✅ | Vía `@submit.prevent` en el form |
| `@click` para eliminar libros | ✅ | `@click="eliminarLibro(libro.id)"` en `ListaLibros.vue` |
| Modificador `.prevent` | ✅ | `@submit.prevent="guardarLibro"` |
| Modificador `.once` | ❌ | **No se usa en ningún lugar** |
| Eventos de teclado (`Enter`) | ⚠️ | Funciona nativamente al hacer submit, pero no hay evento `@keyup.enter` explícito |

---

### Lección 5 — Vue Router

| Requisito | Estado | Detalle |
|---|---|---|
| Vue Router configurado | ✅ | `createRouter` + `createWebHistory` |
| Ruta `/` | ✅ | Apunta a `ListaLibros` |
| Ruta `/libros` | ⚠️ | **La ruta se llama `/form-libros`, no `/libros` como indica la evaluación** |
| Ruta dinámica `/libros/:id` | ⚠️ | Existe como `/detalle-libro/:id`, funciona pero el path difiere |
| Vista `InicioView.vue` | ❌ | **El archivo está vacío y NO está en el router** |
| Vista `ListaLibros.vue` | ✅ | Implementada |
| Vista `DetalleLibro.vue` | ✅ | Implementada con `computed` + `inject` |
| `<router-link>` | ✅ | Usado en NavTab y ListaLibros |
| `<router-view>` | ✅ | En App.vue |
| `props: true` en ruta dinámica | ❌ | **No se usa. El README lo recomienda explícitamente** |

---

## 🐛 BUGS Y ERRORES DETECTADOS

**1. Error de typo en `FormLibro.vue` — `requiered`:**
```html
<!-- ❌ Mal -->
<input type="text" ... requiered/>
<!-- ✅ Correcto -->
<input type="text" ... required/>
```
El campo de título tiene el atributo HTML mal escrito, por lo que la validación nativa del navegador **no funciona** en ese campo.

**2. Bug en `ListaLibros.vue` — ruta relativa sin `/`:**
```html
<!-- ❌ Mal (ruta relativa, puede fallar) -->
<router-link :to="`detalle-libro/${libro.id}`">
<!-- ✅ Correcto (ruta absoluta) -->
<router-link :to="`/detalle-libro/${libro.id}`">
```
Al navegar, si el usuario ya está en una sub-ruta, esto podría generar rutas incorrectas.

**3. Inconsistencia de mayúsculas en formato:**
```js
// En App.vue (datos iniciales):
formato: ['Físico', 'Digital']  // D mayúscula

// En FormLibro.vue (checkbox):
<input type="checkbox" value="digital" .../>  // d minúscula
```
Los libros nuevos guardarán `"digital"` pero los iniciales tienen `"Digital"`. Esto rompe comparaciones de igualdad.

**4. `provide` innecesario en `ListaLibros.vue`:**
```js
import { inject, provide } from "vue";  // provide importado pero nunca usado
```

**5. Typo en `NavTab.vue` — `scope` vs `scoped`:**
```html
<style scope>  <!-- ❌ Incorrecto, los estilos NO están encapsulados -->
<style scoped> <!-- ✅ Correcto -->
```
Consecuencia: los estilos del nav se aplican globalmente y podrían afectar otros componentes.

**6. El botón "Eliminar Libro" está DENTRO del `<router-link>`:**
```html
<router-link :to="...">
  ...
  <button @click="eliminarLibro(libro.id)">Eliminar Libro</button>
</router-link>
```
Esto provoca que al hacer clic en "Eliminar" también se navegue al detalle. Hay que mover el botón fuera del enlace y agregar `.stop` al evento click para prevenir la propagación.

---

## ❌ LO QUE FALTA (RESUMEN CRÍTICO)

| Elemento | Prioridad |
|---|---|
| `Libro.vue` — componente vacío, debe implementarse | 🔴 Alta |
| `InicioView.vue` — vacío y no ruteado (3 vistas requeridas) | 🔴 Alta |
| `v-show` — ninguna directiva `v-show` en todo el proyecto | 🟠 Media |
| Modificador `.once` — no aparece en ningún lugar | 🟠 Media |
| `props: true` en ruta dinámica del router | 🟠 Media |
| Preview en tiempo real en el formulario | 🟡 Baja |
| Contador reactivo (Lección 1) | 🟡 Baja |
| Nombre de usuario dinámico (Lección 1) | 🟡 Baja |
| Entregables documentales (capturas/video/doc técnico) | 🟠 Media |

---

## 💡 SUGERENCIAS CONCRETAS

**1. Implementar `Libro.vue`** como tarjeta reutilizable que reciba un libro por `prop`:
```vue
<script setup>
defineProps(['libro'])
</script>
<template>
  <div class="card">
    <h3>{{ libro.titulo }}</h3>
    <p>{{ libro.autor }}</p>
    <span v-show="!libro.disponible" class="badge">No disponible</span>
  </div>
</template>
```
Así también se cubriría `v-show` y el uso de props.

**2. Activar `InicioView.vue`** con una pantalla de bienvenida simple y agregar la ruta:
```js
{ path: '/', name: 'Inicio', component: InicioView }
{ path: '/libros', name: 'ListaLibros', component: ListaLibros }
```

**3. Usar `props: true` en la ruta dinámica:**
```js
{ path: '/detalle-libro/:id', component: DetalleLibro, props: true }
```
Luego en `DetalleLibro.vue` recibir el `id` como prop en vez de leerlo del `useRoute()`.

**4. Mover el botón Eliminar fuera del `router-link`** y agregar `.stop`:
```html
<router-link :to="`/detalle-libro/${libro.id}`">{{ libro.titulo }}</router-link>
<button @click.stop="eliminarLibro(libro.id)">Eliminar</button>
```

**5. Usar `.once` en algún elemento**, por ejemplo en el botón guardar para evitar doble envío:
```html
<button @click.once="guardarLibro">Guardar</button>
```

---

## ✨ LO QUE ESTÁ MUY BIEN HECHO

- **`App.vue` como Single Source of Truth** con `provide/inject` — patrón correcto y bien comentado
- **`agregarLibro` con `Date.now()`** como ID único — solución pragmática
- **`eliminarLibro` con `filter()`** — correcto, mantiene reactividad
- **`FormLibro.vue`** con `reactive()` y múltiples tipos de input — bien ejecutado
- **`DetalleLibro.vue`** con `computed` para encontrar el libro — elegante
- **`NavTab.vue`** con slot nombrado — buen uso de composición
- Paleta de colores definida y comentada en `NavTab.vue` — muestra criterio de diseño
- `index.html` con `lang="es"` — buena práctica de accesibilidad

---

## 📊 ESTIMACIÓN DE AVANCE

| Criterio evaluación | Estado estimado |
|---|---|
| Uso correcto de componentes Vue | 65% |
| `v-model` en formularios | 90% |
| Directivas (`v-if`, `v-for`, `v-show`) | 70% (falta `v-show`) |
| Manejo de eventos y modificadores | 70% (falta `.once`) |
| Vue Router funcional | 75% (falta InicioView) |
| Modularidad y claridad del código | 70% (Libro.vue vacío) |
| Navegación fluida | 85% |
| Patrón MVVM | 90% |

**En general: el proyecto tiene una base sólida. Los puntos críticos a resolver antes de la entrega son `Libro.vue`, `InicioView.vue`, el bug del botón dentro del router-link, y agregar `v-show` y `.once`.**