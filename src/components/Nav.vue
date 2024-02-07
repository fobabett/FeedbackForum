<script setup>
const props = defineProps(["router", "account", "fetch"])
const notificationCount = props.account.notifications.length
const viewNotification = (notification) => {
  props.fetch('/api/account/notification', 'POST', notification)
  props.router.push(`/posts/${notification.post_id}`)
}
</script>

<template>
  <v-main>
    <v-app-bar :elevation="2" color="primary">
      <v-app-bar-title @click="props.router.push(`/`)">Feedback</v-app-bar-title>
      <v-btn append-icon="$plus" variant="outlined" @click="props.router.push(`/new`)">
        Post
      </v-btn>

      <v-menu v-if="props.account && notificationCount > 0">
        <template v-slot:activator="{ props }" v-slot:append>
          <v-btn class="text-none" stacked v-bind="props">
            <v-badge :content="notificationCount" color="error">
              <v-icon>mdi-bell-outline</v-icon>
            </v-badge>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="notification in props.account.notifications" :key="notification.id">
            <v-list-item-title @click="viewNotification(notification)">{{ notification.title }} on a Post you
              follow.</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn v-if="props.account && notificationCount === 0" class="text-none" stacked v-bind="props">
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>

      <template v-slot:append>
        <v-btn icon="mdi-account"></v-btn>
      </template>
    </v-app-bar>
  </v-main>
</template>