<script setup>
// importar herramientas de reactividad
import { reactive, inject } from 'vue';
import { useRouter } from "vue-router";

// función global enviada desde APP.vue
const agregarLibro = inject("agregarLibro");

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
function guardarLibro(){
  agregarLibro({ ...nuevoLibro});
  router.push("/");
}
</script>

<template>
  <div class="form-container">
    <h2>Registrar Nuevo Libro</h2>
    <p class="form-subtitle">Ingresa los detalles para añadir una obra a tu colección.</p>

    <form @submit.prevent="guardarLibro">
      
      <div class="form-group">
        <label>Título del libro</label>
        <input type="text" placeholder="Ej. El Laberinto de los Espíritus" v-model.trim="nuevoLibro.titulo" required/>
      </div>

      <div class="form-group">
        <label>Autor / Escritor</label>
        <input type="text" placeholder="Nombre completo" v-model.trim="nuevoLibro.autor" required/>
      </div>

      <div class="form-group">
        <label>Categoría y Editorial</label>
        <div class="form-check-group">
          <label class="form-check">
            <input type="radio" value="Novela" v-model="nuevoLibro.categoria" />
            Novela
          </label>
          <label class="form-check">
            <input type="radio" value="Tecnología" v-model="nuevoLibro.categoria" />
            Tecnología
          </label>
        </div>
        <select v-model="nuevoLibro.editorial" style="margin-top: 0.5rem;">
          <option disabled value="">Selecciona una editorial</option>
          <option>Planeta</option>
          <option>Penguin</option>
          <option>Nova</option>
        </select>
      </div>

      <div class="form-group">
        <label>Sinopsis del libro</label>
        <textarea v-model="nuevoLibro.descripcion" placeholder="Escriba una breve descripción del contenido o la trama..."></textarea>
      </div>

      <div class="form-group">
        <label>Formatos Disponibles</label>
        <div class="form-check-group">
          <label class="form-check">
            <input type="checkbox" value="Físico" v-model="nuevoLibro.formato" />
            Físico
          </label>
          <label class="form-check">
            <input type="checkbox" value="Digital" v-model="nuevoLibro.formato" />
            Digital
          </label>
        </div>
      </div>

      <div class="form-group" style="display: flex; gap: 1rem;">
        <div style="flex: 1;">
           <label>Stock</label>
           <input type="number" v-model.number="nuevoLibro.stock" min="0">
        </div>
        <div style="flex: 1; display: flex; align-items: flex-end; padding-bottom: 0.5rem;">
          <label class="form-check">
            <input type="checkbox" v-model="nuevoLibro.disponible" />
            Marcar como disponible
          </label>
        </div>
      </div>

      <div class="form-actions">
        <button type="button" class="btn-secondary" @click="router.push('/')">Cancelar</button>
        <button type="submit" class="btn-primary">Guardar Libro</button>
      </div>

    </form>
  </div>
</template>

<style scoped>
/* No es necesario agregar CSS aquí, todo lo hereda de main.css */
</style>