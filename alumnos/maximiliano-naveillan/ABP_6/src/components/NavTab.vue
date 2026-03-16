<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <nav class="nav">
    <!--  slot para título -->
    <div class="nav-title">
      <slot name="tituloapp"></slot>
    </div>
    <!-- tabs -->
    <ul class="tabs">
      <router-link to="/" class="link">Mis Libros</router-link>
      <router-link to="/form-libros" class="link">Agregar libro</router-link>
      <!-- <li :class="{ activo: tabActual === 'FormLibro' }" @click="seleccionar('FormLibro')">
        Agregar libro
      </li>
      <li :class="{ activo: tabActual === 'ListaLibros' }" @click="seleccionar('ListaLibros')">
        Mis libros
      </li> -->
    </ul>
  </nav>
</template>
<style scope>
/* Contenedor principal */
.nav {
  background-color: #0f766e;
  color: #fff;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  font-family: sans-serif;
}
.nav-title {
  font-size: 20px;
  font-weight: 600;
}

.tabs {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
}

.link {
  color: white;
  text-decoration: none;
}

.router-link-active {
  position: relative;
}

.router-link-active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 3px;
  background-color: #fff;
  border-radius: 1.5px;
}
/*  */
</style>
<!-- 
| Rol            | Color          | Hex         |
| -------------- | -------------- | ----------- |
| Primary        | Teal           | **#14B8A6** |
| Primary Dark   | Teal oscuro    | **#0F766E** |
| Secondary      | Violeta        | **#7C3AED** |
| Secondary Dark | Violeta oscuro | **#5B21B6** |
| Warning        | Amarillo       | **#F59E0B** |
| Success        | Verde          | **#10B981** |
| Danger         | Rojo           | **#EF4444** |
| Text Dark      | Gris oscuro    | **#374151** |
| Background     | Gris claro     | **#F9FAFB** |

 -->
