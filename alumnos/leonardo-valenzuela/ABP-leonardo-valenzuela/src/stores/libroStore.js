import { defineStore } from "pinia";

export const useLibroStore = defineStore("libro", {
  state: () => ({
    libros: [],
  }),
  getters: {
    getTotalLibros: (state) => state.libros.length,
    getLibroById: (state) => (id) =>
      state.libros.find((libro) => libro.id === id),
  },
  actions: {
    agregarLibro(libro) {
      this.libros.push(libro);
    },
    eliminarLibro(id) {
      this.libros = this.libros.filter((libro) => libro.id !== id);
    },
  },
});