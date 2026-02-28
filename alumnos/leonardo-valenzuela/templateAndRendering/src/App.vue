<script setup>
import { ref } from "vue";
import Card from "./components/Card.vue";

const users = ref([]);

const nuevoUsuario = ref("");

const crearUsuario = () => {
  users.value.push(nuevoUsuario.value);
  nuevoUsuario.value = "";
};
</script>

<template>
  <h1>Nombre de usuario:</h1>
  <input type="text" v-model="nuevoUsuario" />
  <button @click="crearUsuario">Crear usuario</button>
  <h2 v-if="users.length === 0">No hay usuarios</h2>
  <section v-else class="cards">
    <Card v-for="(user, index) in users" :key="index" :user="user" />
  </section>
</template>

<style scoped>
.cards{
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
