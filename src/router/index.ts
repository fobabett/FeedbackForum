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
import FollowingVue from '@/views/Following.vue'
import AccountPostsVue from '@/views/AccountPosts.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/FeedbackForum/',
      name: 'home',
      component: HomeVue
    },
    {
      path: '/FeedbackForum/posts/:id',
      name: 'post',
      component: PostVue
    },
    {
      path: '/FeedbackForum/new',
      name: 'newpost',
      component: NewPostVue
    },
    {
      path: '/FeedbackForum/account/following',
      name: 'following',
      component: FollowingVue
    },
    {
      path: '/FeedbackForum/account/posts',
      name: 'accountPosts',
      component: AccountPostsVue
    }
  ]
})

export default router
