<script setup>
import { ref } from 'vue';
let mensaje = ref('lista de usuarios');
let usuarios = ref([
  { id: 1, nombre: 'Azucena' },
  { id: 2, nombre: 'Tulipán' },
  { id: 3, nombre: 'Margarita' },
]);
let nuevousuario = ref('');
function cambiarMensaje() {
  console.log(mensaje);
  mensaje.value = 'mensaje cambiado';
}
/* Método Push()
.- agrega uno o mas elementos al final de un array y devuelve la nueva longitud del array.
.- Modifica el array original:
Ejemplo:
const frutas = ['manzana', 'banana'];
frutas.push("Uva");
console.log(frutas); // ["manzana", "banana", "Uva"]
*/

function agregarUsuario() {
  if (nuevousuario.value.trim() === '') return;
  usuarios.value.push({ id: 4, nombre: nuevousuario.value });
  nuevousuario.value = '';
}
</script>

<template>
  <h2>{{ mensaje }}</h2>
  <button @click="cambiarMensaje">Cambiar mensaje</button>
  <form @submit.prevent="agregarUsuario">
    <input v-model="nuevousuario" placeholder="nuevo usuario" />
    <!-- v-model es una directiva que crea sincronización bidireccional entre estado <script>ref()</script><template>input(DOM)</template> -->

    <button type="submit">agregar usuario</button>
  </form>
  <p v-if="usuarios.length === 0">no hay usuario registrado</p>
  <ul>
    <li v-for="(elemento, index) in usuarios" :key="elemento.id">
      {{ index }} - {{ elemento.nombre }}
    </li>
  </ul>
</template>

<style scoped></style>
<!-- <etiqueta-apertura artibuto="valor-atributo" otro-atributo="valor-otro-atributo">{{contenido}}</etiqueta-cierre> -> elemento-->
