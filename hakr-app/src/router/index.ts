import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutPage.vue"),
  },
  {
    path: "/cards",
    name: "cards",
    component: () =>
        import("../views/CardsPage.vue"),
  },
  {
    path: "/events",
    name: "events",
    component: () =>
      import("../views/EventsPage.vue"),
  },
  {
    path: "/notice-messages",
    name: "notice-messages",
    component: () =>
        import("../views/NoticeMessages.vue"),
  },
  {
    path: "/tooltips",
    name: "tooltips",
    component: () =>
        import("../views/TooltipsPage.vue"),
  },
  {
    path: "/reactive-button",
    name: "reactive-button",
    component: () =>
        import("../views/ReactiveButtonPage.vue"),
  },
  {
    path: "/toasts",
    name: "toasts",
    component: () =>
        import("../views/ToastsPage.vue"),
  },
  {
    path: "/modal",
    name: "modal",
    component: () =>
        import("../views/ModalPage.vue"),
  },
  {
    path: "/reactive-book-counter",
    name: "reactive-book-counter",
    component: () =>
        import("../views/ReactiveBookCounterPage.vue"),
  },
  {
    path: "/theme",
    name: "theme",
    component: () =>
        import("../views/ThemePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
