<script setup>
const props = defineProps(['post', "isComment", "account", "onClickAction"])
// const isFollowing = !props.isComment && props.account.following.includes(props.post.id)
</script>

<template>
  <v-card-actions>
    <v-spacer></v-spacer>
    <div>
      <v-btn v-on:click="onClickAction('like', props.post.id, props.isComment ? !props.account.liked_comments.includes(props.post.id) : !props.account.liked_posts.includes(props.post.id), props.isComment)" size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>
      <span>{{ props.post.likes }}</span>
    </div>
    <div v-if="!props.isComment">
      <v-btn size="small" color="surface-variant" variant="text" icon="mdi-comment"></v-btn>
      <span>{{ props.post.comments.length }}</span>
    </div>
    <div v-if="!props.isComment">
      <v-btn v-on:click="onClickAction('follow', props.post.id, !props.account.following.includes(props.post.id))"
        size="small" :color="props.account.following.includes(props.post.id) ? 'primary' : 'surface-variant'"
        variant="text" icon="mdi-bookmark"></v-btn>
    </div>
  </v-card-actions>
</template>