<script setup>
//  El presente código Se encarga de mostrar una lista de tareas usando el componente TareaCard y comunicar eventos
// al componente padre.     //

import TareaCard from '../components/TareaCard.vue'; //Aquí se importa el componente hijo TareaCard. Este componente será utilizado para mostrar cada tarea como una estructura tipo tarjeta en pantalla.

const props = defineProps({
  // defineProps() sirve para recibir datos del componente padre. En este caso el componente espera una prop llamada tareas que es un array (componente padre)
  tareas: Array,
});

const emit = defineEmits(['toggle']); //defineEmits() define eventos que el componente puede enviar al padre. - toggle=> Permitirá avisar al padre cuando se quiera cambiar el estado de una tarea.
</script>

<template>
  <!-- Aquí comienza el HTML del componente. Se muestra un título que es la lista de tareas .-->
  <div>
    <h2>Lista de tareas</h2>
    <!-- la directiva v-for="t in tareas" Recorre el array tareas, en donde cada elemento se guarda en la variable t .-->
    <!-- Vue necesita una clave única (t.id) para optimizar el renderizado (renderizado=Convertir datos o componentes en HTML visible en la pantalla.).-->
    <!-- El renderizado se realiza cada vez que los datos cambian-->

    <TareaCard v-for="t in tareas" :key="t.id" :tarea="t" @accion="emit('toggle', $event)">
      <template #nota v-if="t.prioridad === 'alta'">
        <p style="color: red">⚠ Prioridad alta</p>
      </template>
      <template #renderizadodesdeVistaLista>
        mensaje desde vistalista construido en TareaCard.
      </template>
    </TareaCard>
  </div>
</template>
