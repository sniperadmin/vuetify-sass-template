<script setup lang="ts">
import { useSnackbarStore } from '../stores/snackbar'

const snackbarStore = useSnackbarStore()
</script>

<template>
  <v-snackbar v-model="snackbarStore.isVisible" :timeout="snackbarStore.timeout">
    {{ snackbarStore.message }}
    <template v-slot:actions>
      <v-btn color="pink" variant="text" @click="snackbarStore.hide">Close</v-btn>
    </template>
  </v-snackbar>
</template>
