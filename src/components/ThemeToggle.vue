<script setup lang="ts">
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()
</script>

<template>
  <v-btn @click="themeStore.toggleTheme">Toggle Theme</v-btn>
</template>
