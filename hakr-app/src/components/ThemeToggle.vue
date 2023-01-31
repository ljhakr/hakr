<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {defineEmits, defineProps} from 'vue';

const props = defineProps({
  isDarkTheme: {type: Boolean, default: false},
});
const emits = defineEmits(['toggleDarkTheme']);
</script>

<template>
  <button class="float-right right-4" @click="emits('toggleDarkTheme')">
    <span class="text-gray-200" v-if="props.isDarkTheme">
      <font-awesome-icon class="fa-2x" :icon="['fas', 'fa-sun']" />
    </span>
    <span v-else>
      <font-awesome-icon class="fa-2x" :icon="['fas', 'fa-moon']" /></span>
  </button>
</template>
