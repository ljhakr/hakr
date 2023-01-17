<script setup>
import SidebarNav from '@/components/SidebarNav.vue';
</script>
<template>
  <div class="flex">
<!--    <SidebarNav/>-->

    <div class="w-full">
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
      </Transition>
    </div>
  </div>
</template>
