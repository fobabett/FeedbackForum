<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import NavVue from '../components/Nav.vue'
import PostListVue from '../components/PostList.vue'
import { fetch } from '../api'
import router from '@/router';

let posts = []
let account = {}

onBeforeMount(async () => {
  posts = fetch('/api/account/following', 'GET')
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
  <v-main>
    <v-container fluid class="w-75">
      <v-row>
        <v-col cols="12">
          <h1>Following</h1>
        </v-col>
      </v-row>
      <PostListVue v-if="account.following.length > 0" :onClickAction="onClickAction" :posts="posts" :account="account"
        :router="router" />
      <v-row v-else>
        <v-col cols="12">
          <p>You aren't following any songs at this time. Check out the <a @click="router.push('/')">Feed</a> and follow some songs!</p>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>