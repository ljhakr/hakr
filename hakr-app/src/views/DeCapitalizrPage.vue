<script setup>
import PageHeading from '@/components/PageHeading.vue';
import DeCapitalizr from '@/components/DeCapitalizr';
import {ref} from "vue";

const title = ref('Decapitalizr')
</script>

<template>
  <div class="container bg-white mb-10">
    <div class="mx-auto">
      <input class="text-muted" v-model="title" type="text">
        <PageHeading :title="title"></PageHeading>
      <div class="columns-1">
        <div class="w-full mb-8">
          <DeCapitalizr :title="title" />
        </div>
      </div>
      <div class="mt-20">
      <hr class="my-3">
      <p class="text-muted text-sm">{{ title }} - copyright</p>
      </div>
    </div>
  </div>
</template>
