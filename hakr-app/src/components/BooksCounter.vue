<script setup lang="ts">
import { reactive } from 'vue';
import SingleButton from "@/prototypes/SingleButton.vue";
import StatusSuccess from '@/components/StatusSuccess.vue';
import StatusWarning from '@/components/StatusWarning.vue';

const MIN_BOOKS = 0;
const MAX_BOOKS = 5;
const state = reactive({ count: 1 })
function increment(){
  state.count++;
}
function subtraction(){
  state.count--;
}
</script>
<template>
  <p>Amount of books: {{ state.count }}</p>
  <div class="sm:flex justify-center sm:gap-4 mb-2">
    <SingleButton @click="increment" :disabled="state.count === MAX_BOOKS"
                 :class="'w-full sm:w-auto mb-3 sm:mb-0 bg-blue-900'">Add a book!</SingleButton>
    <SingleButton @click="subtraction" :disabled="state.count === MIN_BOOKS"
                 :class="'transition ease-in-out duration-500 w-full sm:w-auto bg-red-900'">Delete a book</SingleButton>
  </div>
  <div v-show="state.count === MIN_BOOKS" class="container md:w-2/3 xl:w-1/2 max-w-2xl mx-auto flex justify-center">
    <StatusWarning :textWarning="'Your cart is empty'"></StatusWarning>
  </div>
  <div v-show="state.count === MAX_BOOKS" class="container md:w-2/3 xl:w-1/2 max-w-2xl mx-auto flex justify-center">
    <StatusSuccess :textSuccess="'You have selected the maximum amount for this item'"></StatusSuccess>
  </div>
</template>
