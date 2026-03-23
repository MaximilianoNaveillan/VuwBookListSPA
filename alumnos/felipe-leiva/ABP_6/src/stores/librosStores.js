import { defineStore } from 'pinia';

export const useLibrosStore = defineStore('libros', {
  state: () => ({
    libros: [
      {
        id: 0,
        portada: 'https://i.postimg.cc/7ZRKmJg3/The_UX_Research_Methodology_Guidebook.png',
        titulo: 'UserTesting eBook UX Research Methodologies',
        autor: 'User Testing',
        descripcion:
          'Recopilar excelentes comentarios de los usuarios es fundamental para crear un gran producto o servicio. Y sabes que necesitas investigar para conseguirlos.',
        disponible: true,
        formato: 'Digital',
        categoria: 'UX Design',
        editorial: 'User Testing',
        stock: 'Download',
        descarga: 'https://drive.google.com/file/d/1g75tybPx5XhCc3VXLWuk7ELZmdkHOvFq/preview',
      },
      {
        id: 1,
        portada: 'https://i.postimg.cc/MpL9dfyR/The_Basics_of_User_Experience_Design.png',
        titulo: 'The Basics of User Experience Design',
        autor: 'INTERACTION DESIGN FOUNDATION',
        descripcion:
          'La cantidad de temas que abarca el diseño UX es asombrosa: diseño de interacción, pensamiento de diseño y usabilidad, por nombrar solo algunos.',
        disponible: true,
        formato: 'Digital',
        categoria: 'UX Design',
        editorial: 'INTERACTION DESIGN FOUNDATION',
        stock: 'Download',
        descarga: 'https://drive.google.com/file/d/1DxY6uQ4KNUJwOZxdUK9kZZbvMvC9o_bQ/preview',
      },
      {
        id: 2,
        portada:
          'https://i.postimg.cc/mgnm81QQ/Prueba_de_usabilidad_la_guia_definitiva_by_bardo.png',
        titulo: 'Pruebas de Usabilidad',
        autor: 'Bardo',
        descripcion:
          'Hoy en día cualquier metodología de diseño de producto está basada en la observación, el entendimiento y el análisis de una o más variables comparables para testear y validar hipótesis y minimizar el riesgo que existe al construir un producto.',
        disponible: true,
        formato: 'Digital',
        categoria: 'UX Design',
        editorial: 'Bardo',
        stock: 'Download',
        descarga: 'https://drive.google.com/file/d/1n_GkuCwC-cT9EfJueyXEi9aHEAUAJTV-/preview',
      },
      {
        id: 3,
        portada:
          'https://i.postimg.cc/Njndp21m/Lean_UX_Applying_Lean_Principles_to_Improve_User_Experience.png',
        titulo: 'Lean UX ',
        autor: 'O´reilly',
        descripcion:
          'Customer Development y Lean Startup cambiaron la forma en que se construyen los negocios. Este libro integra ambas metodologías en UX para crear experiencias más baratas, rápidas y mejores.',
        disponible: true,
        formato: 'Digital',
        categoria: 'UX Design',
        editorial: 'O´reilly',
        stock: 'Download',
        descarga: 'https://drive.google.com/file/d/1fNykcMk9Y-h89yqFfF5ATYz0tGa7qPVW/preview',
      },
      // ... resto de libros
    ],
  }),
  actions: {
    agregarLibro(libro) {
      this.libros.push({ ...libro, id: Date.now() });
    },
    eliminarLibro(id) {
      this.libros = this.libros.filter((libro) => libro.id !== id);
    },
    obtenerLibroPorId(id) {
      return this.libros.find((libro) => libro.id === Number(id));
    },
  },
});
