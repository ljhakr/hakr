<script setup>
import 'flowbite/dist/flowbite';
import '@/assets/css/styles.scss';

</script>
<template>
  <div class="container mx-auto text-center bg-gradient-to-r from-gradient-outside via-gradient-inside
  to-gradient-outside rounded-b-lg">
    <nav class="relative mx-auto mb-10">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
  <transition name="kre-router">
    <router-view/>
  </transition>
</template>
