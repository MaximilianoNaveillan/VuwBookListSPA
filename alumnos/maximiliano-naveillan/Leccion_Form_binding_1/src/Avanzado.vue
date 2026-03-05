<script setup>
import { reactive, computed } from 'vue';

const configuracion = reactive({
  modelo: 'basico',
  extras: [],
});

const precios = {
  modelos: {
    basico: 800,
    avanzado: 1200,
  },
  extras: {
    'Pantalla táctil': 200,
    'Memoria extra': 150,
  },
};

const precioTotal = computed(() => {
  let total = precios.modelos[configuracion.modelo];

  configuracion.extras.forEach((extra) => {
    total += precios.extras[extra];
  });

  return total;
});
</script>
<template>
  <h2>Configuración</h2>

  <h3>Modelo</h3>
  <label for="">
    <input type="radio" value="basico" v-model="configuracion.modelo" />
  </label>
  <label for="">
    <input type="radio" value="avanzado" v-model="configuracion.modelo" />
  </label>

  <h3>Extras</h3>
  <label for="">
    <input type="checkbox" value="Pantalla táctil" v-model="configuracion.extras" />
  </label>
  <label for="">
    <input type="checkbox" value="Memoria extra" v-model="configuracion.extras" />
  </label>

  <h2>total: ${{ precioTotal }}</h2>
</template>
