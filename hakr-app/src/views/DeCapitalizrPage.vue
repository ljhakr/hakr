<script setup>
import PageHeading from '@/components/PageHeading.vue';
import DeCapitalizr from '@/components/DeCapitalizr';
</script>

<template>
  <div class="container bg-white mb-10">
    <div class="mx-auto">
      <PageHeading :title="'Decapitalizr'"></PageHeading>
      <div class="columns-1">
        <div class="w-full mb-8">
          <DeCapitalizr />
        </div>
      </div>
    </div>
  </div>
</template>
