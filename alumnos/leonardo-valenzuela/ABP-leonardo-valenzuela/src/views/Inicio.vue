<script setup>
import { ref } from "vue";
import { useLibroStore } from "@/stores/libroStore";
import { useCategoriaStore } from "@/stores/categoriaStore";
import { v4 as uuidv4 } from "uuid";

const libroStore = useLibroStore();
const categoriaStore = useCategoriaStore();

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

const agregarLibro = () => {
  if (
    libroStructure.value.nombre === "" ||
    libroStructure.value.descripcion === ""
  ) {
    alert("Todos los campos son obligatorios");
    return;
  }
  libroStore.agregarLibro({ ...libroStructure.value, id: uuidv4() });
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
      (cat) => cat.nombre === categoriaStructure.value.nombre
    )
  ) {
    alert("La categoria ya existe");
    return;
  }
  categoriaStore.agregarCategoria({ ...categoriaStructure.value, id: uuidv4() });
  categoriaStructure.value.nombre = "";
};
</script>

<template>
  <div class="md-page">

    <header class="md-page-header">
      <h1 class="md-display-small">Biblioteca</h1>
      <p class="md-body-large">Gestiona tus libros y categorías</p>
    </header>

    <main class="md-layout">

      <section class="md-card">
        <h2 class="md-title-large">Nueva Categoría</h2>
        <p class="md-body-medium md-on-surface-variant">
          Las categorías te permiten organizar tus libros por género o temática.
        </p>

        <form @submit.prevent="agregarCategoria" class="md-form">
          <div class="md-text-field">
            <input
              id="cat-nombre"
              type="text"
              class="md-text-field__input"
              placeholder=" "
              v-model="categoriaStructure.nombre"
            />
            <label for="cat-nombre" class="md-text-field__label">
              Nombre de categoría
            </label>
            <fieldset class="md-text-field__outline">
              <legend class="md-text-field__legend"><span>Nombre de categoría</span></legend>
            </fieldset>
          </div>

          <button type="submit" class="md-button md-button--filled">
            <span class="md-button__icon">＋</span>
            Agregar categoría
          </button>
        </form>
      </section>

      <section v-if="categoriaStore.categorias.length > 0" class="md-card">
        <h2 class="md-title-large">Agregar Libro</h2>
        <p class="md-body-medium md-on-surface-variant">
          Completa la información del libro y selecciona su categoría.
        </p>

        <form @submit.prevent="agregarLibro" class="md-form">

          <div class="md-text-field">
            <input
              id="libro-nombre"
              type="text"
              class="md-text-field__input"
              placeholder=" "
              v-model="libroStructure.nombre"
            />
            <label for="libro-nombre" class="md-text-field__label">Nombre del libro</label>
            <fieldset class="md-text-field__outline">
              <legend class="md-text-field__legend"><span>Nombre del libro</span></legend>
            </fieldset>
          </div>

          <div class="md-text-field">
            <input
              id="libro-desc"
              type="text"
              class="md-text-field__input"
              placeholder=" "
              v-model="libroStructure.descripcion"
            />
            <label for="libro-desc" class="md-text-field__label">Descripción</label>
            <fieldset class="md-text-field__outline">
              <legend class="md-text-field__legend"><span>Descripción</span></legend>
            </fieldset>
          </div>

          <div class="md-text-field">
            <input
              id="libro-editor"
              type="text"
              class="md-text-field__input"
              placeholder=" "
              v-model="libroStructure.editor"
            />
            <label for="libro-editor" class="md-text-field__label">Editor</label>
            <fieldset class="md-text-field__outline">
              <legend class="md-text-field__legend"><span>Editor</span></legend>
            </fieldset>
          </div>

          <div class="md-chip-group-section">
            <label class="md-label-large">Categoría</label>
            <p class="md-body-small md-on-surface-variant">Selecciona una categoría para el libro</p>
            <div class="md-chip-group">
              <label
                v-for="cat in categoriaStore.getAllCategorias"
                :key="cat.id"
                class="md-filter-chip"
                :class="{ 'md-filter-chip--selected': libroStructure.categoria === cat.nombre }"
              >
                <input
                  type="radio"
                  :value="cat.nombre"
                  v-model="libroStructure.categoria"
                  class="md-filter-chip__input"
                />
                <span class="md-filter-chip__check">✓</span>
                {{ cat.nombre }}
              </label>
            </div>
          </div>

          <button type="submit" class="md-button md-button--filled">
            <span class="md-button__icon">📚</span>
            Agregar libro
          </button>
        </form>
      </section>

      <div v-else class="md-empty-state">
        <div class="md-empty-state__icon">📂</div>
        <h3 class="md-title-medium">Sin categorías aún</h3>
        <p class="md-body-medium md-on-surface-variant">
          Crea al menos una categoría para poder agregar libros.
        </p>
      </div>

    </main>
  </div>
</template>

<style scoped>
.md-page {
  font-family: 'Roboto', 'Google Sans', sans-serif;
  background-color: var(--md-sys-color-background);
  min-height: 100vh;
  padding: 24px;
  color: var(--md-sys-color-on-surface);
}

.md-page-header {
  margin-bottom: 32px;
}

.md-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 16px;
  max-width: 900px;
}

.md-card {
  background-color: var(--md-sys-color-surface);
  border-radius: var(--md-sys-shape-corner-extra-small);
  box-shadow: var(--md-sys-elevation-level1);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-left: 4px solid var(--md-sys-color-primary);
}

.md-display-small {
  font-size: var(--md-sys-typescale-display-small-size);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0;
  color: var(--md-sys-color-on-surface);
  margin: 0 0 4px 0;
}

.md-title-large {
  font-size: var(--md-sys-typescale-title-large-size);
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 0;
  color: var(--md-sys-color-on-surface);
  margin: 0;
}

.md-title-medium {
  font-size: var(--md-sys-typescale-title-medium-size);
  font-weight: 500;
  line-height: 1.4;
  color: var(--md-sys-color-on-surface);
  margin: 0 0 8px 0;
}

.md-label-large {
  display: block;
  font-size: var(--md-sys-typescale-label-large-size);
  font-weight: 500;
  letter-spacing: 0.1px;
  color: var(--md-sys-color-on-surface);
  margin-bottom: 4px;
}

.md-body-large {
  font-size: var(--md-sys-typescale-body-large-size);
  font-weight: 400;
  line-height: 1.5;
  color: var(--md-sys-color-on-surface-variant);
  margin: 0;
}

.md-body-medium {
  font-size: var(--md-sys-typescale-body-medium-size);
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
}

.md-body-small {
  font-size: var(--md-sys-typescale-body-small-size);
  font-weight: 400;
  line-height: 1.4;
  margin: 0 0 8px 0;
}

.md-on-surface-variant {
  color: var(--md-sys-color-on-surface-variant);
}

.md-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.md-text-field {
  position: relative;
  height: 56px;
}

.md-text-field__input {
  width: 100%;
  height: 100%;
  padding: 16px;
  font-size: 16px;
  font-family: inherit;
  color: var(--md-sys-color-on-surface);
  background: transparent;
  border: none;
  outline: none;
  box-sizing: border-box;
  border-radius: var(--md-sys-shape-corner-extra-small);
  position: relative;
  z-index: 1;
}

.md-text-field__label {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: var(--md-sys-color-on-surface-variant);
  pointer-events: none;
  transition: all 150ms cubic-bezier(0.2, 0, 0, 1);
  z-index: 2;
  background: white;
  padding: 0 4px;
}

.md-text-field__input:focus ~ .md-text-field__label,
.md-text-field__input:not(:placeholder-shown) ~ .md-text-field__label {
  top: 0;
  font-size: 12px;
  color: var(--md-sys-color-primary);
}

.md-text-field__outline {
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0 12px;
  border: 1px solid var(--md-sys-color-outline);
  border-radius: var(--md-sys-shape-corner-extra-small);
  pointer-events: none;
  transition: border-color 150ms, border-width 150ms;
}

.md-text-field__legend {
  font-size: 12px;
  height: 0;
  visibility: hidden;
  overflow: hidden;
  white-space: nowrap;
  max-width: 0.01px;
  transition: max-width 150ms cubic-bezier(0.2, 0, 0, 1);
}

.md-text-field__input:focus ~ .md-text-field__label ~ .md-text-field__outline .md-text-field__legend,
.md-text-field__input:not(:placeholder-shown) ~ .md-text-field__label ~ .md-text-field__outline .md-text-field__legend {
  max-width: 100%;
}

.md-text-field__input:focus ~ .md-text-field__outline {
  border-color: var(--md-sys-color-primary);
  border-width: 2px;
}

.md-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 40px;
  padding: 0 24px;
  border: none;
  border-radius: var(--md-sys-shape-corner-full);
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  letter-spacing: 0.1px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: box-shadow 200ms;
  align-self: flex-start;
}

.md-button--filled {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
}

.md-button--filled::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--md-sys-color-on-primary);
  opacity: 0;
  transition: opacity 200ms;
}

.md-button--filled:hover::before { opacity: 0.08; }
.md-button--filled:active::before { opacity: 0.12; }

.md-button--filled:hover {
  box-shadow: var(--md-sys-elevation-level1);
}

.md-button__icon {
  font-size: 18px;
}

.md-chip-group-section {
  display: flex;
  flex-direction: column;
}

.md-chip-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.md-filter-chip__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.md-filter-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 32px;
  padding: 0 12px;
  border: 1px solid var(--md-sys-color-outline);
  border-radius: var(--md-sys-shape-corner-small);
  font-size: 14px;
  font-family: inherit;
  color: var(--md-sys-color-on-surface-variant);
  cursor: pointer;
  transition: all 150ms;
  background: transparent;
  user-select: none;
}

.md-filter-chip:hover {
  background: rgba(103, 80, 164, 0.08);
}

.md-filter-chip__check {
  display: none;
  font-size: 16px;
}

.md-filter-chip--selected {
  background-color: var(--md-sys-color-primary-container);
  border-color: transparent;
  color: var(--md-sys-color-on-primary-container);
}

.md-filter-chip--selected .md-filter-chip__check {
  display: inline;
  color: var(--md-sys-color-primary);
}

.md-empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
  background-color: var(--md-sys-color-surface);
  border-radius: var(--md-sys-shape-corner-medium);
  box-shadow: var(--md-sys-elevation-level1);
}

.md-empty-state__icon {
  font-size: 48px;
  margin-bottom: 16px;
}
</style>