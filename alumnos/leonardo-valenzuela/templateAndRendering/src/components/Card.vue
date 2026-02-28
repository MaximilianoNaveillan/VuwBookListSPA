<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  user: String
});

</script>

<template>
  <div class="card">
    <h4>Usuario:</h4>
    <p >
      {{ props.user }}
    </p>
  </div>
</template>

<style scoped>
.card{
  background-color: lightblue;
  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}
</style>