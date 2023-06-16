<template>
    <div class="container min-h-content py-5 text-center">
        <div class="row py-lg-5">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col" v-for="product in products" :key="product.id">
                        <router-link :to="`/products/${product.id}`" :product="product" :key="product.id">
                        <!-- Display product card -->
                        <div class="card">
                            <img :src="product.image" alt="Product Image" />
                            <h3>{{ product.name }}</h3>
                            <p>{{ product.price }} JD</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            products: [
                { id: 1, name: 'First phone', image: 'http://localhost:5173/img/phone1.jpg', price: 100 },
                { id: 2, name: 'Second phone', image: 'http://localhost:5173/img/phone2.jpg', price: 150 },
                { id: 3, name: 'Third phone', image: 'http://localhost:5173/img/phone3.jpg', price: 180 },
            ],
        };
    },
};
</script>
  