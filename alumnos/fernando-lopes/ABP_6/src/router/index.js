import { createRouter, createWebHistory } from 'vue-router';
import FormLibro from '../views/FormLibro.vue';
import ListaLibros from '../views/ListaLibros.vue';

const routes = [
  {
    path: '/form-libro',
    name: 'FormLibro',
    component: FormLibro,
  },
  {
    path: '/',
    name: 'ListadoLibros',
    component: ListaLibros,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
