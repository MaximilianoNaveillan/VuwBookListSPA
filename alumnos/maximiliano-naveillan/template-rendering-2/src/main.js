// Importamos la función createApp desde la biblioteca de Vue y el componente raíz App.vue
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
// Creamos una instancia de la aplicación Vue utilizando createApp y montamos la aplicación en el elemento del DOM con el id 'app'
app.directive('focus', {
  mounted(el) {
    el.focus();
  },
});
app.mount('#app');
