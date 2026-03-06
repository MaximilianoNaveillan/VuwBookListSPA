<script setup>
/* 
ref: es una función para crear referencias reactivas en variables dinámicas.
reactive: funcion para crear objetos reactivos.
computed: función para crear propiedades computadas.
*/
import { ref, reactive, computed } from 'vue';
import TabInicio from './components/TabInicio.vue';
import TabPerfil from './components/TabPerfil.vue';
import Card from './components/Card.vue';
/* 
=================================
1️⃣ Lista Reactiva (v-for)
=================================
*/
// ref cra un contenedor reactivo
const productos = ref([
  {
    id: 1,
    nombre: 'Laptop',
    stock: 10,
  },
  { id: 2, nombre: 'Mouse', stock: 10 },
  {
    id: 3,
    nombre: 'Teclado',
    stock: 5,
  },
]);
/* 
===================================
2️⃣ Computed pra filtrar
===================================
// Filtramos solo productos con stock 
*/
const productosDisponibles = computed(() => {
  // .value porque estamos en bloque script
  return productos.value.filter((producto) => producto.stock > 0);
});
/* 
===================================
3️⃣ Condicionall simple
====================================
*/
const mostrarDisponibles = ref(true);
/* 
===================================
4️⃣ Componente dinámico
====================================
*/
const componeneteActual = ref(TabPerfil);

function cambiarTab(nombre) {
  // en section script usamos .value
  componeneteActual.value = nombre;
}

/* 
================================
 Clases dinámicas
================================
*/
const esActivo = ref(true);
const tieneError = ref(false);

/* 
================================
HTML dinámico
================================
*/
const contenidoHTML = ref('<strong>Contenido renderizado con v-html</strong>');

/* 
================================
Objeto Reactivo (v-for Obj)
================================
*/
const usuario = reactive({
  Nombre: 'Maximiliano',
  Rol: 'Instructor',
  Activo: true,
});
</script>

<template>
  <div class="container">
    <!-- v-for con ARRAY -->
    <h2>Lista de productos</h2>
    <button @click="mostrarDisponibles = !mostrarDisponibles">cambiar filtro</button>
    <ul v-if="mostrarDisponibles">
      <li v-for="(producto, index) in productosDisponibles" :key="producto.id">
        {{ index + 1 }} - {{ producto.nombre }} (stock: {{ producto.stock }} )
      </li>
    </ul>
    <!-- v-for con OBJETO | rective() nos permite renderizar un obj {clave:valor} | [{},{}...]-->
    <h2>Datos de Usuario</h2>
    <div v-for="(valor, clave, index) in usuario" :key="clave">
      {{ index + 1 }} - {{ clave }}: {{ valor }}
    </div>
    <!-- Clases dinámicas -->
    <div
      :class="{
        active: esActivo,
        error: tieneError,
      }"
    >
      Estado visual dinámico
    </div>

    <button @click="esActivo = !esActivo">toggle Active</button>
    <!-- v-HTML -->
    <h2>b-html</h2>
    <div v-html="contenidoHTML"></div>

    <!-- Directivas personalizadas -->
    <input v-focus placeholder="Este es un input sin foco automático" />

    <!-- Componetes dinámicos -->
    <h2>Tabs dinámicos</h2>
    <button @click="cambiarTab(TabInicio)">Inicio</button>
    <button @click="cambiarTab(TabPerfil)">Perfil</button>

    <!-- Keep-alive mantiene estado -->
    <keep-alive>
      <component :is="componeneteActual" />
    </keep-alive>

    <Card>
      <template #header>
        <h3>Header desde padre</h3>
      </template>

      <p>contenido principal inyectado</p>
    </Card>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

.active {
  color: green;
}

.error {
  color: red;
}
</style>
