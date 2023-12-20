import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/retrive',
    name: 'retrive',
    component: () => import('../views/Retrive.vue')
  },
  {
    path: '/reset-password/:token/:email',
    name: 'reset-password',
    component: () => import('../views/ResetPassword.vue')
  },
  {
    path: '/public-access-requests/:requestId/:token',
    name: 'public-access-requests',
    component: () => import('../views/PublicRequest.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../views/Add.vue')
  },
  {
    path: '/detials/:id',
    name: 'detials',
    component: () => import('../views/Detials.vue')
  },
  {
    path: '/partner-list',
    name: 'partner-list',
    component: () => import('../views/Partner_List.vue')
  },
  {
    path: '/single-partner/:id',
    name: 'single-partner',
    props: true,
    component: () => import('../views/Single_Partner.vue')
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('../views/Personal.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '/404',
    component: () => import('../views/404.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.userToken ? true : false;
  const isApprovalRoute = to.path.startsWith('/public-access-requests/')
  const isResetPassword = to.path.startsWith('/reset-password')
  if (to.path == "/login" || to.path == "/register" || to.path == "/retrive" || isApprovalRoute || isResetPassword) {
    next();
  } else {
    isLogin ? next() : next('/login');
  }
})

export default router
