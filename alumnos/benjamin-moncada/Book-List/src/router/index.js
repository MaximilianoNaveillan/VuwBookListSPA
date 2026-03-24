import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookListView from '../views/BookListView.vue'
import BookDetailView from '../views/BookDetailView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/libros', name: 'book-list', component: BookListView },
    { path: '/libros/:id', name: 'book-detail', component: BookDetailView, props: true }
  ]
})

export default router