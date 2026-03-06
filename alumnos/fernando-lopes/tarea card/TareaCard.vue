<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  tarea: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['accion']);

const manejarAccion = () => {
  emit('accion', props.tarea.id);
};
</script>

<template>
  <div class="card" :class="{ 'tarea-hecha': tarea.hecho }">
    <h3>{{ tarea.titulo }}</h3>
    <p>{{ tarea.hecho ? '✅ Hecha' : '⏳ Pendiente' }}</p>
    <slot name="nota"></slot>
    <button @click="manejarAccion">Toggle</button>
  </div>
</template>
