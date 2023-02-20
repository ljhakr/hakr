<script setup lang="ts">
import {defineProps, withDefaults} from 'vue';
import TextBlock from '@/prototypes/TextBlock.vue';

export interface Props {
  title?: string;
  subTitle?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'This is a stub',
});

</script>
<template>
  <TextBlock :textClass="'mb-10'">
    <h1 class="font-medium mb-0">{{ props.title }}</h1>
    <p v-if="props.subTitle" class="text-muted-color"><em>{{ props.subTitle }}</em></p>
  </TextBlock>
</template>
