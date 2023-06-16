import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import router from "./router";
import store from "./store";
import { createHead } from '@vueuse/head';

const head = createHead();
const app = createApp(App);

app.config.globalProperties.products = [
  { id: 1, name: 'First phone', image: 'http://localhost:5173/img/phone1.jpg', price: 100 },
  { id: 2, name: 'Second phone', image: 'http://localhost:5173/img/phone2.jpg', price: 150 },
  { id: 3, name: 'Third phone', image: 'http://localhost:5173/img/phone3.jpg', price: 180 },
];

app.use(head).use(router).use(store).mount('#app');
