<script setup></script>
<template>
  <div class="card">
    <!-- Slot nombrado -->
    <header>
      <slot name="header"></slot>
    </header>
    <!--  Slot por defecto -->
    <section>
      <slot></slot>
    </section>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
}
</style>
