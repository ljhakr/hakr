<script setup lang="ts">
import StatusMessage from "@/prototypes/StatusMessage.vue";
import {defineProps} from 'vue';

const props = defineProps({
  textSuccess: { type: String, required: false, default: "This is a generic success message!" },
});
</script>
<template>
  <StatusMessage :statusClass="'mb-10 border-green-700 text-green-700'">
    {{ props.textSuccess }}
  </StatusMessage>
</template>
