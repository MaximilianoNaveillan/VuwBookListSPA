import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLibrosStore = defineStore('libros', () => {
  const libros = ref([]);

  function agregarLibro(libro) {
    const nuevo = {
      ...libro,
      id: Date.now(),
    };

    libros.value.push(nuevo);
  }

  function obtenerLibroPorId(id) {
    return libros.value.find((libro) => libro.id == id);
  }

  return {
    libros,
    agregarLibro,
    obtenerLibroPorId,
  };
});
