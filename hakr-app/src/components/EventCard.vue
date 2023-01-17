<script setup lang="ts">
import SingleCard from "@/prototypes/SingleCard.vue";
import { withDefaults, defineProps } from 'vue';
export interface Props {
  title: string
  content: string
  url?: string
}
const props = withDefaults(defineProps<Props>(), {
  url: '/about'
})
</script>
<template>
  <SingleCard :cardClass="'relative group hover:bg-blue-900 border border-blue-900'">
    <h2>
      <router-link class="after:absolute after:inset-0 group-hover:text-white" :to="props.url">{{ props.title }}</router-link>
    </h2>
    <span v-html="props.content"></span>
  </SingleCard>
</template>
