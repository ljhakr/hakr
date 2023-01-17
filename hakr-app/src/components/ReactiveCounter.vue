<script setup lang="ts">
import { reactive } from 'vue';
const obj = reactive({count: 0});
function count() {
  obj.count++;
}
</script>
<template>
  <button
      @click="count"
      class="peer mb-8 w-full sm:w-auto bg-blue-900 hover:bg-blue-600 text-white hover:scale-105 transition ease-in duration-75 py-2 px-3 rounded-md">
    Reactivity ({{ obj.count }})
  </button>
  <span class="ml-2 invisible peer-hover:visible">Click button to increase count</span>
</template>
