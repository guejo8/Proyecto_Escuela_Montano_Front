import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "../layouts/AppLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";

const routes = [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "/contacto",
        name: "contacto",
        component: () => import("../views/ContactoView.vue"),
      },
      {
        path: "/menu-dia",
        name: "menu-dia",
        component: () => import("../views/MenuDiaView.vue"),
      },
      {
        path: "/menu-estrella",
        name: "menu-estrella",
        component: () => import("../views/MenuEstrellaView.vue"),
      },
      {
        path: "/carniceria",
        name: "carniceria",
        component: () => import("../views/CarniceriaView.vue"),
      },
      {
        path: "/pasteleria",
        name: "pasteleria",
        component: () => import("../views/PasteleriaView.vue"),
      },
      {
        path: "/raciones",
        name: "raciones",
        component: () => import("../views/RacionesView.vue"),
      },
      {
        path: "/pintxos",
        name: "pintxos",
        component: () => import("../views/PintxosView.vue"),
      },
    ],
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardLayout, // Use the DashboardLayout for the dashboard routes
    children: [
      {
        path: "",
        name: "principal",
        component: () => import("../views/DashboardView.vue"),
      },
      {
        path: "/dashboard2",
        name: "dashboard2",
        component: () => import("../views/DashboardView2.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginAdminView.vue"),
  },
  {
    path: "/intranet",
    name: "Intranet",
    component: () => import("../views/IntranetView.vue"),
  },
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
