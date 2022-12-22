<script setup lang="ts">
import {reactive} from 'vue';
import SingleButton from '@/prototypes/SingleButton.vue';
import NoticeMessage from '@/components/NoticeMessage.vue';

const MIN_BOOKS = 0;
const MAX_BOOKS = 3;
const state = reactive({count: 1});

function increment() {
  state.count++;
}

function subtraction() {
  state.count--;
}
</script>
<template>
  <p>Amount of books: {{ state.count }}</p>
  <div class="sm:flex justify-center sm:gap-4 mb-2">
    <SingleButton @click="increment" :disabled="state.count === MAX_BOOKS"
                  :class="'w-full sm:w-auto mb-3 sm:mb-0 bg-blue-900 hover:bg-blue-600'">Add a book!
    </SingleButton>
    <SingleButton @click="subtraction" :disabled="state.count === MIN_BOOKS"
                  :class="'hover:bg-red-600 w-full sm:w-auto bg-red-900'">Delete a book
    </SingleButton>
  </div>

  <div v-if="state.count !== MIN_BOOKS && state.count !== MAX_BOOKS" class="container mx-auto flex justify-center">
    <NoticeMessage :noticeType="'default'">Add to your card</NoticeMessage>
  </div>
  <div v-if="state.count === MIN_BOOKS" class="container mx-auto flex justify-center">
    <NoticeMessage :noticeType="'warning'">Your cart is empty</NoticeMessage>
  </div>
  <div v-if="state.count === MAX_BOOKS" class="container
  mx-auto flex justify-center">
    <NoticeMessage :noticeType="'success'">Maximum amount added'</NoticeMessage>
  </div>
</template>
