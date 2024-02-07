<script setup>
  import { generes } from '../constants.ts'
  const props = defineProps(['router'])
  const filter = props.router.currentRoute.value.query[""]
</script>
<template>
  <v-navigation-drawer theme="dark" permanent>
    <v-list color="transparent">
      <v-list-item prepend-icon="mdi-home" title="Home" @click="router.push(`/`)"></v-list-item>
      <v-list-item prepend-icon="mdi-chart" title="Trending" @click="router.push(`/`)"></v-list-item>
      <v-divider></v-divider>
      <v-list-item title="Genres"></v-list-item>
      <v-list-item prepend-icon="mdi-music" title="EDM" @click="router.push(`/?=EDM`)"></v-list-item>
      <v-list-item prepend-icon="mdi-music" title="Hip Hop" @click="router.push(`/?=Hip Hop`)"></v-list-item>
      <v-list-item prepend-icon="mdi-music" title="Hip Hop" @click="router.push(`/?=Hip Hop`)"></v-list-item>
      <v-list-item prepend-icon="mdi-music" title="Jazz" @click="router.push(`/?=Jazz`)"></v-list-item>
      <v-list-item prepend-icon="mdi-music" title="R&B" @click="router.push(`/?=R&B`)"></v-list-item>
      <v-list-item prepend-icon="mdi-music" title="Orchestral" @click="router.push(`/?=Orchestral`)"></v-list-item>
      <v-list-item prepend-icon="mdi-music" title="8-Bit" @click="router.push(`/?=8-Bit`)"></v-list-item>
      <v-list-item prepend-icon="mdi-music" title="Rock" @click="router.push(`/?=Rock`)"></v-list-item>
      <v-list-item prepend-icon="mdi-music" title="Metal" @click="router.push(`/?=Metal`)"></v-list-item>
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