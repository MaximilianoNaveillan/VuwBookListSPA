<script setup>
import { useLibrosStore } from '@/stores/librosStores';
import Card from '@/components/Card.vue';
import Buttons from '@/components/Buttons.vue';

const store = useLibrosStore();
/* funcion eliminar con alerta de confirmacion*/
function eliminar(id) {
  const confirmar = confirm('¿Eliminar este libro?');

  if (confirmar) {
    store.eliminarLibro(id);
  }
}
</script>

<template>
  <div class="grid-libros">
    <Card v-for="libro in store.libros" :key="libro.id">
      <!-- HEADER -->

      <template #c-header>
        <img
          v-if="libro.portada"
          :src="libro.portada"
          alt="Portada del libro"
          class="img-responsive"
        />
      </template>

      <!-- BODY -->

      <template #c-body>
        <h3 class="titulo-texto">{{ libro.titulo }}</h3>

        <h5 class="autor-texto">Autor: {{ libro.autor }}</h5>

        <p><strong>Formato:</strong> {{ libro.formato }}</p>

        <p class="descripcion-texto">{{ libro.descripcion }}</p>
      </template>

      <!-- FOOTER -->

      <template #c-footer>
        <a
          v-if="libro.descarga"
          :href="libro.descarga"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary"
        >
          Descargar
        </a>
        <router-link :to="`/detalle-libro/${libro.id}`" class="btn-secondary">
          Ver detalles
        </router-link>

        <button class="btn-icon" @click="eliminar(libro.id)">🗑</button>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.grid-libros {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.btn-primary {
  background: var(--primary-700);
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
}

.btn-secondary {
  color: var(--primary-50);
  background: transparent;
  padding: 8px 12px;
  border: 1px solid var(--primary-50);
  border-radius: 6px;
  text-decoration: none;
}

.btn-icon {
  color: var(--primary-50);
  background: transparent;
  padding: 8px 12px;
  border: 1px solid var(--primary-50);
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
}

.img-responsive {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.autor-texto {
  white-space: nowrap; /* Mantiene todo en una sola línea */
  overflow: hidden; /* Oculta el texto que se desborda */
  text-overflow: ellipsis; /* Muestra "..." al final */
}

.titulo-texto {
  display: -webkit-box; /* Define un contenedor flexible */
  -webkit-line-clamp: 2; /* Limita a 2 líneas */
  -webkit-box-orient: vertical; /* Orientación vertical */
  overflow: hidden; /* Oculta el exceso */
  text-overflow: ellipsis; /* Añade "..." */
  min-height: 90px; /* Establece una altura mínima para evitar que el texto se corte demasiado */
}

.descripcion-texto {
  display: -webkit-box; /* Define un contenedor flexible */
  -webkit-line-clamp: 4; /* Limita a 2 líneas */
  -webkit-box-orient: vertical; /* Orientación vertical */
  overflow: hidden; /* Oculta el exceso */
  text-overflow: ellipsis; /* Añade "..." */
}
</style>
