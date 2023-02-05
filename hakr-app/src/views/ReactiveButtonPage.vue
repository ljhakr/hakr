<script setup>
import ReactiveCounter from '@/components/ReactiveCounter';
import PageHeading from '@/components/PageHeading.vue';

</script>
<template>
  <div class="container bg-white mb-10">
    <div class="mx-auto text-center">
      <PageHeading :title="'Reactive button'"></PageHeading>
      <ReactiveCounter/>
    </div>
  </div>
</template>
