<script lang="ts" setup>
import {ref} from "vue";
import EmojiInput from "@//components/EmojiInput.vue";

const emoji = ref("");
const submit = () => {
  console.log("Emoji: ", emoji);
}
</script>

<template>
  <div id="app" class="row d-flex justify-content-center">
    <div class="col-md-5 mt-3">
      <div class="card">
        <div class="card-header">Emoji Selector</div>
        <div class="card-body">
          <form @submit.prevent="submit">
            <div class="mb-2">
              <EmojiInput v-model="emoji" :options="{ position: 'right' }" />
            </div>
            <button class="bg-orange bg-blue-900 hover:bg-blue-600 text-white hover:scale-105 transition ease-in duration-75 py-2 px-3 rounded-md" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
