<script setup></script>
<template>
  <button class="btn"><slot></slot></button>
</template>
<style scoped>
/* Base del botón */
.btn {
  display: inline-block;
  padding: 0.6em 1.2em;
  border-radius: 6px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  border: none;
  font-family: 'Roboto', sans-serif;
  background-color: var(--primary-600);
  color: #fff;
}

/* Estados comunes */
.btn:hover {
  transform: translateY(-2px);
}

.btn:active {
  transform: translateY(0);
  opacity: 0.9;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Variantes de color en dark mode */
.btn-primary {
  background-color: var(--primary-600);
  color: var(--primary-50);
}

.btn-primary:hover {
  background-color: var(--primary-700); /* tono más oscuro */
}

.btn-secondary {
  background-color: transparent;
  border: #fff 1px solid;
  color: #fff;
}

.btn-secondary:hover {
  background-color: #fff;
  color: var(--gray-800);
}

.btn-danger {
  background-color: var(--color-danger);
  color: #fff;
}

.btn-danger:hover {
  background-color: #c53030;
}

.btn-success {
  background-color: var(--color-success);
  color: #fff;
}

.btn-success:hover {
  background-color: #4caf7d;
}

.btn-warning {
  background-color: var(--color-warning);
  color: var(--gray-900);
}

.btn-warning:hover {
  background-color: #d4a20b;
}
</style>
