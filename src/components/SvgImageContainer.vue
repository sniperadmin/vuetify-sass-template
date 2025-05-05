<script setup lang="ts">
import SvgImage from './SvgImage.vue'
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="i in 3" :key="i">
        <SvgImage />
      </v-col>
    </v-row>
  </v-container>
</template>
