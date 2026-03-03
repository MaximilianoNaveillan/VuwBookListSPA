<script>
// Rendering (renderizado) se refiere al proceso de tomar los datos de la aplicación y convertirlos en elementos
// visibles en la interfaz de usuario (HTML en el DOM). Osea, transformar datos reactivos en elementos visuales
// y mantenerlos actualizados automáticamente cuando esos datos cambian.

// El DOM es una estructura en memoria que representan ka pagina Web y permite que los lenguajes de programacion
// interactuen con ella. Es decir, el DOM es un mapa interno de nuestro HTML en donde cada etiqueta, atributo y
// texto se convierte en un objeto que se puede manipular.

export default {
  // "export default" -> Define el componente Vue que se va a exportar para ser usado en la aplicación. App

  name: 'App',
  data() {
    // data -> Es una función que devuelve un objeto con los datos reactivos del componente. (Lista de Productos)
    return {
      productos: [
        { id: 1, nombre: 'Laptop', precio: 499990, stock: 5 },
        { id: 2, nombre: 'Mouse', precio: 7990, stock: 10 },
        { id: 3, nombre: 'Teclado', precio: 12990, stock: 0 },
        { id: 4, nombre: 'Memoria RAM', precio: 35990, stock: 15 },
      ],
    };
  },
  methods: {
    // methods: es un objeto en donde definimos funciones o métodos que podemos usar en el template (lo que se verá en pantalla)
    // vender(producto) -> Recibe un objeto producto como parámetro. Este objeto normalmente viene de una directiva "v-for" en
    // el template.

    // Si el stock del producto es mayor a 0, va disminuyendo en una unidad el stock cada vez que se presiona el botón "vender"
    vender(producto) {
      if (producto.stock > 0) {
        producto.stock--;
      }
    },
  },
};
</script>

<template>
  <!-- Template es la parte en donde se escribe lo que se va a ver en la pantalla. Es el HTML que Vue va a mostrar en la página.
Si el componente fuera una casa: 
template: Es lo que se ve. Ejemplo: puertas, ventanas, paredes.
script: Es la logica que hace que una casa tenga actividad. Ejemplo: abir puertas, cerrar ventanas.
style: Es como se ve la casa, colores, tamaño. -->

  <div class="container">
    <h1>Lista de Productos</h1>

    <!-- {{ ... }} = Es una interpolacion en Vue -> Es decir reemplaza lo que está dentro de las llaves por el 
      valor real de esa expresión. "productos.length" = Es la propiedad que indica cuántos elementos hay en el arreglo-->
    <p>Total de productos: {{ productos.length }}</p>

    <!--  Renderizado = Es mostrar en pantalla lo que dice el template. -->
    <!--  En el renderizado en Vue, éste lo hace reactivo: Osea, los cambios en los datos se reflejan automáticamente.-->

    <!-- Renderizado condicional general "v-if" es una directiva que compara si no hay productos para la venta, entonces 
     muestra el mensaje "No hay productos disponibles"-->
    <p v-if="productos.length === 0">No hay productos disponibles.</p>

    <!--  Las directiva "v-else" hace un renderizado condicional, "v-for" es una directiva que recorre un arreglo    -->
    <ul v-else>
      <!-- "v-for" es una directiva que recorre todos los productos y crea un <li> 
        de forma dinámica para cada uno. Y dentro de cada <li> o lista muestra los datos
        del nombre, precio y stock-->
      <li v-for="producto in productos" :key="producto.id" class="producto">
        <!-- Interpolaciones -->
        <h3>{{ producto.nombre }}</h3>
        <p>Precio: ${{ producto.precio }}</p>
        <p>Stock: {{ producto.stock }}</p>

        <!-- Renderizado condicional de la directiva vi-if por producto -->
        <!-- Se compara si el stock de cada producto es mayor a cero. -->
        <!-- A medida que se va presionando el botón "Vender" en cada 
         producto, se va disminuyendo en uno la cantidad del producto -->
        <p v-if="producto.stock > 0" class="disponible">✅ Disponible</p>
        <p v-else class="agotado">❌ Agotado</p>

        <!-- El evento "vender" asegura que solo se pueda vender un producto si hay unidades disponibles.-->
        <button @click.prevent="vender(producto)" :disabled="producto.stock === 0">Vender</button>
      </li>
    </ul>
  </div>
</template>

<style>
.container {
  font-family: Arial;
  padding: 20px;
}

.producto {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.disponible {
  color: green;
}

.agotado {
  color: red;
}

button {
  margin-top: 5px;
}
</style>
