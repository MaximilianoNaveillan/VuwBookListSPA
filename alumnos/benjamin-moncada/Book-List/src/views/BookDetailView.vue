<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({ id: { type: String, required: true } })
const router = useRouter()

// Simulamos la obtención de datos del libro
const bookDetail = ref(null)

onMounted(() => {
  // En una app real, aquí harías un fetch() usando el props.id
  // Por ahora, solo lo mostramos de forma ilustrativa
  bookDetail.value = {
    id: props.id,
    description: 'Descripción detallada obtenida de la base de datos para este libro específico. Aquí iría la sinopsis completa, número de páginas, ISBN, etc.'
  }
})

const goBack = () => {
  router.push('/libros')
}
</script>

<template>
  <div class="detail-view" v-if="bookDetail">
    <h2>Detalles del Libro (ID: {{ bookDetail.id }})</h2>
    <div class="content-box">
      <p>{{ bookDetail.description }}</p>
    </div>
    <button @click="goBack" class="btn-back">⬅ Volver al catálogo</button>
  </div>
</template>

<style scoped>
.detail-view { max-width: 600px; margin: 0 auto; }
.content-box { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1.5rem; line-height: 1.6; }
.btn-back { background: #2c3e50; color: white; border: none; padding: 0.6rem 1.2rem; border-radius: 4px; cursor: pointer; }
</style>