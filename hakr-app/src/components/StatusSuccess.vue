<script setup lang="ts">
import StatusBlock from "@/prototypes/StatusBlock.vue";
const text = " This is a success message!";
</script>
<template>
  <StatusBlock :statusClass="'mb-10 border-green-700 text-green-700'">
    <!--{{ "text" variable commented out to trigger fallback message }}-->
    {{ text }}
  </StatusBlock>
</template>
