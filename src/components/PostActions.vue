<script setup>
const props = defineProps(['post', "isComment", "account", "onClickAction", "comment"])
// const isFollowing = !props.isComment && props.account.following.includes(props.post.id)
</script>

<template>
  <v-card-actions>
    <v-spacer></v-spacer>
    <div>
      <v-btn
        v-on:click="onClickAction('like', { post_id: props.post.id }, !props.account.liked_posts.includes(props.post.id))"
        size="small" :color="props.account.liked_posts.includes(props.post.id) ? 'primary' : 'surface-variant'" variant="text" icon="mdi-heart"></v-btn>
      <span>{{ props.post.likes }}</span>
    </div>
    <!-- <div v-if="props.isComment">
      <v-btn
        v-on:click="onClickAction('like', { post_id: props.post.id, comment_id: props.comment.id  }, props.isComment ? !props.account.liked_comments.includes(props.comment.id) : !props.account.liked_posts.includes(props.comment.id))"
        size="small" :color="props.account.following.includes(props.comment.id) ? 'primary' : 'surface-variant'" variant="text" icon="mdi-heart"></v-btn>
      <span>{{ props.post.likes }}</span>
    </div> -->
    <div>
      <v-btn size="small" color="surface-variant" variant="text" icon="mdi-comment"></v-btn>
      <span>{{ props.post.comments.length }}</span>
    </div>
    <div>
      <v-btn
        v-on:click="onClickAction('follow', { post_id: props.post.id }, !props.account.following.includes(props.post.id))"
        size="small" :color="props.account.following.includes(props.post.id) ? 'primary' : 'surface-variant'"
        variant="text" icon="mdi-bookmark"></v-btn>
    </div>
</v-card-actions></template>