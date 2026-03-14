<script setup>
import { ref, shallowRef } from 'vue'; // ref -> crea reactividad completa para objetos, arrays

import VistaLista from './views/VistaLista.vue'; // componentes hijos que se mostrarán dinámicamente.
import VistaConfig from './views/VistaConfig.vue'; // componentes hijos que se mostrarán dinámicamente.

const tareas = ref([
  // tareas es un array reactivo de objetos con propiedades id, titulo, hecho y prioridad
  { id: 1, titulo: 'Aprender Vue', hecho: false, prioridad: 'alta' },
  { id: 2, titulo: 'Hacer dashboard', hecho: false, prioridad: 'media' },
  { id: 3, titulo: 'Estudiar Composition API', hecho: true, prioridad: 'baja' },
]);

// vista dinámica
const vistaActual = shallowRef(VistaLista);

const mostrarConfig = ref(false); // Valor booleano que indica si estamos viendo la vista de configuración (true) o la lista (false).

function alternarVista() {
  // Cambia mostrarConfig entre true y false. Al pulsar el botón "cambiar vista", el componente renderizado cambia dinámicamente.
  mostrarConfig.value = !mostrarConfig.value;

  vistaActual.value = mostrarConfig.value ? VistaConfig : VistaLista;
}

// cambiar estado hecho
function toggleTarea(id) {
  // Esta funcion permite cambiar el estado de una tarea verdadero o falso
  // Recibe el id de una tarea. Busca la tarea correspondiente en el array tareas. Invierte su estado (de true a false o viceversa). a la reactividad de ref, los cambios se reflejan automáticamente en la vista.
  const tarea = tareas.value.find((t) => t.id === id);

  if (tarea) {
    tarea.hecho = !tarea.hecho;
  }
}
</script>

<template>
  <div>
    <h1>Dashboard de Tareas</h1>

    <button @click="alternarVista">Cambiar Vista</button>

    <keep-alive>
      <component :is="vistaActual" :tareas="tareas" @toggle="toggleTarea" />
    </keep-alive>
  </div>
</template>
