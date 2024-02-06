<script>
  import router from '@/router';
</script>

<template>
  <v-main>
    <v-app-bar :elevation="2" color="primary">
      <v-app-bar-title v-on:click="router.push(`/`)">Feedback</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-account"></v-btn>
      </template>
    </v-app-bar>
  </v-main>
</template>