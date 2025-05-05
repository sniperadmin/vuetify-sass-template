<script setup lang="ts">
import { ref } from 'vue'

const svgUrl = ref('https://www.pexels.com/photo/abstract-architecture-building-business-256457/')
</script>

<template>
  <v-img :src="svgUrl" alt="SVG Image" />
</template>
