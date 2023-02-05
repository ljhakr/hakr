<script setup>
import PageHeading from '@/components/PageHeading.vue';
import ReactiveBookCounter from '@/components/ReactiveBookCounter.vue';
</script>

<template>
  <div class="container bg-white mb-10">
    <div class="mx-auto text-center">
      <PageHeading :title="'Reactive book counter'"></PageHeading>
      <div class="columns-1">
        <div class="w-full text-center mb-8">
          <ReactiveBookCounter></ReactiveBookCounter>
        </div>
      </div>
    </div>
  </div>
</template>
