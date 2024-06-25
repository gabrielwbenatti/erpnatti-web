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
    ,
    {
        path: "/thirdies/create",
        name: "thirdies.create",
        component: () => import("@/views/thirdies/Create.vue"),
    },
    {
        path: "/thirdies",
        name: "thirdies",
        component: () => import("@/views/thirdies/List.vue"),
    },
    {
        path: "/thirdies/:id",
        name: "thirdies.edit",
        component: () => import("@/views/thirdies/Edit.vue"),
        props: true,
    },
    {
        path: "/purchase-invoices/create",
        name: "purchase-invoices.create",
        component: () => import("@/views/purchase-invoices/Create.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

export default router;
