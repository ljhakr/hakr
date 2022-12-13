<script setup lang="ts">
import SingleCard from "@/prototypes/SingleCard.vue";
const heading = "Card example";
const text = "Lorem ipsum card component dolor";
</script>
<template>
  <SingleCard :cardClass="''">
    <h2>{{ heading }}</h2>
    <p>{{ text }}</p>
  </SingleCard>
</template>
