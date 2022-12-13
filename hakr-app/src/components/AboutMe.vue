<script setup lang="ts">
import TextBlock from "@/prototypes/TextBlock.vue";
const title = "VUE app with Tailwind";
const text = "Sub header";
</script>
<template>
  <TextBlock :textClass="'mb-10'">
    <h1 class="mb-0">{{ title }}</h1>
    <p class="text-muted-color"><em>{{ text }}</em></p>
  </TextBlock>
</template>
