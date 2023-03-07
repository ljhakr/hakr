<script setup lang="ts">
import {defineProps, ref} from 'vue';

defineProps<{
  circleClass?: string
}>();

const x = ref(0);
const y = ref(0);

function onMousemove(e) {
  x.value = e.clientX;
  y.value = e.clientY;
}
</script>
<template>
  <div
      @mousemove="onMousemove"
      :style="{ backgroundColor: `hsl(${y}${y}, 80%, 50%)` }"
      :class="circleClass"
      class="kre-movearea rounded-full w-20 h-20"
  >
  </div>
</template>
