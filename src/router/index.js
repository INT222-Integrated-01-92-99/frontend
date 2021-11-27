import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import Product from '../views/Product.vue'
import Detail from '../views/Detail.vue'
import Cart from '../views/Cart.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Profile from '../views/Profile.vue'
import Receipt from '../views/Receipt.vue'
import Account from '../views/Account.vue'
import Brand from '../views/Brand.vue'
import PageNotFound from '../views/PageNotFound.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/product/:proId',
    alias: '/product',
    name: 'Product',
    component: Product,
    props: true,
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,

  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    beforeEnter: (to, from, next) => {
      if (store.getters['auth/authenticated']) {
        return next({
          name: 'Home'
        })
      }
      next()
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    beforeEnter: (to, from, next) => {
      if (store.getters['auth/authenticated']) {
        return next({
          name: 'Home'
        })
      }
      next()
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/authenticated']) {
        return next({
          name: 'SignIn'
        })
      } else if (store.getters['auth/user'].idRole.idRole != 3) {
        return next({
          name: 'Home'
        })
      }
      next()
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/authenticated']) {
        return next({
          name: 'SignIn'
        })
      }
      next()
    }
  },
  {
    path: '/receipt',
    name: 'Receipt',
    component: Receipt,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/authenticated']) {
        return next({
          name: 'SignIn'
        })
      }
      next()
    }
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
  },
  {
    path: '/addbrand',
    name: 'Brand',
    component: Brand,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
