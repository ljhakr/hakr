<script setup lang="ts">
import StatusMessage from "@/prototypes/StatusMessage.vue";
import { defineProps } from 'vue';

const props = defineProps({
  textWarning: { type: String, required: false, default: "This is a generic warning message!" },
});
</script>
<template>
  <StatusMessage :statusClass="'mb-3 border-danger-color text-danger-color'">
    {{ props.textWarning }}
  </StatusMessage>
</template>
