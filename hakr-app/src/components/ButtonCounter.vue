<script setup lang="ts">
import { ref } from 'vue';
import SingleButton from "@/prototypes/SingleButton.vue";

const MIN_BOOKS = 0;
const MAX_BOOKS = 5;
const animatePlus = ref(false);
let animateMin = ref(false);
const count = ref(0);
function add() {
  count.value++;
}
function subtract() {
  count.value--;
}
function animateCirclePlus() {
  if (count.value !== 0) {
    animatePlus.value = true;
    animateMin.value = false;
  } else {
    animatePlus.value = false;
    animateMin.value = false;
  }
}
function animateCircleMin() {
  if (count.value !== 0) {
    animateMin.value = true;
    animatePlus.value = false;
  } else {
    animatePlus.value = false;
    animateMin.value = false;
  }
}
</script>
<template>
  <div class="transition ease-in-out delay-150 hover:scale-110 duration-150 w-14 h-14 mb-3 mx-auto
  rounded-full flex items-center justify-center border-2 border-blue-300 shadow-lg"
       :class="{ 'border-green-400 bg-green-100': animatePlus, 'border-red-400 bg-red-100': animateMin }" data-circle>
    {{ count }}
  </div>
  <div class="sm:flex justify-center sm:gap-4">
    <SingleButton :disabled="count === MAX_BOOKS" @click="add(); animateCirclePlus()" :class="'w-full sm:w-auto mb-3 sm:mb-0 bg-blue-900'">Increase count</SingleButton>
    <SingleButton :disabled="count === MIN_BOOKS" @click="subtract(); animateCircleMin()"
                 :class="'transition ease-in-out delay-150 duration-500 w-full sm:w-auto bg-red-900'">Decrease count</SingleButton>
  </div>
</template>
