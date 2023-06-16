<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <!-- Display the product information here -->
      <h3>{{ product.title }}</h3>
      <img :src="product.image" :alt="product.name" />
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const products = ref([]);

    const fetchProducts = () => {
      fetch('https://648c944c8620b8bae7ed1a09.mockapi.io/api/v1/furniture/products')
        .then(response => response.json())
        .then(data => {
          // Assign the fetched products to the products ref
          products.value = data;
        })
        .catch(error => {
          console.error(error);
        });
    };

    onMounted(() => {
      fetchProducts();
    });

    return {
      products
    };
  }
}
</script>
