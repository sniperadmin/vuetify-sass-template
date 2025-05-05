<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import SvgImageContainer from '../components/SvgImageContainer.vue'
import WidgetContainer from '../components/WidgetContainer.vue'

const authStore = useAuthStore()
const user = ref(authStore.user)
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title>Billing</v-card-title>
          <v-card-text>
            <p>Billing Information for {{ user.email }}</p>
            <!-- Add more billing fields as needed -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <SvgImageContainer />
    <WidgetContainer />
  </v-container>
</template>
