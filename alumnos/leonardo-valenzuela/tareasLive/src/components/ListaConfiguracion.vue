<script setup>
import { defineProps, ref } from "vue";

const emit = defineEmits(["cambiar"]);

const props = defineProps({
  tareas: {
    type: Array,
    required: true,
  },
});

const updateTarea = ref({
  id: null,
  titulo: "",
  descripcion: "",
});

const cambiarValorDeTarea = (nuevaTarea, tareaOriginal) => {
  if (nuevaTarea.titulo === "") {
    nuevaTarea.titulo = tareaOriginal.titulo;
  }
  if (nuevaTarea.descripcion === "") {
    nuevaTarea.descripcion = tareaOriginal.descripcion;
  }
  const nTarea = {
    ...tareaOriginal,
    ...nuevaTarea,
  };
  emit("cambiar", tareaOriginal.id, nTarea);
  updateTarea.value.titulo = "";
  updateTarea.value.descripcion = "";
};

</script>

<template>
  <h4>card configuración</h4>
  <section>
    <h4>Lista de Tareas</h4>
    <div v-for="tarea in props.tareas" :key="tarea.id">
      <div>
        <div>
          <p>
            <strong>{{ tarea.titulo }}</strong>
          </p>
          <input
            type="text"
            v-model="updateTarea.titulo"
            placeholder="Nuevo título"
          />
          <button @click="cambiarValorDeTarea(updateTarea, tarea)">
            Cambiar
          </button>
        </div>
        <div>
          <p>{{ tarea.descripcion }}</p>
          <input
            type="text"
            v-model="updateTarea.descripcion"
            placeholder="Nueva descripción"
          />
          <button @click="cambiarValorDeTarea(updateTarea, tarea)">
            Cambiar
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
