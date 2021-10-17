import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import PartPhoto from '../components/parts/PartPhoto.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/sandbox",
    name: 'Sandbox',
    component: () => import("@/views/Sandbox.vue")
  },
  {
    path: "/signin",
    name: "Sign In",
    component: () => import('@/views/SignIn.vue')
  },
  {
    path: "/orders",
    name: "Place Order",
    component: () => import('@/views/Orders.vue')
  },
  {
    path: "/builds",
    name: "Customize your Nug",
    component: () => import('@/views/Builds.vue')
  },
  {
    path: "/parts",
    name: "Add new Parts",
    component: () => import('@/views/Parts.vue')
  },
  {
    path: "/orders/add-part",
    name: "Add new Part to existing Order",
    component: () => import('@/views/AddPartToOrder.vue')
  },
  {
    path: '/part/:id',
    name: 'part',
    component: PartPhoto,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
