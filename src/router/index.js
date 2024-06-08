import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
    },
    {
        path: "/products",
        name: "products",
        component: () => import("@/views/products/List.vue"),
    },
    {
        path: "/products/create",
        name: "products.create",
        component: () => import("@/views/products/Create.vue"),
    },
    {
        path: "/products/:id",
        name: "products.edit",
        component: () => import("@/views/products/Edit.vue"),
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

export default router;
