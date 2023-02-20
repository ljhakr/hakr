<script setup lang="ts">
import {defineProps} from 'vue';

defineProps<{
  textClass?: string
}>();
</script>
<template>
  <div :class="textClass">
    <slot></slot>
  </div>
</template>
