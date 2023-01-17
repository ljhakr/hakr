<script setup lang="ts">
import {defineProps} from 'vue';
defineProps<{
  cardClass?: string
}>()
</script>
<template>
  <div :class="cardClass" class="text-center card">
    <slot></slot>
  </div>
</template>
