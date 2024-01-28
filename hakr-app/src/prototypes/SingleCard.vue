<script setup lang="ts">
import {defineProps} from 'vue';

defineProps<{
  cardClass?: string
}>();
</script>
<template>
  <div :class="cardClass" class="text-center card">
    Slots are great for html
    <slot name="card-header"></slot>
    <slot></slot>
    <slot name="card-footer"></slot>
  </div>
</template>
