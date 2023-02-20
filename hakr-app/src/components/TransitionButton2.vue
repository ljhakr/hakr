<script setup lang="ts">
import {defineEmits, defineProps, withDefaults} from 'vue';

export interface Props {
  isShowButton?: boolean
  disabled?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  isShowButton: true
})

const emits = defineEmits(['toggleButton']);
</script>
<template>
  <button
      v-if="props.isShowButton"
      @click="emits('toggleButton')"
      :disabled="props.disabled"
      :class="[props.class, {'text-gray-400 bg-gray-200 hover:bg-gray-200': props.disabled}]"
      class="bg-blue-200 py-2 px-3 rounded-md">
    <slot></slot>
  </button>

  <div v-else>
    <p>Thank you.</p>
  </div>
</template>
