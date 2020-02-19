import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
// import Signin from '@/views/Signin'
// import Signup from '@/views/Signup'
// import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/goods',
    name: 'Goods',
    component: Home
  }
  // {
  //   path: '/',
  //   name: 'Signin',
  //   component: Signin
  // },
  // {
  //   path: '/signin',
  //   name: 'Signin',
  //   component: Signin
  // },
  // {
  //   path: '/signup',
  //   name: 'Signup',
  //   component: Signup
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//   if (requiresAuth) {
//     // このルートはログインされているかどうか認証が必要です。
//     // もしされていないならば、ログインページにリダイレクトします。
//     firebase.auth().onAuthStateChanged(function (user) {
//       if (user) {
//         next()
//       } else {
//         next({
//           path: '/signin',
//           query: { redirect: to.fullPath }
//         })
//       }
//     })
//   } else {
//     next() // next() を常に呼び出すようにしてください!
//   }
// })

export default router
