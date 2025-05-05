<script setup lang="ts">
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import LogoutButton from './LogoutButton.vue'
import ThemeToggle from './ThemeToggle.vue'

const authStore = useAuthStore()
const router = useRouter()
</script>

<template>
  <v-app-bar>
    <v-app-bar-title>Multi-Tenant SaaS Theme</v-app-bar-title>
    <v-spacer></v-spacer>
    <LogoutButton v-if="authStore.isAuthenticated" />
    <ThemeToggle />
  </v-app-bar>
</template>
