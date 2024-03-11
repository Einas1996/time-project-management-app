import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue")
    //import() functie zorgt ervoor dat de component alleen wordt geladen wanneer de gebruiker daadwerkelijk naar de bijbehorende route navigeert.
    //In de praktijk wordt aanbevolen om lazy loading te gebruiken voor het inladen van componenten die niet meteen nodig zijn bij het starten van de applicatie
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
