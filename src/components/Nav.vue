<script setup>
  const props = defineProps(['router'])
</script>

<template>
  <v-main>
    <v-app-bar :elevation="2" color="primary">
      <v-app-bar-title @click="props.router.push(`/`)">Feedback</v-app-bar-title>
      <v-btn append-icon="$plus" variant="outlined" @click="props.router.push(`/posts/new`)">
        Post
      </v-btn>
      <template v-slot:append>
        <v-btn icon="mdi-account"></v-btn>
      </template>
    </v-app-bar>
  </v-main>
</template>