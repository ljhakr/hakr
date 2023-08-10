<script setup lang="ts">
import {reactive} from 'vue';
import SingleButton from '@/prototypes/SingleButton.vue';

const state = reactive({collapsed: true});
const bookState = reactive({showBook: true});


function collapseToggle() {
  state.collapsed = !state.collapsed;
}
function bookToggle() {
  bookState.showBook = !bookState.showBook;
}

</script>
<template>
  <details class="bg-gray-300 open:bg-amber-200 duration-300 mb-20">
    <summary @click="collapseToggle">
      <span v-if="state.collapsed === false">Read less</span>
      <span v-else>Read more</span>
    </summary>
    <p>Did you hurt your head? Okay, alright, I’ll prove it to you. Look at my driver’s license, expires 1987. Look at my
      birthday, for crying out load I haven’t even been born yet. And, look at this picture, my brother, my sister, and
      me. Look at the sweatshirt, Doc, class of 1984. Oh. Actually, people call me Marty. Uh no, not hard at all. So
      anyway, George, now Lorraine, she really likes you. She told me to tell you that she wants you to ask her to the
      Enchantment Under The Sea Dance.
    </p>
  </details>

  <SingleButton
      @click="bookToggle"
      :buttonClass="'w-full sm:w-auto mb-3 sm:mb-0 bg-blue-900 hover:bg-blue-600'">Show a book!
  </SingleButton>
  <SingleButton
      @click="bookToggle"
      :buttonClass="'w-full sm:w-auto mb-3 sm:mb-0 bg-blue-900 hover:bg-blue-600'">Hide a book!
  </SingleButton>
  <p v-if="bookState.showBook === true">
    It's a book!
  </p>
</template>
