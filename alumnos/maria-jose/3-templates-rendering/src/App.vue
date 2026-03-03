<script setup>
// Aquí se importa la referencia que usaremos más tarde
  import { ref } from 'vue';

  const productos = ref([]);

// Crear objeto de referencia del producto

const producto = ref({
id: Date.now(),
nombre: "",
precio: 0,
stock: 0,
estaEnVenta: false,
})

// Iterar es recorrer todos los datos del array uno por uno (pasar por cada elemento)

function crearProducto() {
console.log(producto.value.nombre)
productos.value.push(producto.value)
producto.value.nombre = ""
producto.value.precio = 0
producto.value.stock = 0
producto.value.estaEnVenta = false
console.log(productos.value.length)
}
</script>


<template>
  <h1>Products</h1>
  <Section>
  <h3>Formulario</h3>
  <form @submit.prevent="crearProducto">
    <label for="nombre">Nombre</label>
    <input type="text" v-model="producto.nombre">
    <label for="precio">Precio</label>
    <input type="number" v-model="producto.precio">
    <label for="stock">Stock</label>
    <input type="number" v-model="producto.stock">
    <label for="estaEnVenta">¿Está en venta?</label>
    <input type= "checkbox" v-model="producto.estaEnVenta">
    <button type="submit">Enviar</button>
  </form>  
  </Section>  
  
<Section>
<h3>Productos</h3>
<!-- 
1. Iterar los elementos de productos con un v-for
2. Verificación de stock con v-if y v-else
3. Composición de estilos
 -->
  </Section>
</template>

<style scoped>

</style>
