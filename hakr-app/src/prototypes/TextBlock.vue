<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps( {
  textClass: { type: String, required: false, default: "container" },
});
</script>
<template>
  <div :class="props.textClass.value">
    <slot></slot>
  </div>
</template>
