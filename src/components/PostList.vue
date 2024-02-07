<script setup>
import PostActionsVue from './PostActions.vue'

const props = defineProps(['posts', 'account', 'onClickAction', 'router'])

</script>
<template>
  <v-row dense>
    <v-col v-for="post in props.posts" :key="post.id" cols="12">
      <v-card v-on:click="props.router.push(`/posts/${post.id}`)" prepend-icon="mdi-account" :title="post.content.title"
        :subtitle="post.user.username" :text="`${post.content.description.slice(0, 100)}...`" variant="tonal">
        <v-container class="h-25">
          <div v-html="post.content.media"></div>
        </v-container>
        <PostActionsVue v-if="post.user.username !== props.account.username" :post="post" :isComment=false :account="props.account"
          :onClickAction="props.onClickAction" />
      </v-card>
    </v-col>
  </v-row>
</template>