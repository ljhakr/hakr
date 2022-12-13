<script setup lang="ts">
import StatusProto from "@/prototypes/StatusProto.vue";
const text = " This is a success message!";
</script>
<template>
  <StatusProto :statusClass="'mb-10 border-green-700 text-green-700'">
    <!--{{ "text" variable commented out to trigger fallback message }}-->
    {{ text }}
  </StatusProto>
</template>
