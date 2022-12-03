<script setup lang="ts">
import "@/assets/styles.scss";
</script>
<template>
  <div
    class="container mx-auto text-center bg-gradient-to-r from-gradient-outside via-gradient-inside to-gradient-outside rounded-b-lg"
  >
    <nav class="mx-auto mb-10">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
  <router-view />
</template>
