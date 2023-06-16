import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home.vue";
import Cart from "/src/views/Cart.vue";
import DefaultLayout from "/src/layouts/DefaultLayout.vue";
import ProductList from "../components/ProductList.vue";
import ProductDetails from "../components/ProductDetails.vue";

const routes = [
    {
      path: "/",
      name: "Public",
      component: DefaultLayout,
      redirect: "/home", // Set a default redirect path
      children: [
        {
          path: "/home", // Change the path for the Home component
          name: "Home",
          component: Home,
        },
        {
          path: "/cart",
          name: "Cart",
          component: Cart,
        },
        {
            path: "/products",
            component: ProductList,
          },
          {
            path: "/products/:id",
            name: "ProductDetails",
            component: ProductDetails,
            props: true, // Enable passing props through route params
          },
      ],
    },
  ];

  
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
