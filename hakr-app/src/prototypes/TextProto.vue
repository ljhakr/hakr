<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    textClass: { type: String, required: false, default: "container" },
  },
});
</script>
<template>
  <div :class="textClass">
    <slot></slot>
  </div>
</template>
