<script setup lang="ts">
import { ref } from 'vue'

const message = ref('This is a widget message.')
</script>

<template>
  <v-card>
    <v-card-title>Widget</v-card-title>
    <v-card-text>{{ message }}</v-card-text>
  </v-card>
</template>
