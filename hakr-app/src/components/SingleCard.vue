<script setup lang="ts">
import CardProto from "@/prototypes/CardProto.vue";
const heading = "Card example";
const text = "Lorem ipsum card component dolor";
</script>
<template>
  <CardProto :cardClass="''">
    <h2>{{ heading }}</h2>
    <p>{{ text }}</p>
  </CardProto>
</template>
