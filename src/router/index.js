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
        path: "/people/create",
        name: "people.create",
        component: () => import("@/views/people/Create.vue"),
    },
    {
        path: "/people",
        name: "people",
        component: () => import("@/views/people/List.vue"),
    },
    {
        path: "/people/:id",
        name: "people.edit",
        component: () => import("@/views/people/Edit.vue"),
        props: true,
    },
    {
        path: "/purchases",
        name: "purchases",
        component: () => import("@/views/purchase-invoices/List.vue"),
    },
    {
        path: "/purchases/create",
        name: "purchases.create",
        component: () => import("@/views/purchase-invoices/Create.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

export default router;
