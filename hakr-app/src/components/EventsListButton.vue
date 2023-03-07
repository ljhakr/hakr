<script setup lang="ts">
import {defineEmits, defineProps} from 'vue';

const props = defineProps({
  buttonClass: {type: String},
});
const emits = defineEmits(['showEventsList']);
</script>
<template>
  <button
      @click="emits('showEventsList')"
          :class="props.buttonClass"
          class="py-2 px-3 rounded-md">
    <slot></slot>
  </button>
</template>
