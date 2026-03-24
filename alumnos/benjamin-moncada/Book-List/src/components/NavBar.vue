<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">📖 Editorial Nova</router-link>
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/libros">Catálogo</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; background-color: #2c3e50; }
.logo a { color: #fff; font-size: 1.2rem; text-decoration: none; font-weight: bold; }
.nav-links { list-style: none; display: flex; gap: 1.5rem; margin: 0; padding: 0; }
.nav-links a { color: #cbd5e1; text-decoration: none; font-weight: 500; transition: color 0.3s; }
.nav-links a:hover { color: white; }
.nav-links a.router-link-exact-active { color: #42b983; }
</style>