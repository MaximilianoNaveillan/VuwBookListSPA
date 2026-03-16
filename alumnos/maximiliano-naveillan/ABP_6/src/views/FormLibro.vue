<script setup>
// importar herramientas de reactividad
import { reactive, inject } from 'vue';
import { useRouter } from 'vue-router';
import TextField from '../components/TextField.vue';
import TextArea from '../components/TextArea.vue';
import CheckBox from '../components/CheckBox.vue';

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
    <div class="content-field">
      <text-field nombre="Título del libro" tipo="text" v-model="nuevoLibro.titulo" />
    </div>
    <div class="content-field">
      <text-field nombre="autor" tipo="text" v-model="nuevoLibro.autor" />
    </div>
    <div class="content-field">
      <text-area nombre="Descripción" v-model="nuevoLibro.descripcion"></text-area>
    </div>
    <!-- Checkbox booleano -->

    <div class="content-field">
      <label>
        <check-box label="Disponible" v-model="nuevoLibro.disponible" />
      </label>
    </div>

    <!-- Checkbox múltiple -->
    <h4>Formatos</h4>
    <div class="content-field">
      <label>
        <check-box label="Físico" value="Físico" v-model="nuevoLibro.formato" />
      </label>
    </div>

    <div class="content-field">
      <label>
        <check-box label="Digital" value="Digital" v-model="nuevoLibro.formato" />
      </label>
    </div>

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
<style scoped>
.content-field {
  padding: 16px 0;
}
</style>
