<template>
  <input
      v-model="value"
      :class="{
        'border-solid border-2 border-green': validateText(props.name),
        'border-solid border-2 border-red-600': !validateText(props.name)
      }"
      class="bg-gray-100"
      placeholder="Name"
      type="text"
  />
</template>

<script lang="ts" setup>
import {computed, defineEmits, defineProps, withDefaults} from "vue";
import validateText from "@/validation/validate-text";

interface Props {
  name?: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: '',
});

const emit = defineEmits<{
  (e: 'update:name', value: number): void;
}>();

const value = computed({
  get: () => {
    console.log('name is: ', {modelValue: props.name})
    return props.name;
  },
  set: (value) => {
    emit('update:name', value);
  },
});

validateText;
</script>
