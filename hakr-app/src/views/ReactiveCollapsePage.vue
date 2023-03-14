<script setup>
import PageHeading from '@/components/PageHeading.vue';
import ReactiveCollapse from '@/components/ReactiveCollapse.vue';
</script>

<template>
  <div class="container bg-white mb-10">
    <div class="mx-auto text-center">
      <PageHeading :title="'Reactive collapse'"></PageHeading>
      <div class="columns-1">
        <div class="w-full text-center mb-8">
          <ReactiveCollapse></ReactiveCollapse>
        </div>
      </div>
    </div>
  </div>
</template>
