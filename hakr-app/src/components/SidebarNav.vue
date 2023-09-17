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
    title: 'Notice messages',
    url: '/notice-messages',
    icon: '2'
  },
  {
    id: 2,
    title: 'Cards',
    url: '/cards',
    icon: '3'
  },
  {
    id: 4,
    title: 'Tooltips',
    url: '/tooltips',
  },
  {
    id: 5,
    title: 'Reactive-button',
    url: '/reactive-button',
  },
  {
    id: 8,
    title: 'Reactive Book counter',
    url: '/reactive-book-counter',
  },
  {
    id: 12,
    title: 'Reactive Show & Hide',
    url: '/reactive-collapse',
  },
  {
    id: 6,
    title: 'Toasts',
    url: '/toasts',
  },
  {
    id: 7,
    title: 'Vue modal',
    url: '/modal',
  },
  {
    id: 9,
    title: 'Theme',
    url: '/theme',
  },
  {
    id: 10,
    title: 'Transitions',
    url: '/transitions',
  },
  {
    id: 11,
    title: 'Animations',
    url: '/animations',
  },
  {
    id: 13,
    title: 'DeCapitalizr',
    url: '/decapitalizr',
  },
];
</script>

<template>
  <div class="w-full md:w-80 w-full md:w-80 px-3 md:px-0">
    <div class="md:p-4 overflow-y-auto md:bg-blue-400 rounded-r-lg overflow-y-auto">
      <ul class="kre-navigation space-x-4 md:space-y-2 md:space-x-0">
        <MenuItem v-for="item in items" :key="item.id" :title="item.title" :icon="item.icon" :url="item.url"></MenuItem>
      </ul>
    </div>
  </div>
</template>
