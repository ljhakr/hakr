<script setup lang="ts">
import TextProto from "@/prototypes/TextProto.vue";
const title = "VUE app with Tailwind";
const text = "Sub header";
</script>
<template>
  <TextProto :textClass="'mb-10'">
    <h1 class="mb-0">{{ title }}</h1>
    <p class="text-muted-color"><em>{{ text }}</em></p>
  </TextProto>
</template>
