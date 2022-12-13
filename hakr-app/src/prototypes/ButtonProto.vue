<script setup lang="ts">
import { defineProps} from 'vue';
const props = defineProps({
  class: { type: String, required: false, default: 'bg-blue-900' },
  disabled: { type: Boolean, required: false },
});
</script>
<template>
  <button :disabled="props.disabled" :class="[props.class, props.disabled ? 'text-gray-400' : 'text-white']"
          class="py-2 px-3 rounded-md">
    <slot></slot>
  </button>
</template>
