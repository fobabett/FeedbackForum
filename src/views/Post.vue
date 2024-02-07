<script lang="ts" setup>
import { onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex'
import router from '@/router';
import NavVue from '../components/Nav.vue'
import PostActionsVue from '../components/PostActions.vue'
import { fetch } from '../api'

const store = useStore()
const postId = router.currentRoute.value.params.id

let post = {}
let account = {}

console.log(store.state.account)


onBeforeMount(async () => {
  account = fetch(`/api/account`, 'GET')
  post = fetch(`/api/posts/${postId}`, 'GET')
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
  <v-main>
    <v-container fluid class="w-75">
      <v-row v-if="post.content" dense>
        <v-col cols="12">
          <v-card prepend-icon="mdi-account" :title="post.content.title" :subtitle="post.user.username"
            :text="post.content.description" variant="tonal">
            <div v-html="post.content.media"></div>
            <PostActionsVue v-if="post.user.username !== account.username" :post="post" :isComment=false :account="account" :onClickAction="onClickAction" />
          </v-card>
        </v-col>

        <v-divider></v-divider>

        <v-col cols="12">
          <v-form @submit.prevent>
            <v-textarea label="Enter feedback..." variant="outlined" v-on:input="$emit('input', $event.target.value)"
              v-model="commentInput"></v-textarea>
            <v-btn type="submit" block class="mt-2" color="primary" @click="submitComment">Submit Feedback</v-btn>
          </v-form>
        </v-col>

        <v-col cols="12">
          <h2>Comments</h2>
          <v-list lines="three" v-for="comment in post.comments" :key="comment.id">
            <v-card prepend-icon="mdi-account" :subtitle="comment.username" :text="comment.text">
              <v-card-actions>
                <v-spacer></v-spacer>
                <!-- <PostActionsVue v-if="comment.username !== account.username" :post="post" :isComment=true
                  :account="account" :onClickAction="onClickAction" :comment="comment" /> -->
              </v-card-actions>
            </v-card>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>