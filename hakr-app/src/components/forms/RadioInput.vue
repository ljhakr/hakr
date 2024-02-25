<template>
  <input
      type="checkbox"
      v-model="value"
      class="bg-gray-100"
      :class="{
        'border-solid border-2 border-green': validateCheckbox(props.check),
        'border-solid border-2 border-red-600': !validateCheckbox(props.check)
      }"
  />
</template>

<script lang="ts" setup>
import {computed, defineEmits, defineProps, withDefaults} from "vue";
import validateCheckbox from "@/validation/validate-checkbox";

interface Props {
  check?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  check: false,
});

const emit = defineEmits<{
  (e: 'update:check', value: number): void;
}>();

const value = computed({
  get: () => {
    console.log('human is: ', {modelValue: props.check})
    return props.check;
  },
  set: (value) => {
    emit('update:check', value);
  },
});

</script>
