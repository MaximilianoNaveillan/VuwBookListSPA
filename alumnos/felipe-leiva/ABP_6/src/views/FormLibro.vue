<script setup>
// importar herramientas de reactividad
import { reactive, ref } from 'vue';
import { Container, Buttons } from '../components';
import { useLibrosStore } from '../stores/librosStores';

const store = useLibrosStore(); // usamos Pinia directamente

const nuevoLibro = reactive({
  titulo: '',
  autor: '',
  descripcion: '',

  // reemplazamos checkbox booleano por URL de portada
  portada: '',

  // checkbox múltiple (array[])
  formato: [],

  // radio button
  categoria: '',

  // select
  editorial: '',

  // número
  stock: 0,

  // descargar
  descarga: '',
});

const key = ref(0);

function guardarLibro() {
  store.agregarLibro({ ...nuevoLibro }); // agregamos al store

  // reset form
  nuevoLibro.titulo = '';
  nuevoLibro.autor = '';
  nuevoLibro.descripcion = '';
  ((nuevoLibro.portada = ''), (nuevoLibro.formato = []));
  nuevoLibro.categoria = '';
  nuevoLibro.editorial = '';
  nuevoLibro.stock = 0;
  nuevoLibro.descarga = '';

  key.value++; // fuerza reset del form
}
</script>

<template>
  <Container>
    <h2>Agregar Libro</h2>
    <hr />
    <form @submit.prevent="guardarLibro" :key="key" class="form-libros">
      <!-- Grid contenedor -->
      <div class="grid-form">
        <!-- Columna izquierda -->
        <div class="col">
          <h3>Datos del libro</h3>
          <input type="text" placeholder="Título del libro" v-model.trim="nuevoLibro.titulo" />
          <input type="text" placeholder="Autor" v-model.trim="nuevoLibro.autor" />
          <textarea v-model="nuevoLibro.descripcion" placeholder="Descripción"></textarea>
        </div>

        <!-- Columna derecha -->
        <div class="col">
          <h3>Caracteristicas del libro</h3>
          <!-- checkbox booleano -->
          <label>
            Portada (URL de la imagen)
            <br /><input
              type="text"
              placeholder="Pega el enlace de la portada"
              v-model.trim="nuevoLibro.portada"
            />
          </label>

          <!-- Checkbox múltiple -->
          <h4>Formatos</h4>
          <div class="flex-row">
            <label><input type="checkbox" value="PDF" v-model="nuevoLibro.formato" /> PDF</label>
            <label><input type="checkbox" value="Word" v-model="nuevoLibro.formato" /> Word</label>
            <label
              ><input type="checkbox" value="Fisico" v-model="nuevoLibro.formato" /> Fisico</label
            >
          </div>

          <!-- Radio buttons -->
          <h4>Categoría</h4>
          <div class="flex-row">
            <label
              ><input type="radio" value="UX Design" v-model="nuevoLibro.categoria" /> UX
              Design</label
            >
            <label
              ><input type="radio" value="UI Design" v-model="nuevoLibro.categoria" />UI
              Design</label
            >
            <label
              ><input type="radio" value="Graphic Design" v-model="nuevoLibro.categoria" />Graphic
              Design</label
            >
            <label
              ><input type="radio" value="Web Design" v-model="nuevoLibro.categoria" />Web
              Design</label
            >
            <label
              ><input
                type="radio"
                value="Marketing"
                v-model="nuevoLibro.categoria"
              />Marketing</label
            >
          </div>

          <!-- Select y número -->
          <select v-model="nuevoLibro.editorial">
            <option disabled value="">Selecciona una editorial</option>
            <option>Planeta</option>
            <option>Penguin</option>
            <option>Nova</option>
          </select>
          <label>
            Stock disponible
            <br /><input type="number" v-model.number="nuevoLibro.stock" />
          </label>
          <label>
            Enlace de descarga
            <br /><input
              type="text"
              placeholder="Pega el enlace de descarga"
              v-model.trim="nuevoLibro.descarga"
            />
          </label>
        </div>
      </div>

      <!-- botones -->
      <div class="buttons-group">
        <Buttons type="submit">Guardar Libro</Buttons>
      </div>
    </form>
  </Container>
</template>

<style scoped>
/* Contenedor general del form */
.form-libros {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #eee;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Grid de 2 columnas */
.grid-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Inputs y textarea dark */
input[type='text'],
input[type='number'],
textarea,
select {
  background-color: var(--gray-800); /* fondo oscuro */
  color: #eee; /* texto claro */
  border: 1px solid #555; /* borde gris oscuro */
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  transition:
    border 0.2s,
    box-shadow 0.2s;
}

/* Focus en inputs */
input:focus,
textarea:focus,
select:focus {
  border-color: #3a8ee6;
  box-shadow: 0 0 5px rgba(58, 142, 230, 0.5);
  outline: none;
}

/* Placeholder */
input::placeholder,
textarea::placeholder {
  color: #999;
  opacity: 1;
}

/* Checkbox y radio */
label input[type='checkbox'],
label input[type='radio'] {
  accent-color: #3a8ee6; /* color moderno para check/radio */
}

/* Títulos y secciones */
h2,
h4 {
  color: #fff;
  margin-bottom: 0.5rem;
}

/* Botones */
button,
.buttons-group > * {
  background-color: var(--primary-600);
  color: #fff;
  border: none;
  padding: 0.55rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition:
    background-color 0.2s,
    transform 0.1s;
}

button:hover,
.buttons-group > *:hover {
  background-color: var(--primary-700);
  transform: translateY(-1px);
}

/* Botones activos */
button:active,
.buttons-group > *:active {
  transform: translateY(1px);
}

/* Checkbox Label */
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Botones en fila */
.buttons-group {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

/* alineacion input check */
.flex-row {
  display: flex;
  flex-wrap: wrap; /* permite pasar a segunda fila si no cabe */
  gap: 24px; /* separación horizontal y vertical entre elementos */
  align-items: center; /* alinea verticalmente los inputs con el texto */
  margin-bottom: 0.75rem;
}

.flex-row label {
  display: flex;
  align-items: center;
  gap: 6px; /* separación entre checkbox/radio y texto */
}

/* Inputs dentro de labels también ocupen todo el ancho del contenedor */
.col label input,
.col label textarea,
.col label select {
  width: 100%;
  box-sizing: border-box; /* incluye padding y borde en el ancho */
}
/* Responsivo: una columna en pantallas pequeñas */
@media (max-width: 768px) {
  .grid-form {
    grid-template-columns: 1fr;
  }
}
</style>
