<script setup>
import { inject, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const libros = inject('libros');
const libro = computed(() => {
    return libros.value.find((l) => l.id == route.params.id);
});
</script>

<template>
<h1>Detalle Libro</h1>
<div v-if="libro">
<h2><strong>Título:</strong>{{ libro.titulo }}</h2>
<h3><strong>Autor:</strong>{{ libro.autor }}</h3>
<p><strong>Descripción:</strong>{{ libro.descripcion }}</p>
<p><strong>Formato:</strong><span v-for="(formato, index) in libro.formato" :key="index"> 
    {{ formato }}{{ index < libro.formato.length - 1 ? ', ' : '' }}
</span></p>
</div>

</template>