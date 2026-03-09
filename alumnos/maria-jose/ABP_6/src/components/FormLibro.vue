<script setup>
//Importar herramientas de reactividad
import { reactive, computed } from 'vue';
// defineEmits permite emitir eventos al componente padre
const emit = defineEmits(['agregar']);
// reactive se usa para objetos reactivos
//{clave:valor} --> {clave.dinamica:valor.dinamico}
const nuevoLibro = reactive({
  titulo: '',
  autor: '',
  descripcion: '',

  /* checkbox boolean */
  disponible: false,

  // checkbox múltiple (array[])
    formato : [],

    // radio button
  categoria: '',

  // select
  editorial: '',

  // número
  stock: 0,
});

// function que se ejecuta al enviar el formulario emit(evento)
// computed permite crear propiedades computadas derivadas
const formularioValido = computed(() => {
  return (
    nuevoLibro.titulo.length > 2 &&
    nuevoLibro.autor.length > 2 &&
    nuevoLibro.categoria !== '' &&
    nuevoLibro.editorial !== ''
  );
});

// function que se ejecuta al enviar el formulario emit(evento)
function enviarFormulario() {
  // si el formuario no es válido
  // detenemos la ejecución (return)
  if (!formularioValido.value) return;
  //emitimos el libro al componente padre App.vue
  emit('agregar', { ...nuevoLibro });
}
</script>
<template>
  <form>
    <!-- <apertura atributo="valor"></cierre> -->
    <div>
      <input type="text" placeholder="Título del libro" v-model.trim="nuevoLibro.titulo" />
    </div>
    <div>
      <input type="text" placeholder="Autor" v-model.trim="nuevoLibro.autor" />
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
    <select v-model="nuevoLibro.editorial">
      <option disabled value="">Selecciona una editorial</option>
      <option>Planeta</option>
      <option>Penguin</option>
      <option>Nova</option>
    </select>
    <input type="number" v-model.number="nuevoLibro.stock" />
  </form>

  <pre>{{ nuevoLibro }}</pre>
</template>
<style scoped></style>
