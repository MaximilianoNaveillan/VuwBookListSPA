<script setup>
import { ref, defineProps } from "vue";
import TareaCard from "./TareaCard.vue";

const props = defineProps({
  tareas: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <h4>Lista de Tareas</h4>
  <TareaCard v-for="tarea in props.tareas" :key="tarea.id" :tarea="tarea">
    <template #value>
      <p>template del template value</p>
    </template>
    <template #default>template del template default</template>
  </TareaCard>
</template>

<style scoped></style>
