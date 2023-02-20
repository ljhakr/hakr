<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps<{
  noticeType?: string; default?: 'default'
}>();

let noticeClass = '';

if (props.noticeType === 'default') {
  noticeClass = 'border-gray-700 text-gray-700';
} else if (props.noticeType === 'success') {
  noticeClass = 'border-green-700 text-green-700';
} else {
  noticeClass = 'border-danger-color text-danger-color';
}
</script>
<template>
  <div :class="noticeClass" class="flex justify-center w-full bg-white text-center border-2 rounded-sm p-2">
    <div class='mr-2'>
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </div>
    <p>
      <slot>Generic status message.</slot>
    </p>
  </div>
</template>
