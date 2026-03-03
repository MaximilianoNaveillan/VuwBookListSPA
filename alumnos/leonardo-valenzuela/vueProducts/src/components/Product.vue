<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <div class="product">
    <p>Name: {{ props.product.name }}</p>
    <p>Stock: {{ props.product.stock }}</p>
    <p>Price: {{ props.product.price }}</p>
    <p v-if="props.product.sale" class="sell">Sale: In sell</p>
    <p v-else class="noSell">Sale: Not in sell</p>
  </div>
</template>

<style scoped>
.product{
  background-color: gainsboro;
  padding: 1rem;
  margin: 1rem;
}
.product p{
  margin: 0.5rem 0;
}
.sell{
  color: green;
}
.noSell{
  color: red;
}
</style>