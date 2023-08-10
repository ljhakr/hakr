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
  <div class="">
    <form action="">
      <textarea class="" v-model="lowerCase" placeholder="Paste UPPERCASE text here" type="text"></textarea>
      <button class="" type="submit">Submit
      </button>
    </form>
    <p><strong>Your decapitilized text:</strong></p>
    <p>
      {{ lowerCase.toLowerCase() }}
    </p>
  </div>
</template>
