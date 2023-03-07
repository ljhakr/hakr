<script setup lang="ts">
import {defineProps} from 'vue';

defineProps<{
  buttonClass?: string
  events?: string
  isShowEventsList: boolean
}>();
</script>
<template>
  <TransitionGroup name="kre-list" class="xxx">
    <p v-if="isShowEventsList">A line of text</p>
    <ul v-if="isShowEventsList">
      <li v-for="event in events" :key="event">{{ event.title }}</li>
    </ul>
  </TransitionGroup>
</template>
