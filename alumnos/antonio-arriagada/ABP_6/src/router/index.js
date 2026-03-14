import { createRouter, createWebHistory } from 'vue-router';
import ListaLibros from '@/views/ListaLibros.vue';
import FormLibro from '@/views/FormLibro.vue';
const routes = [
  { path: '/', name: 'ListaLibros', component: ListaLibros },
  { path: '/form-libros', name: 'FormLibro', component: FormLibro },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
