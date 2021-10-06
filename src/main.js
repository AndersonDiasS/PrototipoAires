import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import CriarConta  from "./components/CriarConta";
import Login from "./components/Login"; 

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Login },
    { path: "/CriarConta",  component: CriarConta },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
