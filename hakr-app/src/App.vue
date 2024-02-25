<script setup>
import SidebarNav from '@/components/SidebarNav.vue';
</script>
<template>
  <div class="w-full">
    <div class="bg-gradient-to-r from-gradient-outside">
      <nav class="relative mx-auto mb-10">
        <router-link class="text-white pl-4" to="/">Home</router-link>
      </nav>
    </div>
    <div class="md:flex">
      <SidebarNav/>
      <div class="w-full px-3 md:px-6">
        <router-view v-slot="{ Component }">
          <transition name="kre-router">
            <div>
              <component :is="Component"/>
            </div>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>
