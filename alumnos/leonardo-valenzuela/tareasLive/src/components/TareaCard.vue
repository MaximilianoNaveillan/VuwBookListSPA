<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  tarea: {
    type: Object,
    required: true,
  },
});

</script>

<template>
 <p><strong>{{ props.tarea.titulo }}</strong></p>
 <p>{{ props.tarea.descripcion }}</p>
 <slot name="default">desdelacard</slot>
</template>

<style scoped></style>