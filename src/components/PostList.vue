<script setup lang="ts">
import PostActionsVue from './PostActions.vue'

const props = defineProps(['posts', 'account', 'onClickAction', 'router'])

</script>
<template>
  <v-row dense>
    <v-col v-for="post in props.posts" :key="post.id" cols="12">
      <v-card variant="plain" class="post" v-on:click="props.router.push(`/FeedbackForum/posts/${post.id}`)" prepend-icon="mdi-account"
        :title="post.content.title" :subtitle="post.user.username">
        <v-container class="h-25">
          <div v-html="post.content.media"></div>
        </v-container>
        <v-container>
          <p>{{post.content.description.slice(0, 100)}}(...Read More)</p>
        </v-container>
        <PostActionsVue class="post-actions" v-if="post.user.username !== props.account.username" :post="post" :isComment=false
          :account="props.account" :onClickAction="props.onClickAction" />
        <v-divider></v-divider>
      </v-card>
    </v-col>
  </v-row>
</template>