<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth'
import { useSnackbarStore } from './stores/snackbar'
import { useThemeStore } from './stores/theme'
// import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Snackbar from './components/Snackbar.vue'

const router = useRouter()
const authStore = useAuthStore()
const snackbarStore = useSnackbarStore()
const themeStore = useThemeStore()

const isAuthenticated = ref(authStore.isAuthenticated)
const user = ref(authStore.user)

const logout = () => {
  authStore.logout()
  router.push('/login')
}

const toggleTheme = () => {
  themeStore.toggleTheme()
}

const showSnackbar = (message: string) => {
  snackbarStore.show(message)
}

</script>

<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
    <Snackbar />
  </v-app>
</template>

<style scoped>
.v-app-bar {
  background-color: var(--v-primary-base);
  color: var(--v-primary-lighten1);
}
</style>
