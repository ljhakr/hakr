<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {defineEmits, defineProps} from 'vue';

const props = defineProps({
  isDarkTheme: {type: Boolean, default: false},
});
const emits = defineEmits(['toggleDarkTheme']);
</script>

<template>
  <button class="absolute right-2 top-2 hover:scale-110 ease-in-out delay-75 duration-200" @click="emits('toggleDarkTheme')">
    <transition name="kre-reactive-button">
    <span class="text-gray-200" v-if="props.isDarkTheme">
      <font-awesome-icon class="hover:text-white fa-2x" :icon="['fas', 'fa-sun']" />
    </span>
    <span v-else>
      <font-awesome-icon class="text-gray-700 hover:text-black fa-2x" :icon="['fas', 'fa-moon']" /></span>
    </transition>
  </button>
</template>
