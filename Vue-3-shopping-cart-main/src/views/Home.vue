<template>
    <div class="container min-h-content py-5 text-center">
        <h1>Welcome to the Home Page</h1>
    <ProductList />
    </div>
</template>
<script>
import CartBTN from '../components/CartBTN.vue'
import ProductList from "../components/ProductList.vue";

import { useRouter } from 'vue-router';
export default {
   
    components :{CartBTN, ProductList,},
  
  
}
</script>