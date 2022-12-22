<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps({
  class: {type: String, required: false},
  disabled: {type: Boolean, required: false},
});
</script>
<template>
  <button :disabled="props.disabled" :class="[props.class, props.disabled ? 'text-gray-400 bg-gray-200 hover:bg-gray-200' : 'text-white hover:scale-105']"
          class="transition ease-in duration-75 py-2 px-3 rounded-md">
    <slot></slot>
  </button>
</template>
