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
  <TextBlock :textClass="''">
    <h1 class="">{{ props.title }}</h1>
    <p v-if="props.subTitle" class=""><em>{{ props.subTitle }}</em></p>
  </TextBlock>
</template>
