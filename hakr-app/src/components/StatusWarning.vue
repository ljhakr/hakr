<script setup lang="ts">
import StatusBlock from "@/prototypes/StatusBlock.vue";
const text =
  "Generic warning message.";
</script>
<template>
  <StatusBlock :statusClass="'mb-3 border-danger-color text-danger-color'">
    <!--{{ "text" variable commented out to trigger fallback message }}-->
    <!--{{ text }}-->
  </StatusBlock>
</template>
