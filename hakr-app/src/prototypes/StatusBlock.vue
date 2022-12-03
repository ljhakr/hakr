<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    statusClass: { type: String, required: true, default: "container" },
  },
});
</script>
<template>
  <div
    :class="statusClass"
    class="w-full lg:w-2/3 xl:w-1/2 text-center border-2 rounded-sm p-2"
  >
    <p><slot>Generic fallback status message.</slot></p>
  </div>
</template>
