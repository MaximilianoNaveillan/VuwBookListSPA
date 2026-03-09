import { defineStore } from "pinia";

export const useCategoriaStore = defineStore("categoria", {
  state: () => ({
    categorias: [],
  }),
  getters: {
    getAllCategorias: (state) => state.categorias,
  },
  actions: {
    agregarCategoria(categoria) {
      this.categorias.push(categoria);
    },
    eliminarCategoria(id) {
      this.categorias = this.categorias.filter((categoria) => categoria.id !== id);
    },
  },
});