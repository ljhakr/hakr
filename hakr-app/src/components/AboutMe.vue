<script setup lang="ts">
import TextBlock from "@/prototypes/TextBlock.vue";
const text = "VUE app with Tailwind";
</script>
<template>
  <TextBlock :textClass="'mb-10 font-semibold'">
    {{ text }}
  </TextBlock>
</template>
