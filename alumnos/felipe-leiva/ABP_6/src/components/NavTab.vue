<script setup>
/* aca llamo el componente que meentre router */
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
      <li>
        <router-link to="/">Lista de Libros</router-link>
      </li>
      <li>
        <router-link to="/form-libro">Agregar Libro</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* Contenedor principal */
.nav {
  background-color: var(--gray-800); /* Fondo del nav dark */
  color: #fff;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  font-family: sans-serif;
  border-bottom: var(--gray-600) 1px solid;
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

.tabs li {
  cursor: pointer;
  padding: 12px 12px;
  position: relative;
  opacity: 0.8;
  transition: 0.2s;
  color: var(--gray-50);
  border: var(--gray-50) 1px solid;
  border-radius: 8px;
  background-color: transparent;
}

.tabs li:hover {
  background-color: var(--gray-600);
}

/* tab activo */

.tabs li.activo {
  background-color: var(--primary-700);
  color: var(--primary-50);
}

.tabs a.activo {
  background-color: var(--primary-700);
  color: var(--primary-50);
  border-radius: 8px;
  padding: 12px;
  display: inline-block;
}

/*  tab activo */

.tabs li.activo::after {
  content: '';
  text-decoration: 2px solid var(--primary-600);
  background-color: var(--primary-800);
}

a:-webkit-any-link {
  color: var(--primary-50);
  text-decoration: 2px solid var(--primary-);
}

.router-link-exact-active {
  color: var(--primary-700);
  text-decoration: 2px solid var(--primary-600);
}
</style>
