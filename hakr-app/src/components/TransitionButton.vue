<script setup lang="ts">
import {defineEmits, defineProps} from 'vue';

const props = defineProps({
  isDarkTheme: {type: Boolean, default: false},
});
const emits = defineEmits(['toggleDarkTheme']);
</script>
<template>
  <button
      @click="emits('toggleDarkTheme')"
      :disabled="props.disabled"
          :class="[props.class, {'text-gray-400 bg-gray-200 hover:bg-gray-200': props.disabled}]"
          class="py-2 px-3 rounded-md">
    <slot></slot>
  </button>
</template>
