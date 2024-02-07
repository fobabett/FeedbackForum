<script setup lang="ts">
const props = defineProps(["router", "account", "fetch"])
const notificationCount = props.account.notifications.length
const profileLinks = [{ title: 'Following', link: '/account/following' }, { title: 'My Posts', link: '/account/posts' }]
const viewNotification = (notification) => {
  props.fetch('/api/account/notification', 'POST', notification)
  props.router.push(`/posts/${notification.post_id}`)
}

const route = (link) => {
  props.router.push(link)
}
</script>

<template>
  <v-main>
    <v-app-bar :elevation="2">
      <template v-slot:prepend>
        <v-btn prepend-icon="mdi-music" color="primary">
          <v-app-bar-title @click="props.router.push(`/`)">FeedbackForum</v-app-bar-title>
        </v-btn>
      </template>

      <v-btn append-icon="$plus" variant="outlined" @click="props.router.push(`/new`)">Post</v-btn>

      <v-menu v-if="props.account && notificationCount > 0">
        <template v-slot:activator="{ props }" v-slot:append>
          <v-btn class="text-none" stacked v-bind="props">
            <v-badge :content="notificationCount" color="error">
              <v-icon color="primary">mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="notification in props.account.notifications" :key="notification.id">
            <v-list-item-title @click="viewNotification(notification)">{{ notification.title }} on a song you
              follow.</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn v-if="props.account && notificationCount === 0" class="text-none" stacked v-bind="props">
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-menu>
        <template v-slot:activator="{ props }" v-slot:append>
          <v-btn v-bind="props" icon="mdi-account"></v-btn>
        </template>

        <v-list>
          <v-list-item v-for="link in profileLinks" :key="link.link">
            <v-list-item-title @click="route(link.link)">{{ link.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </v-main>
</template>