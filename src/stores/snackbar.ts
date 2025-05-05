import { defineStore } from 'pinia'

export const useSnackbarStore = defineStore('snackbar', {
  state: () => ({
    isVisible: false,
    message: '',
    timeout: 3000,
  }),
  actions: {
    show(message: string) {
      this.message = message
      this.isVisible = true
    },
    hide() {
      this.isVisible = false
    },
  },
})
