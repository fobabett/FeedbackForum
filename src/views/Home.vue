<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import NavVue from '@/components/Nav.vue'
import PostListVue from '@/components/PostList.vue'
import { fetch } from '../api'
import router from '@/router';
import SideNav from '@/components/SideNav.vue';

let posts = []
let account = {}

console.log(router)

onBeforeMount(async () => {
  posts = fetch('/api/posts', 'GET')
  account = fetch(`/api/account`, 'GET')
})

const onClickAction = (action: String, payload: any, value: Boolean) => {
  let path
  switch (action) {
    case 'follow':
      path = value ? 'follow' : 'unfollow'
      account = fetch(`/api/account/${path}-post`, 'POST', payload)
      break;
    case 'like':
      // const resource = payload['comment_id'] ? 'comment' : 'post'
      path = value ? 'like' : 'unlike'
      account = fetch(`/api/account/${path}-post`, 'POST', payload)
      break;
    default:
      console.error('Invalid action')
      break;
  }
}
</script>

<template>
  <NavVue :router="router" :account="account" :fetch="fetch" />
  <SideNav :router="router" />
  <v-container fluid class="w-75">
    <PostListVue :onClickAction="onClickAction" :posts="posts" :account="account" :router="router" />
  </v-container>
</template>