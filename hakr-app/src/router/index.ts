import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
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
    name: "ref-and-template-ref",
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
  {
    path: "/transitions",
    name: "Transitions",
    component: () =>
        import("../views/TransitionsPage.vue"),
  },
  {
    path: "/animations",
    name: "Animations",
    component: () =>
        import("../views/AnimationsPage.vue"),
  },
  {
    path: "/reactive-collapse",
    name: "Reactive show & hide",
    component: () =>
        import("../views/ReactiveShowHidePage.vue"),
  },
  {
    path: "/decapitalizr",
    name: "DeCapitalizr",
    component: () =>
        import("../views/DeCapitalizrPage.vue"),
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: () =>
        import("../views/ShoppingPage.vue"),
  },
  {
    path: "/form",
    name: "Form",
    component: () =>
        import("../views/ExampleForm.vue"),
  },
  {
    path: "/vee-form",
    name: "Vee-validate form",
    component: () =>
        import("../views/VeeValidateForm.vue"),
  },
  {
    path: "/emoji",
    name: "Emoji",
    component: () =>
        import("../views/EmojiPicker.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
