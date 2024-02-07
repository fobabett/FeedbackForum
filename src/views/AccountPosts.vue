<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import NavVue from '../components/Nav.vue'
import PostListVue from '../components/PostList.vue'
import { fetch } from '../api'
import router from '@/router';
import SideNav from '@/components/SideNav.vue';

let posts = []
let account = {}

onBeforeMount(async () => {
  posts = fetch('/api/account/posts', 'GET')
  account = fetch(`/api/account`, 'GET')
})

</script>

<template>
  <NavVue :router="router" :account="account" :fetch="fetch" />
  <SideNav :router="router" />
  <v-container fluid class="w-75">
    <v-row>
      <v-col cols="12">
        <h1>My Posts</h1>
      </v-col>
    </v-row>
    <PostListVue v-if="account.posts.length > 0" :posts="posts" :account="account" :router="router" />
    <v-row v-else>
      <v-col cols="12">
        <p>You haven't posted any songs yet. Go <a @click="router.push('/new')">here</a> to post a songs</p>
      </v-col>
    </v-row>
  </v-container>
</template>