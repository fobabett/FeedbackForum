<script setup lang="ts">
  // import { generes } from '../constants.ts'
  const props = defineProps(['router'])
  const filter = props.router.currentRoute.value.query[""]
</script>
<template>
  <v-navigation-drawer theme="dark" permanent>
    <v-list color="transparent">
      <v-list-item prepend-icon="mdi-home" title="Home" @click="router.push(`/FeedbackForum/`)"></v-list-item>
      <v-list-item prepend-icon="mdi-trending-up" title="Trending" @click="router.push(`/FeedbackForum/`)"></v-list-item>
      <v-divider></v-divider>
      <v-list-item title="Genres"></v-list-item>
      <v-list-item prepend-icon="mdi-music" title="EDM" @click="router.push(`/FeedbackForum/?=EDM`)"></v-list-item>
      <v-list-item prepend-icon="mdi-music" title="Hip Hop" @click="router.push(`/FeedbackForum/?=Hip Hop`)"></v-list-item>
      <v-list-item prepend-icon="mdi-music" title="Hip Hop" @click="router.push(`/FeedbackForum/?=Hip Hop`)"></v-list-item>
      <v-list-item prepend-icon="mdi-music" title="Jazz" @click="router.push(`/FeedbackForum/?=Jazz`)"></v-list-item>
      <v-list-item prepend-icon="mdi-music" title="R&B" @click="router.push(`/FeedbackForum/?=R&B`)"></v-list-item>
      <v-list-item prepend-icon="mdi-music" title="Orchestral" @click="router.push(`/FeedbackForum/?=Orchestral`)"></v-list-item>
      <v-list-item prepend-icon="mdi-music" title="8-Bit" @click="router.push(`/FeedbackForum/?=8-Bit`)"></v-list-item>
      <v-list-item prepend-icon="mdi-music" title="Rock" @click="router.push(`/FeedbackForum/?=Rock`)"></v-list-item>
      <v-list-item prepend-icon="mdi-music" title="Metal" @click="router.push(`/FeedbackForum/?=Metal`)"></v-list-item>
    </v-list>
    <!-- <v-list color="transparent" v-for="genre in genres" :key="genre">
      <v-list-item :title="genere" @click="router.push(`/?=${genere}`)"></v-list-item>
    </v-list> -->

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block color="primary">
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>