<script setup lang="ts">
import MenuItem from '@/prototypes/MenuItem.vue';

const items = [
  {
    id: 0,
    title: 'Dashboard',
    url: '/',
    icon: '1'
  },
  {
    id: 1,
    title: 'DeCapitalizr',
    url: '/decapitalizr',
  },
];
</script>

<template>
  <div class="">
    <div class="">
      <ul class="">
        <MenuItem v-for="item in items" :key="item.id" :title="item.title" :icon="item.icon" :url="item.url"></MenuItem>
      </ul>
    </div>
  </div>
</template>
