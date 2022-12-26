<script setup lang="ts">
  import { defineProps } from 'vue';
  const props = defineProps({
    class: {type: String, default:'mb-8'}
  });
</script>

<template>
  <hr :class="props.class" class="text-gray-200">
</template>
