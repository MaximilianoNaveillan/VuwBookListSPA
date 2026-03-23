import { createRouter, createWebHistory } from 'vue-router';
import FormLibro from '../views/FormLibro.vue';
import ListaLibros from '../views/ListaLibros.vue';
import DetalleLibro from '../views/DetalleLibro.vue';
import '../assets/styles/main.css';

const routes = [
  {
    path: '/',
    name: 'ListaLibros',
    component: ListaLibros,
  },
  {
    path: '/form-libro',
    name: 'FormLibro',
    component: FormLibro,
  },
  {
    path: '/detalle-libro/:id',
    name: 'DetalleLibro',
    component: DetalleLibro,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
