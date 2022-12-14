<script setup>
  import PageHeading from "@/components/PageHeading.vue";
  import ButtonCounter from "@/components/ButtonCounter.vue";
  import BooksCounter from "@/components/BooksCounter.vue";
  import HorizontalRuler from "@/components/HorizontalRuler.vue";
  import EventCard from "@/components/EventCard.vue";
  import StatusSuccess from '@/components/StatusSuccess.vue';
  import StatusWarning from '@/components/StatusWarning.vue';
  import ModalScreen from "@/prototypes/ModalScreen.vue"
  import { ref } from 'vue';

  const modal = ref(false);
  function openModal(){
    modal.value = true;
    console.log('Home page modal = ' + modal.value )
  }
  function closeModal(){
    modal.value  = false;
    console.log('Home page modal = ' + modal.value )
  }
</script>
<template>

  <div class="container md:w-2/3 xl:w-1/2 max-w-2xl mx-auto flex justify-center">
    <StatusWarning></StatusWarning>
  </div>
  <div class="container md:w-2/3 xl:w-1/2 max-w-2xl mx-auto flex justify-center">
    <StatusSuccess :textSuccess="'Success!'"></StatusSuccess>
  </div>

  <div class="container bg-white mb-10">
    <div class="mx-auto text-center">
      <PageHeading></PageHeading>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
      </div>
      <HorizontalRuler></HorizontalRuler>
      <div class="mx-auto text-center mb-8">
        <ButtonCounter></ButtonCounter>
        <a href="#" class="underline underline-offset-2 inline-block mt-2" @click="openModal">About this counter</a>
      </div>
      <HorizontalRuler></HorizontalRuler>
      <div class="mx-auto text-center mb-8">
        <BooksCounter></BooksCounter>
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
