<script setup>
const props = defineProps({
  label: String,
  value: String,
});

const model = defineModel();
</script>

<template>
  <div class="checkbox-container">
    <label class="v-checkbox">
      <input type="checkbox" :value="value" v-model="model" />
      <span class="checkbox-box">
        <svg viewBox="0 0 24 24" class="check-icon">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
      <span class="checkbox-label">{{ label }}</span>
    </label>
  </div>
</template>

<style scoped>
.checkbox-container {
  font-family: sans-serif;
}

.v-checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
}

/* Ocultar el input type checkbox */
.v-checkbox input {
  display: none;
}

/* CAJA */
.checkbox-box {
  width: 20px;
  height: 20px;
  border: 2px solid #9e9e9e;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}
/* Icono */
.check-icon {
  width: 16px;
  height: 16px;
  stroke: #fff;
  stroke-width: 3;
  fill: none;
  stroke-dasharray: 24;
  stroke-dashoffset: 24;
  transition: stroke-dashoffset 0.2s ease;
}
/*  checked */
.v-checkbox input:checked + .checkbox-box {
  background-color: var(--secondary);
  border-color: var(--secondary-dark);
}
.v-checkbox input:checked + .checkbox-box .check-icon {
  stroke-dashoffset: 0;
}

/* hover */
.v-checkbox:hover .checkbox-box {
  border-color: var(--secondary);
}

/* TEXTO */
.checkbox-label {
  color: var(--text-dark);
  font-size: 14px;
}
</style>
