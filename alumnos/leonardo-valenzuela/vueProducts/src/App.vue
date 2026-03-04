<script setup>
import { ref } from "vue";
import { useProductsStore } from "./stores/products";
import Product from "./components/Product.vue";

const products = useProductsStore();

const refFormProduct = ref({
  id: Date.now(),
  name: "",
  stock: 0,
  price: 0,
  sale: false,
});

const crearProducto = () => {
  products.addProduct(refFormProduct.value);
  console.log(products.getAllProducts.length);

  refFormProduct.value = {

    name: "",
    stock: 0,
    price: 0,
    sale: false,
  };
};
</script>

<template>
  <div class="container">
    <section class="form-container">
      <h3>Crear Los Productos</h3>
      <form @submit.prevent="crearProducto" class="form-product">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="refFormProduct.name" />
        <label for="price">Price</label>
        <input type="number" id="price" v-model="refFormProduct.price" />
        <label for="stock">Stock</label>
        <input type="number" id="stock" v-model="refFormProduct.stock" />
        <div>
          <label for="sale">Sale</label>
          <input type="checkbox" id="sale" v-model="refFormProduct.sale" />
        </div>
        <button type="submit">Crear</button>
      </form>
    </section>
    <section class="list-products">
      <h3>Listar Los Productos</h3>
      <div class="products">
        <Product
          v-for="product in products.getAllProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
}
.form-container {

  display: flex;
  flex-direction: column;
  gap: 1rem;
    width: 35%;
}
.form-product {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 5rem;

}
.list-products {
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.products{
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

@media (max-width: 768px) {
  .container{
    flex-direction: column;
  }
  .form-container{
    width: 100%;
  }
  .list-products{
    width: 100%;
  }
}
</style>
