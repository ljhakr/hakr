<script setup lang="ts">
import CardBlock from "@/prototypes/CardBlock.vue";
const heading = "Card example";
const text = "Lorem ipsum card component dolor";
</script>
<template>
  <CardBlock :cardClass="''">
    <h2>{{ heading }}</h2>
    <p>{{ text }}</p>
  </CardBlock>
</template>
