<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps( {
  textClass: { type: String, required: false },
});
</script>
<template>
  <div :class="props.textClass">
    <slot></slot>
  </div>
</template>
