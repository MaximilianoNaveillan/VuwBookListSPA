import { createRouter, createWebHistory } from 'vue-router';
import FormLibro from '../views/FormLibro.vue';
import ListaLibros from '../views/ListaLibros.vue';
import DetalleLibro from '@/views/DetalleLibro.vue';
/* 
obj --> {clave:valor,clave:valor....}
*/

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

  {
    path: '/detalle-libro/:id',
    name: 'DetalleLibro',
    component: DetalleLibro,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
