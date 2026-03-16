<script setup>
const props = defineProps({
  nombre: String,
});

const model = defineModel();
</script>
<template>
  <div class="input-text-field">
    <textarea
      :id="props.nombre"
      placeholder=" "
      v-model="model"
      class="input-text-field__input"
    ></textarea>

    <label :for="props.nombre" class="input-text-field__label">
      {{ props.nombre }}
    </label>
  </div>
</template>

<style scoped>
textarea {
  min-width: 100%;
}
.input-text-field {
  position: relative;
  height: 65px;
}

.input-text-field__input {
  width: 100%;
  height: 100%;
  padding: 16px;
  border: none;
  outline: none;
  font-size: 16px;
  color: var(--md-sys-color-on-surface);
  border: 1px solid var(--primary);
  background-color: transparent;
  position: relative;
  border-radius: var(--md-sys-shape-corner-extra-small);
}

.input-text-field__label {
  position: absolute;
  left: 16px;
  top: 50%;
  padding: 0 4px;
  transform: translateY(-50%);
  color: var(--md-sys-color-on-surface-variant);
  transition: all 150ms cubic-bezier(0.2, 0, 0, 1);
}

.input-text-field__input:focus ~ .input-text-field__label,
.input-text-field__input:not(:placeholder-shown) ~ .input-text-field__label {
  top: 0;
  font-size: 12px;
  color: var(--primary-dark);
  background-color: var(--md-sys-color-on-primary);
}

.input-text-field__input:focus,
.input-text-field__input:not(:placeholder-shown) {
  border-color: var(--primary-dark);
  border-width: 2px;
}
</style>
