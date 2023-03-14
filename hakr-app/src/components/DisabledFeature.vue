<script setup lang="ts">
import { ref } from 'vue';

const disabled = ref(false)

function warnDisabled() {
  disabled.value = true
  setTimeout(() => {
    disabled.value = false
  }, 1500)
}
</script>
<template>
  <button
      class="bg-blue-900 text-white mr-2 py-1 px-2 rounded-md"
      :class="{ shake: disabled }"
      @click="warnDisabled">
    Click me
  </button>
  <span v-if="disabled">This feature is disabled!</span>
</template>
