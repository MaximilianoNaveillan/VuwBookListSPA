<script setup>
// importar herramientas de reactividad
import { reactive, inject } from 'vue';
import { useRouter } from 'vue-router';
import ListaLibros from './ListaLibros.vue';

// función global enviada desde APP.vue
const agregarLibro = inject('agregarLibro');

// router para redireccionar
const router = useRouter();

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

// function submit
function guardarLibro() {
  agregarLibro({ ...nuevoLibro });
  router.push('/');
}
</script>
<template>
  <slot></slot>
  <form @submit.prevent="guardarLibro">
    <!-- <apertura atributo="valor"></cierre> -->
    <div>
      <input
        type="text"
        placeholder="Título del libro"
        v-model.trim="nuevoLibro.titulo"
        requiered
      />
    </div>
    <div>
      <input type="text" placeholder="Autor" v-model.trim="nuevoLibro.autor" required />
    </div>
    <div>
      <textarea v-model="nuevoLibro.descripcion" placeholder="Descripción"></textarea>
    </div>
    <!-- Checkbox booleano -->
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
      <input type="number" v-model.number="nuevoLibro.stock" min="0" />
    </label>
    <!-- botón controlado por computed -->

    <button>Guardar Libro</button>
  </form>
</template>
<style scoped></style>
