<script setup>
const props = defineProps({
  tarea: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['accion']);

function metodoParaEmitir() {
  //Esta función envía un evento al componente padre. Evento emitido: "accion", Dato enviado: "props.tarea.id", osea envía el id de la tarea

  emit('accion', props.tarea.id);
}
</script>

<template>
  <div class="card" :class="{ 'clase-activa': tarea.hecho }">
    <h3>{{ tarea.titulo }}</h3>

    <p>Prioridad: {{ tarea.prioridad }}</p>

    <!-- slot opcional -->
    <slot name="nota"></slot>
    <slot name="renderizadodesdeVistaLista"></slot>

    <button @click="metodoParaEmitir">
      <!-- Esta función normalmente emite un evento al componente padre para actualizar el estado de la tarea.   -->
      {{ tarea.hecho ? 'Desmarcar' : 'Completar' }}
    </button>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.clase-activa {
  background: #d4ffd4;
}
</style>
