<script lang="ts" setup>
import { onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex'
import router from '@/router';
import NavVue from '@/components/Nav.vue'
import SideNav from '@/components/SideNav.vue'
import PostActionsVue from '@/components/PostActions.vue'
import { fetch } from '../api'

const store = useStore()
const postId = router.currentRoute.value.params.id

let posts = []
let post = {}
let account = {}

console.log(store.state.account)


onBeforeMount(async () => {
  posts = fetch('/api/posts', 'GET')
  post = fetch(`/api/posts/${postId}`, 'GET')
  account = fetch(`/api/account`, 'GET')
})

let commentInput = ''

const submitComment = () => {
  fetch('/api/comments', 'POST', {
    post_id: postId,
    comment: commentInput
  })
}

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
    <v-row v-if="post.content" dense>
      <v-col cols="12" class="mb-5">
        <v-card prepend-icon="mdi-account" :title="post.content.title" :subtitle="post.user.username" variant="tonal">
          <div v-html="post.content.media"></div>
          <v-container>
            <p>{{ post.content.description }}</p>
          </v-container>
          <PostActionsVue v-if="post.user.username !== account.username" :post="post" :isComment=false :account="account"
            :onClickAction="onClickAction" />
        </v-card>
      </v-col>

      <v-col cols="12" class="mb-5">
        <v-form @submit.prevent>
          <v-textarea label="Enter feedback..." variant="outlined" v-on:input="$emit('input', $event.target.value)"
            v-model="commentInput"></v-textarea>
          <v-btn type="submit" class="mt-4" color="primary" @click="submitComment">Submit Feedback</v-btn>
        </v-form>
      </v-col>

      <v-col cols="12">
        <h2>Comments</h2>
        <v-list lines="three" v-for="comment in post.comments" :key="comment.id" class="mb-5">
          <v-card prepend-icon="mdi-account" :subtitle="comment.username" :text="comment.text" variant="flat">
          </v-card>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>