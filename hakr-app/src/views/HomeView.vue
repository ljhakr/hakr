<script lang="ts">
import { defineComponent } from "vue";
import ModalBlock from '@/prototypes/ModalBlock.vue'
import AboutMe from "@/components/AboutMe.vue"; // @ is an alias to /src
import ButtonCounter from "@/components/ButtonCounter.vue"; // @ is an alias to /src
import StatusSuccess from "@/components/StatusSuccess.vue"; // @ is an alias to /src
import StatusWarning from "@/components/StatusWarning.vue"; // @ is an alias to /src
import SingleCard from "@/components/SingleCard.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    AboutMe,
    ButtonCounter,
    ModalBlock,
    StatusSuccess,
    StatusWarning,
    SingleCard,
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    setModal(){
      return this.showModal = true;
    }
  }
});
</script>
<template>
  <div class="container mx-auto flex justify-center">
    <StatusWarning></StatusWarning>
  </div>
  <div class="container mx-auto flex justify-center">
    <StatusSuccess></StatusSuccess>
  </div>
  <div
    class="container h-screen bg-white"
  >
    <div class="w-1/2 mx-auto text-center">
      <h1><AboutMe></AboutMe></h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
      <SingleCard></SingleCard>
      <SingleCard></SingleCard>
      <SingleCard></SingleCard>
    </div>
    <hr class="mb-10 text-gray-200">
    <div class="mx-auto text-center mb-2">
      <ButtonCounter></ButtonCounter>
      <a href="#" id="show-modal" class="underline underline-offset-2 inline-block mt-2" @click.prevent="setModal()">About this counter</a>
    </div>
  </div>
  <Teleport to="body">
    <ModalBlock :show="showModal" @close="showModal = false">
      <template #header>
        <h1 class="mb-4">Information</h1>
      </template>
      <template #body>
        <p>It's a counter.</p>
      </template>
    </ModalBlock>
  </Teleport>
</template>
