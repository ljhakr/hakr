<script setup>
import PageHeading from '@/components/PageHeading.vue';
import BooksCounter from '@/components/BooksCounter.vue';
</script>

<template>
  <div class="container bg-white mb-10">
    <div class="mx-auto text-center">
      <PageHeading :title="'VUE app with Tailwind'" :subTitle="'Book counter'"></PageHeading>
      <div class="columns-1">
        <div class="w-full text-center mb-8">
          <BooksCounter></BooksCounter>
        </div>
      </div>
    </div>
  </div>
</template>
