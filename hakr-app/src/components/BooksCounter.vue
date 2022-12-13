<script setup lang="ts">
import { reactive } from 'vue';
import ButtonProto from "@/prototypes/ButtonProto.vue";

const MIN_BOOKS = 0;
const MAX_BOOKS = 5;
const state = reactive({ count: 1 })
function increment(){
  state.count++
}
function subtraction(){
  state.count--
}
</script>
<template>
  <p>Amount of books: {{ state.count }}</p>
  <div class="sm:flex justify-center sm:gap-4">
    <ButtonProto @click="increment" :disabled="state.count === MAX_BOOKS"
                 :class="'w-full sm:w-auto mb-3 sm:mb-0 bg-blue-900'">Add a book!</ButtonProto>
    <ButtonProto @click="subtraction" :disabled="state.count === MIN_BOOKS"
                 :class="'transition ease-in-out duration-500 w-full sm:w-auto bg-red-900'">Delete a book</ButtonProto>
  </div>
</template>
