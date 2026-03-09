<script setup>
import { ref } from "vue";
import { useLibroStore } from "@/stores/libroStore";
import { useCategoriaStore } from "@/stores/categoriaStore";
import { v4 as uuidv4 } from "uuid";

// conexion con la store
const libroStore = useLibroStore();
const categoriaStore = useCategoriaStore();

//structuras
const libroStructure = ref({
  id: null,
  nombre: "",
  descripcion: "",
  editor: "",
  categoria: "",
});

const categoriaStructure = ref({
  id: null,
  nombre: "",
});

// funciones
const agregarLibro = () => {
  if (
    libroStructure.value.nombre === "" ||
    libroStructure.value.descripcion === ""
  ) {
    alert("Todos los campos son obligatorios");
    return;
  }

  libroStore.agregarLibro({ ...libroStructure.value, id: uuidv4() });
  console.log(libroStore);

  //reseteo del formulario
  libroStructure.value.nombre = "";
  libroStructure.value.descripcion = "";
  libroStructure.value.editor = "";
  libroStructure.value.categoria = "";
};

const agregarCategoria = () => {
  if (categoriaStructure.value.nombre === "") {
    alert("Todos los campos son obligatorios");
    return;
  }
  if (
    categoriaStore.categorias.find(
      (categoria) => categoria.nombre === categoriaStructure.value.nombre,
    )
  ) {
    alert("La categoria ya existe");
    return;
  }
  const nuevaCategoria = {
    id: uuidv4(),
    nombre: categoriaStructure.value.nombre,
  };

  categoriaStore.agregarCategoria(nuevaCategoria);

  //reseteo del formulario
  categoriaStructure.value.nombre = "";
};
</script>
<template>
  <h2>
    <h2>Inicio</h2>
  </h2>
  <section>
    <h4>categoria formulario</h4>
    <form @submit.prevent="agregarCategoria">
      <input
        type="text"
        placeholder="Nombre"
        v-model="categoriaStructure.nombre"
      />
      <button type="submit">Agregar</button>
    </form>
  </section>

  <section v-if="categoriaStore.categorias.length > 0" class="form-container">
    <h3>Formulario de Libros</h3>
    <form @submit.prevent="agregarLibro" class="form-libro">
      <div class="form-libro-section">
        <label for="nombre">Nombre</label>
        <input
          type="text"
          placeholder="Nombre"
          v-model="libroStructure.nombre"
        />
      </div>
      <div class="form-libro-section">
        <label for="descripcion">Descripcion</label>
        <input
          type="text"
          placeholder="Descripcion"
          v-model="libroStructure.descripcion"
        />
      </div>
      <div class="form-libro-section">
        <label for="editor">Editor</label>
        <input
          type="text"
          placeholder="Editor"
          v-model="libroStructure.editor"
        />
      </div>
      <div>
        <h4>categorias</h4>
        <div>
          <label v-for="cat in categoriaStore.getAllCategorias" :key="cat.id">
            <input
              type="radio"
              :value="cat.nombre"
              v-model="libroStructure.categoria"
            />
            {{ cat.nombre }}
          </label>
        </div>
      </div>
      <button type="submit">Agregar</button>
    </form>
  </section>
  <h3 v-else>
    <p>No hay categorias</p>
  </h3>
</template>

<style>

/*formulario libros*/ 
.form-container {
  width: 400px;
}
.form-libro {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.form-libro-section {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
