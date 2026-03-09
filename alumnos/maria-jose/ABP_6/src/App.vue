<script setup>
import { ref } from 'vue';
/* valores reactivos */
let mensaje = ref('Hola Mundo');
let aceptarTerminos = ref(false);
const frutas = ref([]);
const genero = ref('');
const pais = ref('');
const numero = ref('0');
</script>

<template>
  <!-- Que es el Binding Realmente?
      1.- signofoca conectar valores reactivos con un atributo.
      Que es un atributo? Es una propiedad de un elemento HTML, por ejemplo:
     <apertura atributo:"valor-atributo"> </cierre> 
  -->
  <!-- En VUE existen dos formas de hacer binding 
       1.- :value="mensaje" -> v-bind:value="mensaje"
       2.- v-model="mensaje" -> es un atajo para hacer un binding bid       
      -->
  <textarea v-model="mensaje"></textarea>

  <pre>mensaje: {{ mensaje }}</pre>
  <p>aceptarTerminos: {{ aceptarTerminos }}</p>

  <!-- Checkbox -->
  <input type="checkbox" v-model="aceptarTerminos" />
  {{ aceptarTerminos ? 'Aceptado' : 'No Aceptado' }}
  <!-- Checkbox Array -->
  <div>
    <label>
      <input type="checkbox" value="Manzana" v-model="frutas" />
    </label>
    <label>
      <input type="checkbox" value="Pera" v-model="frutas" />
    </label>
    <label>
      <input type="checkbox" value="Uva" v-model="frutas" />
    </label>
    <pre>Frutas seleccionadas: {{ frutas }}</pre>
  </div>
  <!--  radio buttons -->
  <input type="radio" value="Femenino" v-model="genero" /> Femenino
  <input type="radio" value="Masculino" v-model="genero" /> Masculino
  <p>Género: {{ genero }}</p>
  <!-- Select -->
  <select v-model="pais">
    <option value="">Seleccione un país</option>
    <option value="Argentina">Argentina</option>
    <option value="Brasil">Brasil</option>
    <option value="Chile">Chile</option>
  </select>
  <p>País : {{ pais }}</p>
  <!-- Modificadores del V-MODEL -->
  <!-- lazy: actualiza el valor solo cuando el campo pierde el foco -->
  <input v-model.lazy="mensaje" />
  <!-- number: convierte el valor a un número -->
  <input type="number" v-model.number="numero" />
  <pre>
    numero: {{ numero }} - tipo: {{ typeof numero }}
  </pre>
  <!-- trim: elimina los espacios en blanco al principio y al final -->
  <input v-model.trim="mensaje" />
</template>

<style scoped></style>
