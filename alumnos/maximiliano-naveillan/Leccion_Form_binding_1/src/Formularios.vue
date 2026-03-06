<script setup>
import { reactive, ref, computed } from 'vue';
let email = ref('email');
let password = ref('password');

const usuario = reactive({
  nombre: '',
  email: '',
  password: '',
  aceptaTerminos: false,
});

function registrar() {
  console.log(usuario);
}

const formularioValidado = computed(() => {
  return email.value.includes('@') && password.value.length >= 6;
});
</script>
<template>
  <h1>Hola mundo</h1>
  <form @submit.prevent="registrar">
    <input type="text" v-model="usuario.nombre" placeholder="Nombre" />
    <input type="text" v-model="usuario.email" placeholder="Email" />
    <input type="text" v-model="usuario.password" placeholder="Password" />
    <div>
      <label>
        <input type="checkbox" v-model="usuario.aceptaTerminos" />
        Aceptar términos y condiciones
      </label>
    </div>
    <button type="submit">Registrar</button>
  </form>

  <pre>
    {{ usuario }}
  </pre>

  <input v-model="email" />
  <input type="text" v-model="password" />
  <button :disabled="!formularioValidado">Enviar</button>
</template>
