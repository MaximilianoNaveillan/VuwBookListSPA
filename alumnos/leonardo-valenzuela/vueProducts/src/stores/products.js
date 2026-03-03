import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
  }),
  getters: {
    getAllProducts: (state) => state.products,
    getProductById: (state) => (id) =>
      state.products.find((product) => product.id === id),
  },
  actions: {
    addProduct(product) {
      this.products.push(product);
    },
    updateProduct(updatedProduct) {
      this.products.findIndex((p) => p.id === updatedProduct.id);
    },
  },
});

//structure products in store
const products = {
  id: Number,
  nombre: String,
  precio: Number,
  stock: Number,
  estaEnVenta: Boolean,
};

