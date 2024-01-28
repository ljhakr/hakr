<script setup lang="ts">
import { defineProps, ref } from 'vue';

defineProps<{
  title: string
}>();

const lowerCase = ref('');

</script>
<template>
  <div class="mb-5 w-1/2">
    <p>This is the {{ title }} app!</p>
    <form action="">
      <textarea class="w-full p-4 border" v-model="lowerCase" placeholder="Paste UPPERCASE text here" type="text"></textarea>
      <button class="block ml-auto bg-blue-900 hover:bg-blue-700 text-white rounded py-1 px-2" type="submit">Submit
      </button>
    </form>
    <p><strong>Your decapitilized text:</strong></p>
    <p>
      {{ lowerCase.toLocaleLowerCase() || 'Waiting for input...' }}
    </p>
  </div>
</template>
