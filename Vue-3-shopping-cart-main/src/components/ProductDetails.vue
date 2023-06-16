<template>
    <div class="container min-h-content py-5 text-center">
      <div class="row py-lg-5">
        <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top" width="100%" :src="product.image" :alt="product.name">
          <div class="card-body">
            <h2>{{ product.name }}</h2>
            <p>Price: {{ product.price }}</p>
            <div class="btn-group">
              <CartBTN :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CartBTN from '../components/CartBTN.vue';
  
  export default {
    components: {
      CartBTN
    },
    data() {
      return {
        product: {
          id: 1,
          name: 'First phone',
          image: 'http://localhost:5173/img/phone1.jpg',
          price: 100
        }
      };
    }
  };
  </script>
  