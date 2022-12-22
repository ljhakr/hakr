<script setup lang="ts">
  import { defineProps } from 'vue';
  const props = defineProps({
    class: {type: String}
  });
</script>

<template>
  <hr :class="props.class" class="mb-8 text-gray-200">
</template>
