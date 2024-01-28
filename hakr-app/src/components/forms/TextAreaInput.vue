<template>
  <textarea
      rows="4"
      cols="50"
      v-model="value"
      :class="{
        'border-solid border-2 border-green': validateTextarea(props.message),
        'border-solid border-2 border-red-600': !validateTextarea(props.message)
      }"
      class="bg-gray-100"
      type="textarea"
  />
</template>

<script lang="ts" setup>
import {computed, defineEmits, defineProps, withDefaults} from "vue";
import validateTextarea from "@/validation/validate-textarea";

interface Props {
  message?: string;
}

const props = withDefaults(defineProps<Props>(), {
  message: '',
});

const emit = defineEmits<{
  (e: 'update:message', value: number): void;
}>();

const value = computed({
  get: () => {
    console.log('message is: ', {modelValue: props.message})
    return props.message;
  },
  set: (value) => {
    emit('update:message', value);
  },
});

validateTextarea;
</script>
