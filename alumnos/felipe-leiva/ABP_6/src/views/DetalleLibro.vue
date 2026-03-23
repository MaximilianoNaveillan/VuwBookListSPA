<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useLibrosStore } from '@/stores/librosStores';
import Container from '@/components/Container.vue';

const route = useRoute();
const store = useLibrosStore();

// Computamos el libro según el id de la ruta
const libro = computed(() => store.obtenerLibroPorId(route.params.id));
</script>

<template>
  <Container>
    <h1>Detalle libro</h1>
    <div v-if="libro" class="grid-form">
      <div class="col">
        <img :src="libro.portada" alt="Portada del libro" class="img-responsive" />
      </div>
      <div class="col">
        <h2><strong>Título:</strong> {{ libro.titulo }}</h2>
        <p><strong>Descripción:</strong> {{ libro.descripcion }}</p>
        <h3><strong>Autor:</strong> {{ libro.autor }}</h3>
        <div class="flex-row">
          <p><strong>Categoría:</strong> {{ libro.categoria }}</p>
          <p>
            <strong>Formato: </strong>
            <span v-for="(formato, index) in libro.formato" :key="index">
              {{ formato }}
            </span>
          </p>
          <p><strong>Editorial:</strong> {{ libro.editorial }}</p>
          <p v-if="libro.descarga">
            <a :href="libro.descarga" target="_blank" rel="noopener noreferrer" class="btn-primary">
              Descargar
            </a>
          </p>
        </div>
      </div>
    </div>
    <div v-if="libro.descarga" class="pdf-container">
      <iframe :src="libro.descarga" frameborder="0" class="pdf-viewer"></iframe>
    </div>

    <p v-else>Libro no encontrado</p>
  </Container>
</template>

<style scoped>
.flex-row {
  display: flex;
  flex-wrap: wrap; /* permite pasar a segunda fila si no cabe */
  gap: 24px; /* separación horizontal y vertical entre elementos */
  align-items: center; /* alinea verticalmente los inputs con el texto */
  margin-bottom: 0.75rem;
}

.grid-form {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
}

.col {
  display: flex;
  flex-direction: column;
}

.img-responsive {
  width: 100%;
  object-fit: cover;
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

.pdf-container {
  width: 100%;
  margin-top: 1rem;
}

.pdf-viewer {
  width: 100%;
  height: 800px;
  border: 1px solid #555;
  border-radius: 6px;
}

@media (max-width: 768px) {
  .grid-form {
    grid-template-columns: 1fr;
  }
}
</style>
