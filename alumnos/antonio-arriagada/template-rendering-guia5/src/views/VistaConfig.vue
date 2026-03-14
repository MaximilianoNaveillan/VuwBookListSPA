<script setup>
const props = defineProps({
  //declara las "props" (en este caso "tareas") que son datos o parámetros que un componente padre le envia a un componente hijo. Sirven para pasar información entre componentes
  tareas: Array, // el props tareas es un array que contiene varias tareas.
});
</script>

<template>
  <div>
    <h2>Configuración</h2>

    <!-- la directiva v-for permite recorrer el props array tareas, t=representa una tarea individual-->
    <!-- :key="t.id" ayuda a Vue a identificar cada elemento para optimizar el renderizado.-->
    <!-- Por ejemplo: Si tareas tiene 3 objetos → se renderizan 3 bloques.-->

    <div v-for="t in tareas" :key="t.id" style="margin-bottom: 10px">
      <input v-model="t.titulo" />
      <!-- la directiva v-model = Lo que hace es que si sincroniza automáticamente un valor del estado con una entrada de datos que haga el usuario-->
      <select v-model="t.prioridad">
        <option>baja</option>
        <option>media</option>
        <option>alta</option>
      </select>
    </div>
  </div>
</template>
