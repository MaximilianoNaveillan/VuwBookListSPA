import { createRouter, createWebHistory } from "vue-router";
import Detalle from "@/views/Detalle.vue";
import Inicio from "@/views/Inicio.vue";
import Lista from "@/views/Lista.vue";

const routes = [
  {
    path: "/",
    name: "inicio",
    component: Inicio,
  },
  {
    path: "/detalle/:id",
    name: "detalle",
    component: Detalle,
  },
  {
    path: "/lista",
    name: "lista",
    component: Lista,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
