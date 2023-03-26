<script setup lang="ts">
import {defineEmits, defineProps, ref} from 'vue';

const props = defineProps({
  modelValue: String,
  modelModifiers: {default: () => ({})},
});

const lowerCase = ref('');

defineEmits(['update:modelValue']);

console.log(props.modelModifiers); // { capitalize: true }
</script>
<template>
  <div class="mb-5 w-1/2">
    <form action="">
      <textarea class="w-full" v-model="lowerCase" placeholder="Paste UPPERCASE text here" type="text"></textarea>
      <button class="block ml-auto bg-blue-900 hover:bg-blue-700 text-white rounded py-1 px-2" type="submit">Submit
      </button>
    </form>
    <p><strong>Your decapitilized text:</strong></p>
    <p>
      {{ lowerCase.toLowerCase() }}
    </p>
  </div>
</template>k
