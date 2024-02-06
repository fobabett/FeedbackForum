/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '@/views/Home.vue'
import PostVue from '@/views/Post.vue'
import NewPostVue from '@/views/NewPost.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue
    },
    {
      path: '/posts/:id',
      name: 'post',
      component: PostVue
    },
    {
      path: '/posts/new',
      name: 'newpost',
      component: NewPostVue
    }
  ]
})

export default router
