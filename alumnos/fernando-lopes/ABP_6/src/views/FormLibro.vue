<script setup>
import { reactive, computed, inject } from 'vue';
const agregarLibro = inject('agregarLibro');
const nuevoLibro = reactive({
  titulo: '',
  autor: '',
  descripcion: '',
  disponible: false,
  formato: [],
  categoria: '',
  editorial: '',
  stock: 0,
});

const formularioValido = computed(() => {
  return (
    nuevoLibro.titulo.length > 2 &&
    nuevoLibro.autor.length > 2 &&
    nuevoLibro.categoria !== '' &&
    nuevoLibro.editorial !== ''
  );
});

function enviarFormulario() {
  if (!formularioValido.value) return;
  agregarLibro({ ...nuevoLibro });
}
</script>
<template>
  <slot></slot>
  <form @submit.prevent="enviarFormulario">
    <div>
      <input type="text" placeholder="Título del libro" v-model.trim="nuevoLibro.titulo" />
    </div>
    <div>
      <input type="text" placeholder="Autor" v-model.trim="nuevoLibro.autor" />
    </div>
    <div>
      <textarea v-model="nuevoLibro.descripcion" placeholder="Descripción"></textarea>
    </div>

    <label>
      <input type="checkbox" v-model="nuevoLibro.disponible" />
      Disponible
    </label>

    <!-- Checkbox múltiple -->
    <h4>Formatos</h4>
    <label>
      <input type="checkbox" value="Físico" v-model="nuevoLibro.formato" />
      Físico
    </label>
    <label>
      <input type="checkbox" value="digital" v-model="nuevoLibro.formato" />
      Digital
    </label>
    <!-- radi buttons -->
    <h4>Categoría</h4>
    <label>
      <input type="radio" value="Novel" v-model="nuevoLibro.categoria" />
      Novela
    </label>
    <label>
      <input type="radio" value="Tecnología" v-model="nuevoLibro.categoria" />
      Tecnología
    </label>
    <label>
      <select v-model="nuevoLibro.editorial">
        <option disabled value="">Selecciona una editorial</option>
        <option>Planeta</option>
        <option>Penguin</option>
        <option>Nova</option>
      </select>
    </label>
    <label>
      <input type="number" v-model.number="nuevoLibro.stock" />
    </label>
    <!-- botón controlado por computed -->

    <button :disabled="!formularioValido">Guardar Libro</button>
  </form>
</template>
<style scoped></style>
