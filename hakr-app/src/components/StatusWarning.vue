<script setup lang="ts">
import StatusProto from "@/prototypes/StatusProto.vue";
const text =
  "Generic warning message.";
</script>
<template>
  <StatusProto :statusClass="'mb-3 border-danger-color text-danger-color'">
    <!--{{ "text" variable commented out to trigger fallback message }}-->
    <!--{{ text }}-->
  </StatusProto>
</template>
