<script setup>
import { inject, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter(); // Necesario para el botón "Volver"
const libros = inject('libros');

const libro = computed(() => {
    return libros.value.find((l) => l.id == route.params.id);
});

const volver = () => {
    router.back();
};
</script>

<template>
  <div class="detalle-page">
    
    <nav class="back-nav">
      <button @click="volver" class="btn-back">
        <span style="margin-right: 8px;">←</span> Volver a la lista
      </button>
    </nav>

    <div v-if="libro">
      <article class="editorial-grid">
        
        <aside class="book-presentation">
          <div class="cover-wrapper">
             <img class="cover-image" src="https://via.placeholder.com/300x450/e2e8f0/475569?text=Portada" alt="Portada del libro"/>
          </div>
        </aside>

        <section class="book-details-content">
          
          <div class="status-badge" :class="{'disponible': libro.disponible, 'agotado': !libro.disponible}">
            {{ libro.disponible ? 'Disponible' : 'Agotado' }}
          </div>

          <h1 class="book-title">{{ libro.titulo }}</h1>
          <p class="book-author">por <span>{{ libro.autor }}</span></p>

          <div class="section-divider"></div>

          <span class="description-label">Resumen de Obra</span>
          <div class="description-body">
            <p class="description-text">
              {{ libro.descripcion || 'No hay descripción disponible para este libro.' }}
            </p>
          </div>

          <div class="section-divider"></div>

          <span class="description-label">Formatos y Metadatos</span>
          <div class="format-container">
            <span v-for="(formato, index) in libro.formato" :key="index" class="format-badge">
              🏷️ {{ formato }}
            </span>
             <span v-if="libro.categoria" class="format-badge category-badge">
              📚 {{ libro.categoria }}
            </span>
             <span v-if="libro.editorial" class="format-badge">
              🏢 {{ libro.editorial }}
            </span>
          </div>

          <footer class="actions-bar">
             <button class="btn-action btn-read" @click="router.push('/')">Volver al Inicio</button>
            <button class="btn-action btn-return" @click="volver">Regresar</button>
          </footer>

        </section>
      </article>
    </div>
    
    <div v-else class="mensaje-error">
      <p>El libro que buscas no fue encontrado o fue eliminado.</p>
      <button @click="volver" class="btn-action btn-return" style="margin-top: 1rem;">Volver</button>
    </div>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Newsreader:wght@400;600;700&family=Work+Sans:wght@400;500;600&display=swap');

.detalle-page {
  font-family: 'Work Sans', sans-serif;
  background-color: #f5fbf8; /* Superficie base */
  color: #171d1b;
  min-height: 80vh;
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

/* Botón Volver */
.back-nav {
  margin-bottom: 2rem;
}

.btn-back {
  background: none;
  border: none;
  color: #7e5bef;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: transform 0.2s;
}

.btn-back:hover {
  transform: translateX(-4px);
}

/* Layout Principal Reducido */
.editorial-grid {
  display: grid;
  grid-template-columns: 280px 1fr; /* Reducido de 400px a 280px */
  gap: 3rem;
  background: #ffffff;
  border-radius: 4px;
  padding: 3rem;
  box-shadow: 0 20px 40px -12px rgba(23, 29, 27, 0.12);
}

/* Columna Izquierda: Portada */
.book-presentation {
  position: sticky;
  top: 2rem;
}

.cover-wrapper {
  width: 100%;
  aspect-ratio: 2/3;
  overflow: hidden;
  box-shadow: 0 12px 32px -8px rgba(23, 29, 27, 0.15); /* Sombra ajustada */
  border-radius: 2px;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Columna Derecha: Detalles */
.book-details-content {
  display: flex;
  flex-direction: column;
}

/* Badges de Estado */
.status-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 2px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
  width: fit-content;
}

.disponible {
  background: rgba(0, 168, 150, 0.08);
  color: #006b5f;
}

.agotado {
  background: #FEE2E2;
  color: #991B1B;
}

/* Títulos y Tipografía */
.book-title {
  font-family: 'Newsreader', serif;
  font-size: 2.5rem; /* Reducido de 3.5rem */
  line-height: 1.1;
  font-weight: 700;
  color: #171d1b;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

.book-author {
  font-size: 1.1rem;
  color: #64748b;
  margin-bottom: 2rem;
}

.book-author span {
  color: #171d1b;
  font-weight: 500;
}

/* Separadores Lineales */
.section-divider {
  height: 1px;
  background: #e2e8f0;
  margin: 1.5rem 0;
  width: 100%;
}

/* Descripción */
.description-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #64748b;
  margin-bottom: 1rem;
  display: block;
  font-weight: 600;
}

.description-text {
  font-size: 1.05rem;
  color: #334155;
  line-height: 1.7;
  margin-bottom: 1rem;
}

/* Contenedores de Formato (Badges) */
.format-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.format-badge {
  border: 1px solid #e2e8f0;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  font-size: 0.85rem;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.category-badge {
  background-color: rgba(126, 91, 239, 0.05);
  color: #5b21b6;
  border-color: rgba(126, 91, 239, 0.2);
}

/* Botones de Acción Finales */
.actions-bar {
  margin-top: 2.5rem;
  display: flex;
  gap: 1rem;
}

.btn-action {
  padding: 0.8rem 1.5rem;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.85rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn-read {
  background-color: #00a896;
  color: white;
}

.btn-read:hover {
  background-color: #006b5f;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -5px rgba(0, 168, 150, 0.3);
}

.btn-return {
  background-color: #7e5bef;
  color: white;
}

.btn-return:hover {
  background-color: #5b21b6;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -5px rgba(126, 91, 239, 0.3);
}

/* Mensaje de Error */
.mensaje-error {
  text-align: center;
  padding: 4rem;
  background: #ffffff;
  border-radius: 4px;
  color: #64748b;
  font-size: 1.1rem;
}

/* Diseño Responsivo */
@media (max-width: 768px) {
  .editorial-grid {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 2rem;
  }
  .book-presentation {
    position: static;
    max-width: 200px;
    margin: 0 auto;
  }
  .book-title {
    font-size: 2rem;
  }
}
</style>