<script setup>
import { ref } from "vue";
import ListaTareas from "./components/ListaTareas.vue";
import ListaConfiguracion from "./components/ListaConfiguracion.vue";

const componentId = ref(ListaTareas);

const tareas = ref([]);

const tarea = ref({
  id: null,
  titulo: "",
  descripcion: "",
});

const agregarTarea = () => {
  tareas.value.push({ ...tarea.value, id: Date.now() });
  tarea.value.titulo = "";
  tarea.value.descripcion = "";
};

const cambiarValorDeTarea = (id, nuevaTarea) => {
  tareas.value = tareas.value.filter((tarea) => {
    return tarea.id !== id
  });
  tareas.value.push(nuevaTarea);
};


</script>

<template>
  <h1>Proyecto Tareas</h1>
  <section>
    <h2>Agregar Tarea</h2>
    <form @submit.prevent="agregarTarea">
      <input v-model="tarea.titulo" placeholder="Título" required />
      <input v-model="tarea.descripcion" placeholder="Descripción" required />
      <button type="submit">Agregar</button>
    </form>
  </section>
  <section>
    <div>
      <button @click="componentId = ListaTareas">Lista Tareas</button>
      <button @click="componentId = ListaConfiguracion">Configuración</button>
    </div>
    <keep-alive>
      <component :is="componentId" :tareas="tareas" @cambiar="cambiarValorDeTarea"></component>
    </keep-alive>
  </section>
</template>

<style scoped></style>
