<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    textClass: { type: String, required: false, default: "container" },
  },
});
</script>
<template>
  <span :class="textClass">
    <slot></slot>
  </span>
</template>
