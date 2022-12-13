<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps({
  statusClass: { type: String, required: true, default: "container" },
});
</script>
<template>
  <div :class="props.statusClass" class="w-full text-center border-2 rounded-sm p-2">
    <p><slot>Generic fallback status message.</slot></p>
  </div>
</template>
