<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    cardClass: { type: String, required: false },
  },
});
</script>
<template>
  <div class="text-center card">
    <slot></slot>
  </div>
</template>
