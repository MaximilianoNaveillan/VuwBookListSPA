<script setup>
import { ref, shallowRef, computed } from 'vue';
import TareaCard from './components/TareaCard.vue';
import ListaVista from './components/ListaVista.vue';
import ConfigVista from './components/ConfigVista.vue';

const tareas = ref([
  { id: 1, titulo: 'Aprender slots', hecho: false, prioridad: 'alta' },
  { id: 2, titulo: 'Usar keep-alive', hecho: true, prioridad: 'baja' },
  { id: 3, titulo: 'Computed filtrado', hecho: false, prioridad: 'alta' },
]);

const mostrarConfig = ref(false);
const currentView = shallowRef(ListaVista);

const tareasPendientes = computed(() => tareas.value.filter((t) => !t.hecho));

const toggleTarea = (id) => {
  const tarea = tareas.value.find((t) => t.id === id);
  if (tarea) tarea.hecho = !tarea.hecho;
};

const toggleVista = () => {
  mostrarConfig.value = !mostrarConfig.value;
  currentView.value = mostrarConfig.value ? ConfigVista : ListaVista;
};
</script>
<template>
  <div id="app">
    <button @click="toggleVista">
      {{ mostrarConfig ? 'Lista' : 'Config' }}
    </button>

    <keep-alive>
      <component :is="currentView" />
    </keep-alive>

    <!-- Vista Lista con filtrado -->
    <div v-if="!mostrarConfig">
      <h2>Tareas Pendientes</h2>
      <TareaCard v-for="t in tareasPendientes" :key="t.id" :tarea="t" @accion="toggleTarea">
        <template #nota v-if="t.prioridad === 'alta'">
          <p>🔥 Prioridad Alta</p>
        </template>
      </TareaCard>
    </div>
  </div>
</template>
