<script setup>
import { inject } from "vue";

// Props globales inyectadas desde App.vue
const libros = inject("libros");
const eliminarLibro = inject("eliminarLibro");
</script>

<template>
  <div>
    <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: #2D3436;">Explorar mi biblioteca</h2>

    <div v-if="libros.length === 0" class="empty-state">
      <p>No hay libros registrados aún. Agrega uno desde el formulario.</p>
    </div>

    <section v-else class="book-list">
      <article v-for="libro in libros" :key="libro.id" class="book-card">
        
        <img 
          class="book-cover" 
          src="https://via.placeholder.com/100x150/e2e8f0/475569?text=Libro" 
          alt="Portada genérica" 
        />

        <div class="book-details">
          <h3 class="book-title">{{ libro.titulo }}</h3>
          <p class="book-author">{{ libro.autor }}</p>
          
          <p class="book-meta">
            Editorial {{ libro.editorial || 'No especificada' }} • Stock: {{ libro.stock }} 
            <span v-if="libro.disponible" style="color: #009D96; font-weight: 600;"> • Disponible</span>
            <span v-else style="color: #EF4444; font-weight: 600;"> • Agotado</span>
          </p>

          <div class="book-tags">
            <span v-if="libro.categoria" class="tag tag-genre">{{ libro.categoria }}</span>
            <span v-for="(formato, index) in libro.formato" :key="index" class="tag tag-mood">
              {{ formato }}
            </span>
          </div>
        </div>

        <div class="book-actions">
          <router-link :to="`detalle-libro/${libro.id}`" class="btn btn-primary">
            Ver Detalle <span class="dropdown-arrow">▶</span>
          </router-link>
          
          <button @click="eliminarLibro(libro.id)" class="btn btn-danger-outline">
            Eliminar Libro
          </button>
        </div>

      </article>
    </section>
  </div>
</template>

<style scoped>
/* Estilos extraídos del ZIP y aislados solo para este componente */
.book-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.book-card {
  background: #ffffff;
  padding: 24px;
  display: flex;
  gap: 24px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  transition: background-color 0.2s, box-shadow 0.2s;
}

.book-card:hover {
  background-color: #fafafa;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.book-cover {
  width: 100px;
  height: 150px;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  flex-shrink: 0;
  border-radius: 4px;
}

.book-details {
  flex-grow: 1;
}

.book-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2D3436;
  margin: 0 0 4px 0;
}

.book-author {
  font-size: 0.95rem;
  color: #636E72;
  margin: 0 0 12px 0;
}

.book-meta {
  font-size: 0.85rem;
  color: #636E72;
  margin: 0 0 16px 0;
}

.book-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  text-transform: lowercase;
}

.tag-genre {
  color: #E91E63;
  background: #FCE4EC;
}

.tag-mood {
  color: #8247E5;
  background: #F3E5F5;
}

.book-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 180px;
  justify-content: center;
}

.btn {
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-primary {
  background-color: #009D96;
  color: #ffffff;
  justify-content: space-between;
}

.btn-primary:hover {
  background-color: #0B5D5E;
}

.dropdown-arrow {
  border-left: 1px solid rgba(255,255,255,0.3);
  padding-left: 10px;
  margin-left: 10px;
}

.btn-danger-outline {
  background-color: #ffffff;
  border: 1px solid #E0E0E0;
  color: #636E72;
}

.btn-danger-outline:hover {
  background-color: #FEF2F2;
  border-color: #EF4444;
  color: #EF4444;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  background-color: #ffffff;
  border: 1px dashed #E0E0E0;
  border-radius: 8px;
  color: #636E72;
}
</style>