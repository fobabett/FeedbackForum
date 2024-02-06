<script lang="ts" setup>
import { onMounted } from 'vue'
import NavVue from '../components/Nav.vue'
import PostActionsVue from '../components/PostActions.vue'
import { fetch } from '../api'
import router from '@/router';

let posts = []
let account = {}

onMounted(async () => {
  posts = fetch('/api/posts', 'GET')
  account = fetch(`/api/account`, 'GET')
})

const onClickAction = (action: String, postId: Number, value: Boolean) => {
  switch(action) {
    case 'follow':
      const path = value ? 'follow' : 'unfollow'
      fetch(`/api/account/${path}-post`, 'POST', { post_id: postId })
      break;
    default:
      console.error('Invalid action')
      break;
  }
}
</script>

<template>
  <NavVue />
  <v-main>
    <v-container fluid class="w-75">
      <v-row dense>
        <v-col v-for="post in posts" :key="post.id" cols="12">
          <v-col cols="12">
            <v-card v-on:click="router.push(`/posts/${post.id}`)" prepend-icon="mdi-account" :title="post.content.title"
              :subtitle="post.user.username" :text="`${post.content.description.slice(0, 100)}...`" variant="tonal">
              <v-container class="h-25">
                <div v-html="post.content.media"></div>
              </v-container>
              <PostActionsVue :post="post" :isComment=false :account="account" :onClickAction="onClickAction" />
            </v-card>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>