<script setup>
import ButtonCounter from '@/components/ButtonCounter.vue';
import PageHeading from '@/components/PageHeading.vue';
import ModalScreen from '@/prototypes/ModalScreen.vue';
import {ref} from 'vue';

const modal = ref(false);

function openModal() {
  modal.value = true;
  disable()
  //scrollPrevent();
}

function closeModal() {
  modal.value = false;
  enable()
  //scrollPrevent();
}


//https://alvarotrigo.com/blog/prevent-scroll-on-scrollable-element-js/
// https://stackoverflow.com/questions/55548261/unable-to-preventdefault-inside-passive-event-listener-due-to-target-being-treat
function preventScroll(e){
  e.preventDefault();
  e.stopPropagation();

  return false;
}

const html = document.querySelector('html');
const body = document.querySelector('body');
function disable(){
  html?.addEventListener('wheel', preventScroll, {passive:false});
  html?.classList.toggle('kre-modal');
  scrollPrevent()
}

function enable(){
  setTimeout(() => {
    html?.removeEventListener('wheel', preventScroll);
    html?.classList.toggle('kre-modal');
    scrollPrevent()
  }, 200)
}




function scrollPrevent() {
  //styles seem to have no influence on scrolling in Safari
  body?.classList.toggle('overflow-y-hidden');
}
</script>
<template>
  <div class="container bg-white mb-10">
    <div class="mx-auto text-center">
      <PageHeading :title="'Vue Modal'" :subTitle="''"></PageHeading>
      <div class="mx-auto columns-1">
        <ButtonCounter></ButtonCounter>
        <a href="#" class="underline underline-offset-2 inline-block mt-2" @click="openModal">About this counter</a>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <ModalScreen :show="modal" @close="closeModal">
      <template #header>
        <h1 class="mb-4">Information</h1>
      </template>
      <template #body>
        <p>It's a counter.</p>
      </template>
      <template #footer>
      </template>
    </ModalScreen>
  </Teleport>
</template>
