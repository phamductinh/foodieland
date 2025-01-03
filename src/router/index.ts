import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: () => import('@/views/ContactUs.vue'),
  },
  {
    path: '/details-recipe/:id',
    name: 'DetailsRecipe',
    component: () => import('@/views/DetailsRecipe.vue'),
  },
  {
    path: '/blog',
    name: 'BlogComp',
    component: () => import('@/views/BlogComp.vue'),
  },
  {
    path: '/details-blog/:id',
    name: 'DetailsBlog',
    component: () => import('@/views/DetailsBlog.vue'),
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: () => import('@/views/AboutUs.vue'),
  },
  {
    path: '/admin/users',
    name: 'ManageUsers',
    component: () => import('@/views/admin/ManageUsers.vue'),
  },
  {
    path: '/admin/form',
    name: 'Form',
    component: () => import('@/views/admin/FormUser.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/components/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
