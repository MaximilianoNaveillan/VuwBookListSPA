import { defineStore } from 'pinia';

export const useLibrosStore = defineStore('libros', {
  state: () => ({
    libros: [
      {
        id: 0,
        titulo: 'Introducción a JavaScript',
        autor: 'Carlos Ramírez',
        descripcion: 'Guía práctica para aprender los fundamentos de JavaScript desde cero.',
        disponible: true,
        formato: ['Físico', 'Digital'],
        categoria: 'Tecnología',
        editorial: 'Penguin',
        stock: 12,
      },
      {
        id: 1,
        titulo: 'Arquitectura de Software Moderna',
        autor: 'Laura Méndez',
        descripcion: 'Explora patrones y buenas prácticas para diseñar aplicaciones escalables.',
        disponible: true,
        formato: ['Digital'],
        categoria: 'Tecnología',
        editorial: "O'Reilly",
        stock: 8,
      },
    ],
  }),
  actions: {
    agregarLibro(libro) {
      //Agregar un ID único
      const nuevo = {
        ...libro,
        id: Date.now(),
      };
      // Agregar el nuevo libro al array de libros
      this.libros.push(nuevo);
    },
  },
});
