<script setup>
import PageHeading from '@/components/PageHeading.vue';
import HorizontalRuler from '@/components/HorizontalRuler.vue';
</script>
<template>
  <div class="drop-shadow-lg shadow-white container bg-white mb-10 p-4">
    <div class="mx-auto text-center">
      <PageHeading></PageHeading>
    </div>
    <HorizontalRuler></HorizontalRuler>
    <p>Back to  <router-link to='/cards'>events overview</router-link>.</p>
  </div>
</template>
