<template>
  <input
      v-model="value"
      :class="{
        'border-solid border-2 border-green yy': validateEmail(props.email),
        'border-solid border-2 border-red-600': !validateEmail(props.email)
      }"
      class="bg-gray-100"
      placeholder="E-mail"
      type="email"
  />
</template>

<script lang="ts" setup>
import {computed, defineEmits, defineProps, withDefaults} from "vue";
import validateEmail from "@/validation/validate-email";

interface Props {
  email?: string;
}

const props = withDefaults(defineProps<Props>(), {
  email: '',
});

const emit = defineEmits<{
  (e: 'update:email', value: number): void;
}>();

const value = computed({
  get: () => {
    console.log('email is: ', {modelValue: props.email})
    return props.email;
  },
  set: (value) => {
    emit('update:email', value);
  },
});

validateEmail;
</script>
