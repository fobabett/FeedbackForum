<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import NavVue from '../components/Nav.vue'
import PostActionsVue from '../components/PostActions.vue'
import { fetch } from '../api'
import router from '@/router';

let posts = []
let account = {}

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
  <v-main>
    <v-container fluid class="w-75">
      <v-row dense>
        <v-col v-for="post in posts" :key="post.id" cols="12">
          <v-card v-on:click="router.push(`/posts/${post.id}`)" prepend-icon="mdi-account" :title="post.content.title"
            :subtitle="post.user.username" :text="`${post.content.description.slice(0, 100)}...`" variant="tonal">
            <v-container class="h-25">
              <div v-html="post.content.media"></div>
            </v-container>
            <PostActionsVue v-if="post.user.username !== account.username" :post="post" :isComment=false :account="account" :onClickAction="onClickAction" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>