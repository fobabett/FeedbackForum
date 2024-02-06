<script lang="ts" setup>
import { onMounted, computed } from 'vue'
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


onMounted(async () => {
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

const onClickAction = (action: String, postId: Number, value: Boolean, isComment: boolean) => {
  let path
  switch (action) {
    case 'follow':
      path = value ? 'follow' : 'unfollow'
      account = fetch(`/api/account/${path}-post`, 'POST', { post_id: postId })
      console.log(account)
      break;
    case 'like':
      const resource = isComment ? 'comment' : 'post'
      const paylod = {}
      path = value ? 'like' : 'unlike'
      // if(isComment) {

      // } else {
      //   paylod.
      // }
      fetch(`/api/account/${path}-${resource}`, 'POST', { post_id: postId })
      console.log(account)
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
      <v-row v-if="post.content" dense>
        <v-col cols="12">
          <v-card prepend-icon="mdi-account" :title="post.content.title" :subtitle="post.user.username"
            :text="post.content.description" variant="tonal">
            <div v-html="post.content.media"></div>
            <PostActionsVue :post="post" :isComment=false :account="account" :onClickAction="onClickAction" />
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
                <PostActionsVue v-if="comment.username !== account.username" :post="comment" :isComment=true
                  :account="account" :onClickAction="onClickAction" />
              </v-card-actions>
            </v-card>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>