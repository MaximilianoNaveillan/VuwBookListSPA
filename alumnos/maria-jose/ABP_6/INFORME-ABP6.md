# INFORME COMPLETO ABP_6 — BookList SPA

## Tu avance actual por leccion

| Leccion | Tema | Avance | Nota |
|---------|------|--------|------|
| L1 | Intro Vue.js | 60% | Falta contador reactivo y nombre dinamico |
| L2 | Templates y Rendering | 50% | `Libro.vue` VACIO, falta `v-show` |
| L3 | Form Binding | 85% | Formulario OK, falta preview tiempo real |
| L4 | Eventos | 70% | Falta `.once` y `@keyup.enter` explicito |
| L5 | Vue Router | 70% | Falta InicioView, `props: true`, rutas |

**Avance general estimado: ~67%**

---

## COMO USAR ESTE INFORME

Cada bloque es independiente. Trabaja UN bloque por sesion.
Marca con `[x]` cada tarea que completes.
Los bloques estan ordenados por URGENCIA: rojo primero.

---
---

## BLOQUE 1 — BUGS RAPIDOS `[~30 min]`

Estas son correcciones de errores que YA existen en tu codigo.
Cada una es un cambio de 1-2 lineas.

---

### 1.1 Corregir typo `requiered` en FormLibro.vue `[BUG]`

- [ ] Abrir: `src/views/FormLibro.vue` linea 38

**ANTES:**
```html
<input type="text" placeholder="Titulo del libro" v-model.trim="nuevoLibro.titulo" requiered/>
```

**DESPUES:**
```html
<input type="text" placeholder="Titulo del libro" v-model.trim="nuevoLibro.titulo" required/>
```

> Por que importa: con `requiered` mal escrito, el navegador NO valida que el campo tenga texto. El formulario se puede enviar vacio.

---

### 1.2 Corregir ruta relativa en ListaLibros.vue `[BUG]`

- [ ] Abrir: `src/views/ListaLibros.vue` linea 20

**ANTES:**
```html
<router-link :to="`detalle-libro/${libro.id}`" class="link">
```

**DESPUES:**
```html
<router-link :to="`/detalle-libro/${libro.id}`" class="link">
```

> Por que importa: sin el `/` al inicio, la ruta es relativa. Si estas en `/libros`, navegaria a `/libros/detalle-libro/1` en vez de `/detalle-libro/1`.

---

### 1.3 Corregir `<style scope>` en NavTab.vue `[BUG]`

- [ ] Abrir: `src/components/NavTab.vue` linea 27

**ANTES:**
```html
<style scope>
```

**DESPUES:**
```html
<style scoped>
```

> Por que importa: sin `scoped`, los estilos del nav se aplican a TODA la app y pueden romper otros componentes.

---

### 1.4 Sacar boton Eliminar FUERA del router-link `[BUG]`

- [ ] Abrir: `src/views/ListaLibros.vue`

Este es el bug mas molesto: al hacer click en "Eliminar", TAMBIEN navegas al detalle del libro.

**ANTES (lineas 19-29):**
```html
<li v-for="libro in libros" :key="libro.id">
  <router-link :to="`/detalle-libro/${libro.id}`" class="link">
    <strong>{{ libro.titulo }}</strong>
    - {{ libro.autor }}
    ({{ libro.categoria }})
    <button @click="eliminarLibro(libro.id)">Eliminar Libro</button>
  </router-link>
</li>
```

**DESPUES:**
```html
<li v-for="libro in libros" :key="libro.id">
  <router-link :to="`/detalle-libro/${libro.id}`" class="link">
    <strong>{{ libro.titulo }}</strong>
    - {{ libro.autor }}
    ({{ libro.categoria }})
  </router-link>
  <button @click.stop="eliminarLibro(libro.id)">Eliminar Libro</button>
</li>
```

> Por que importa: el boton estaba DENTRO del `<router-link>`, asi que cada click en Eliminar tambien activaba la navegacion. Ahora el boton esta fuera y tiene `.stop` para mayor seguridad.

---

### 1.5 Corregir mayuscula en checkbox de formato `[BUG]`

- [ ] Abrir: `src/views/FormLibro.vue` linea 59

**ANTES:**
```html
<input type="checkbox" value="digital" v-model="nuevoLibro.formato" />
```

**DESPUES:**
```html
<input type="checkbox" value="Digital" v-model="nuevoLibro.formato" />
```

> Por que importa: los libros iniciales en App.vue usan `"Digital"` con D mayuscula. Si el formulario guarda `"digital"`, las comparaciones se rompen.

---

### 1.6 Eliminar import innecesario de `provide` `[BUG]`

- [ ] Abrir: `src/views/ListaLibros.vue` linea 2

**ANTES:**
```js
import { inject, provide } from "vue";
```

**DESPUES:**
```js
import { inject } from "vue";
```

> Por que importa: importar algo que no usas es codigo muerto. El evaluador lo puede notar.

---

### 1.7 Corregir typo en titulo de App.vue `[BUG]`

- [ ] Abrir: `src/App.vue` linea 99

**ANTES:**
```html
<template #tituloapp> BookLis SPA </template>
```

**DESPUES:**
```html
<template #tituloapp> BookList SPA </template>
```

---
---

## BLOQUE 2 — INICIOVIEW (vista faltante) `[~30 min]`

La evaluacion pide 3 vistas: Inicio, Lista, Detalle.
`InicioView.vue` existe pero esta VACIO. Hay que implementarlo y agregarlo al router.

---

### 2.1 Escribir contenido en InicioView.vue `[NUEVO]`

- [ ] Abrir: `src/views/InicioView.vue` (esta vacio)

**Escribir esto:**
```vue
<script setup>
import { inject } from 'vue';

const libros = inject('libros');
</script>

<template>
  <div class="inicio">
    <h1>Bienvenido a BookList SPA</h1>
    <p>Tu gestor de libros interactivo</p>
    <p>Actualmente tienes <strong>{{ libros.length }}</strong> libros en tu coleccion.</p>
    <router-link to="/libros" class="btn">Ver mis libros</router-link>
  </div>
</template>

<style scoped>
.inicio {
  text-align: center;
  padding: 40px 20px;
}
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 24px;
  background-color: #0f766e;
  color: white;
  border-radius: 8px;
  text-decoration: none;
}
.btn:hover {
  background-color: #14b8a6;
}
</style>
```

> Con esto cubres: nombre dinamico (libros.length), router-link, y la vista que falta.

---

### 2.2 Actualizar el router con las 3 rutas correctas `[ROUTER]`

- [ ] Abrir: `src/router/index.js`

**ANTES (archivo completo):**
```js
import { createRouter, createWebHistory } from 'vue-router'
import FormLibro from '../views/FormLibro.vue'
import ListaLibros from '../views/ListaLibros.vue'
import DetalleLibro from '@/views/DetalleLibro.vue'

const routes =[
    {
        path: '/',
        name: 'ListaLibros',
        component: ListaLibros,
    },
    {
        path:"/form-libros",
        name:"FormLibro",
        component: FormLibro
    },
    {
        path:"/detalle-libro/:id",
        name:"DetalleLibro",
        component: DetalleLibro
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
```

**DESPUES (archivo completo):**
```js
import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import FormLibro from '../views/FormLibro.vue'
import ListaLibros from '../views/ListaLibros.vue'
import DetalleLibro from '@/views/DetalleLibro.vue'

const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: InicioView,
    },
    {
        path: '/libros',
        name: 'ListaLibros',
        component: ListaLibros,
    },
    {
        path: '/form-libros',
        name: 'FormLibro',
        component: FormLibro,
    },
    {
        path: '/detalle-libro/:id',
        name: 'DetalleLibro',
        component: DetalleLibro,
        props: true,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
```

> Cambios clave:
> - InicioView ahora es la ruta `/`
> - ListaLibros se movio a `/libros`
> - Se agrego `props: true` en la ruta dinamica (requisito de la evaluacion)

---

### 2.3 Actualizar NavTab con las rutas nuevas `[ROUTER]`

- [ ] Abrir: `src/components/NavTab.vue` lineas 15-17

**ANTES:**
```html
<ul class="tabs">
  <router-link to="/">Mis Libros</router-link>
  <router-link to="/form-libros">Agregar libro</router-link>
</ul>
```

**DESPUES:**
```html
<ul class="tabs">
  <router-link to="/">Inicio</router-link>
  <router-link to="/libros">Mis Libros</router-link>
  <router-link to="/form-libros">Agregar libro</router-link>
</ul>
```

---

### 2.4 Actualizar redirect del formulario `[ROUTER]`

- [ ] Abrir: `src/views/FormLibro.vue` linea 30

**ANTES:**
```js
router.push("/");
```

**DESPUES:**
```js
router.push("/libros");
```

> Ahora al guardar un libro te lleva a la lista, no al inicio.

---

### 2.5 Actualizar estilos del NavTab para router-link `[BUG]`

- [ ] Abrir: `src/components/NavTab.vue` seccion `<style scoped>`

Los estilos actuales apuntan a `.tabs li` pero el NavTab usa `<router-link>` (que renderiza como `<a>`).

**ANTES:**
```css
.tabs li {
  cursor: pointer;
  padding: 10px 4px;
  position: relative;
  opacity: 0.8;
  transition: 0.2s;
}

.tabs li:hover {
  opacity: 1;
}

.tabs li.activo {
  opacity: 1;
}
```

**DESPUES:**
```css
.tabs a {
  cursor: pointer;
  padding: 10px 4px;
  position: relative;
  opacity: 0.8;
  transition: 0.2s;
  color: white;
  text-decoration: none;
}

.tabs a:hover {
  opacity: 1;
}

.tabs a.router-link-active {
  opacity: 1;
  border-bottom: 2px solid white;
}
```

> Bonus: `router-link-active` es una clase que Vue Router agrega automaticamente al link activo. Asi se ve cual pagina estas visitando.

---
---

## BLOQUE 3 — LIBRO.VUE (componente vacio) `[~40 min]`

Este es el componente MAS IMPORTANTE que falta.
La evaluacion pide un componente reutilizable que muestre cada libro como tarjeta.
Ademas, aca metemos `v-show` que es una directiva que falta en todo el proyecto.

---

### 3.1 Implementar Libro.vue completo `[NUEVO]`

- [ ] Abrir: `src/components/Libro.vue` (esta vacio)

**Escribir esto:**
```vue
<script setup>
defineProps({
  libro: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="libro-card">
    <h3>{{ libro.titulo }}</h3>
    <p><strong>Autor:</strong> {{ libro.autor }}</p>
    <p><strong>Categoria:</strong> {{ libro.categoria }}</p>
    <p><strong>Editorial:</strong> {{ libro.editorial }}</p>
    <p><strong>Stock:</strong> {{ libro.stock }}</p>

    <span v-show="libro.disponible" class="badge disponible">Disponible</span>
    <span v-show="!libro.disponible" class="badge no-disponible">No disponible</span>

    <div class="formatos">
      <span v-for="(fmt, index) in libro.formato" :key="index" class="formato-tag">
        {{ fmt }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.libro-card {
  background: white;
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  border-left: 4px solid #14b8a6;
}
.libro-card h3 {
  margin: 0 0 8px 0;
  color: #0f766e;
}
.badge {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  margin-top: 8px;
}
.disponible {
  background: #d1fae5;
  color: #065f46;
}
.no-disponible {
  background: #fee2e2;
  color: #991b1b;
}
.formatos {
  margin-top: 8px;
  display: flex;
  gap: 6px;
}
.formato-tag {
  background: #ede9fe;
  color: #5b21b6;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
}
</style>
```

> Con este componente cubres:
> - `defineProps` (props del componente)
> - `v-show` (directiva que faltaba en TODO el proyecto)
> - `v-for` (para los formatos)
> - `v-bind` (con `:key`)
> - Componente reutilizable (requisito de modularidad)

---

### 3.2 Usar Libro.vue en ListaLibros.vue `[NUEVO]`

- [ ] Abrir: `src/views/ListaLibros.vue`

**ANTES (archivo completo):**
```vue
<script setup>
import { inject, provide } from "vue";
const libros = inject("libros");
const eliminarLibro = inject("eliminarLibro")
</script>

<template>
  <div>
    <h2>Lista de Libros</h2>
    <p v-if="libros.length === 0">No hay libros aun</p>
    <ul>
      <li v-for="libro in libros" :key="libro.id">
        <router-link :to="`detalle-libro/${libro.id}`" class="link">
        <strong>{{ libro.titulo }}</strong>
        - {{ libro.autor }}
        ({{ libro.categoria }})
        <button @click="eliminarLibro(libro.id)">Eliminar Libro</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>
```

**DESPUES (archivo completo):**
```vue
<script setup>
import { inject } from "vue";
import Libro from "../components/Libro.vue";

const libros = inject("libros");
const eliminarLibro = inject("eliminarLibro");
</script>

<template>
  <div>
    <h2>Lista de Libros</h2>

    <p v-if="libros.length === 0">No hay libros aun</p>

    <div v-for="libro in libros" :key="libro.id">
      <router-link :to="`/detalle-libro/${libro.id}`" class="link">
        <Libro :libro="libro" />
      </router-link>
      <button @click.stop="eliminarLibro(libro.id)">Eliminar Libro</button>
    </div>
  </div>
</template>
```

> Cambios: importa y usa `<Libro>`, saca el boton fuera del link, corrige la ruta, limpia el import de `provide`.

---
---

## BLOQUE 4 — DIRECTIVAS Y MODIFICADORES FALTANTES `[~20 min]`

Estos son requisitos especificos de la evaluacion que no estan en ningun archivo.

---

### 4.1 Agregar modificador `.once` en algun evento `[DIRECTIVA]`

- [ ] Abrir: `src/views/InicioView.vue`

Agrega un boton con `.once` en la vista de Inicio. Ejemplo: un boton de bienvenida que solo funciona una vez.

**Agregar dentro del `<div class="inicio">`, despues del router-link:**
```html
<button @click.once="alert('Bienvenido a BookList SPA!')" class="btn" style="margin-left: 10px; background-color: #7c3aed;">
  Saludo de bienvenida
</button>
```

> `.once` hace que el evento se ejecute SOLO la primera vez. La evaluacion lo pide explicitamente.

---

### 4.2 Agregar `v-else` en DetalleLibro.vue `[DIRECTIVA]`

- [ ] Abrir: `src/views/DetalleLibro.vue`

**ANTES (linea 21-22):**
```html
</div>

</template>
```

**DESPUES:**
```html
</div>
<p v-else>Libro no encontrado. <router-link to="/libros">Volver a la lista</router-link></p>

</template>
```

> Esto cubre el caso borde de un ID que no existe. Muestra un mensaje en vez de una pagina en blanco.

---

### 4.3 Agregar validacion en guardarLibro `[DIRECTIVA]`

- [ ] Abrir: `src/views/FormLibro.vue`

**ANTES (linea 28-31):**
```js
function guardarLibro(){
  agregarLibro({ ...nuevoLibro});
  router.push("/libros");
}
```

**DESPUES:**
```js
function guardarLibro(){
  if (!nuevoLibro.titulo || !nuevoLibro.autor) {
    alert('El titulo y autor son obligatorios');
    return;
  }
  agregarLibro({ ...nuevoLibro});
  router.push("/libros");
}
```

> Validacion basica antes de guardar. Evita libros sin nombre.

---

### 4.4 Agregar `@keyup.enter` explicito `[DIRECTIVA]`

- [ ] Abrir: `src/views/FormLibro.vue`

En el input de titulo (linea 38), agregar el evento de teclado:

**ANTES:**
```html
<input type="text" placeholder="Titulo del libro" v-model.trim="nuevoLibro.titulo" required/>
```

**DESPUES:**
```html
<input type="text" placeholder="Titulo del libro" v-model.trim="nuevoLibro.titulo" required @keyup.enter="guardarLibro"/>
```

> La evaluacion pide eventos de teclado (`Enter`). Aunque el form ya funciona con Enter nativo, esto lo hace EXPLICITO para el evaluador.

---
---

## BLOQUE 5 — REVISAR Y LIMPIAR `[~20 min]`

---

### 5.1 Limpiar codigo comentado en App.vue `[LIMPIEZA]`

- [ ] Abrir: `src/App.vue` lineas 19-20

**BORRAR estas lineas:**
```js
/* import FormLibro from './views/FormLibro.vue';
import ListaLibros from './views/ListaLibros.vue'; */
```

> Codigo comentado = ruido. El evaluador quiere codigo limpio.

---

### 5.2 Limpiar codigo comentado en NavTab.vue `[LIMPIEZA]`

- [ ] Abrir: `src/components/NavTab.vue`

**BORRAR el bloque comentado dentro del `<ul>` (lineas 18-23):**
```html
<!-- <li :class="{ activo: tabActual === 'FormLibro' }" @click="seleccionar('FormLibro')">
  Agregar libro
</li>
<li :class="{ activo: tabActual === 'ListaLibros' }" @click="seleccionar('ListaLibros')">
  Mis libros
</li> -->
```

**Y BORRAR el bloque CSS comentado (lineas 71-82):**
```css
/*
.tabs li.activo::after {
  content: '';
  ...
}
 */
```

---

### 5.3 Correr `npm run dev` y probar `[TESTING]`

- [ ] En la terminal, ir a la carpeta del proyecto y ejecutar:

```bash
cd alumnos/maria-jose/ABP_6
npm run dev
```

**Probar este flujo completo:**

1. Abrir en el navegador
2. Ves la pagina de **Inicio** con el contador de libros
3. Click en **"Ver mis libros"** → ves la lista con las tarjetas
4. Click en un libro → ves el **Detalle** completo
5. Volver a la lista → click **"Eliminar"** en un libro → desaparece SIN navegar
6. Click en **"Agregar libro"** → llenar el formulario → guardar
7. Verificar que el libro nuevo aparece en la lista
8. Abrir DevTools (F12) → Console → **no debe haber errores rojos**

---
---

## BLOQUE 6 — ENTREGABLES FINALES `[~30 min]`

---

### 6.1 Tomar capturas de pantalla `[ENTREGABLE]`

- [ ] Captura de cada vista:
  - Vista Inicio
  - Vista Lista de Libros
  - Vista Formulario (con datos escritos)
  - Vista Detalle de un libro

> Tip: usa la herramienta de recortes de Windows (Win + Shift + S)

---

### 6.2 Actualizar el README con decisiones tecnicas `[ENTREGABLE]`

- [ ] El README debe incluir al menos 3-5 decisiones tecnicas. Ejemplo:

```markdown
## Decisiones Tecnicas

1. **Estado centralizado en App.vue con provide/inject**: Elegimos mantener
   el array de libros en App.vue y compartirlo via provide/inject para que
   todos los componentes hijos accedan al mismo estado sin prop drilling.

2. **Componente Libro.vue reutilizable**: Creamos un componente independiente
   que recibe un libro por props y renderiza una tarjeta. Esto permite
   reutilizarlo en cualquier vista.

3. **ID unico con Date.now()**: Usamos la marca de tiempo como ID unico
   para cada libro nuevo, evitando colisiones sin necesidad de una base de datos.

4. **Vue Router con props: true**: En la ruta dinamica de DetalleLibro
   pasamos el id como prop para desacoplar el componente del router.

5. **Uso de reactive() para el formulario**: Usamos reactive() en vez de
   multiples ref() para agrupar todos los campos del formulario en un
   solo objeto, manteniendo el codigo mas limpio.
```

---
---

## RESUMEN DE DIRECTIVAS Y FEATURES VUE CUBIERTAS

Despues de completar todos los bloques, tu proyecto tendra:

| Feature Vue | Donde esta | Estado |
|-------------|-----------|--------|
| `v-model` | FormLibro.vue | Ya existia |
| `v-model.trim` | FormLibro.vue | Ya existia |
| `v-model.number` | FormLibro.vue | Ya existia |
| `v-if` | ListaLibros.vue, DetalleLibro.vue | Ya existia |
| `v-else` | DetalleLibro.vue | NUEVO (Bloque 4) |
| `v-show` | Libro.vue | NUEVO (Bloque 3) |
| `v-for` | ListaLibros.vue, Libro.vue, DetalleLibro.vue | Ya existia |
| `v-bind` (`:key`, `:to`, `:libro`) | Varios | Ya existia + ampliado |
| `@click` | ListaLibros.vue | Ya existia |
| `@click.stop` | ListaLibros.vue | NUEVO (Bloque 1) |
| `@click.once` | InicioView.vue | NUEVO (Bloque 4) |
| `@submit.prevent` | FormLibro.vue | Ya existia |
| `@keyup.enter` | FormLibro.vue | NUEVO (Bloque 4) |
| `provide/inject` | App.vue + vistas | Ya existia |
| `defineProps` | Libro.vue | NUEVO (Bloque 3) |
| `reactive()` | FormLibro.vue | Ya existia |
| `computed()` | DetalleLibro.vue | Ya existia |
| `ref()` | App.vue | Ya existia |
| `<router-link>` | NavTab, ListaLibros, InicioView | Ya existia + ampliado |
| `<router-view>` | App.vue | Ya existia |
| `props: true` (router) | router/index.js | NUEVO (Bloque 2) |
| 3 vistas | Inicio, Lista, Detalle | Completado (Bloque 2) |

---

## CRITERIOS DE EVALUACION — COBERTURA FINAL

| Criterio | Cubierto |
|----------|----------|
| Uso correcto de componentes Vue | SI — App, NavTab, Libro, FormLibro, ListaLibros, DetalleLibro, InicioView |
| `v-model` en formularios | SI — input, select, textarea, checkbox, radio |
| Directivas (`v-if`, `v-for`, `v-show`) | SI — las tres presentes |
| Manejo de eventos y modificadores | SI — @click, .prevent, .once, .stop, @keyup.enter |
| Vue Router funcional | SI — 4 rutas, dinamica con props, router-link, router-view |
| Modularidad y claridad | SI — componentes separados, estado centralizado |
| Navegacion fluida | SI — 3 vistas + formulario + detalle |
| Patron MVVM | SI — data(ref/reactive), view(template), viewmodel(methods/computed) |
