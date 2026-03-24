<template>
  <div class="home">
    <h1>Bienvenido a la Editorial Nova</h1>
    <p>El sistema de gestión de catálogo literario más eficiente.</p>
    <router-link to="/libros" class="btn-start">Ir al Catálogo</router-link>
  </div>
</template>

<style scoped>
.home { text-align: center; margin-top: 4rem; }
h1 { color: #2c3e50; }
p { color: #666; font-size: 1.1rem; margin-bottom: 2rem; }
.btn-start { background-color: #42b983; color: white; padding: 0.8rem 1.5rem; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 1.1rem; }
</style>