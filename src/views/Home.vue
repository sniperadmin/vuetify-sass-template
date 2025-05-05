<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SvgImageContainer from '../components/SvgImageContainer.vue'
import WidgetContainer from '../components/WidgetContainer.vue'

const router = useRouter()
const email = ref('')
const password = ref('')

const login = () => {
  // Simulate login
  if (email.value === 'user@example.com' && password.value === 'password') {
    router.push('/dashboard')
  } else {
    alert('Invalid credentials')
  }
}
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field v-model="email" label="Email" required></v-text-field>
              <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
              <v-btn type="submit" block>Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <SvgImageContainer />
    <WidgetContainer />
  </v-container>
</template>
