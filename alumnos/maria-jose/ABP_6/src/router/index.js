import { createRouter, createWebHistory } from 'vue-router'
import FormLibro from '../views/FormLibro.vue'
import ListaLibros from '../views/ListaLibros.vue'

const routes =[
    {
        path: '/',
        name: 'ListaLibros',
        component: ListaLibros,
    },
    {
        path:"/form-libros",
        name:"FormLibro",
        component: FormLibro
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router