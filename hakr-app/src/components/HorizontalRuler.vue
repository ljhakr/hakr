<script setup lang="ts">
  import { defineProps } from 'vue';
  defineProps<{
    hrClass?: string
  }>();
</script>

<template>
  <hr :class="hrClass" class="text-gray-200">
</template>
