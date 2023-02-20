<script setup>
import ButtonCounter from '@/components/ButtonCounter.vue';
import PageHeading from '@/components/PageHeading.vue';
import ModalScreen from '@/prototypes/ModalScreen.vue';
import {ref} from 'vue';

const modal = ref(false);

function openModal() {
  modal.value = true;
  scrollPrevent();
}

function closeModal() {
  modal.value = false;
  scrollPrevent();
}

const body = document.querySelector('body');
function scrollPrevent() {
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
