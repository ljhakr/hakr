<script setup lang="ts">
import {defineProps} from 'vue';
import TextBlock from "@/prototypes/TextBlock.vue";

const props = defineProps({
  class: { type: String },
  title: { type: String, default: 'This is a stub' },
  subTitle: { type: String },
});
</script>
<template>
  <TextBlock :textClass="'mb-10'">
    <h1 class="font-medium text-4xl mb-0">{{ props.title }}</h1>
    <p v-if="props.subTitle" class="text-muted-color"><em>{{ props.subTitle }}</em></p>
  </TextBlock>
</template>
