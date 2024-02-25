<script lang="ts" setup>
import {ref} from "vue";
import RadioInput from '@/components/forms/RadioInput.vue'
import EmailInput from '@/components/forms/EmailInput.vue'
import TextInput from '@/components/forms/TextInput.vue'
import TextAreaInput from '@/components/forms/TextAreaInput.vue'
import SingleButton from '@/prototypes/SingleButton.vue';

const messageCheck = ref(false)
const messageTitle = ref('')
const messageText = ref('')
const messageSenderEmail = ref('')

const submit = () => {
  console.log("Newsletter Submitted", {
    human: messageCheck,
    name: messageTitle,
    message: messageText,
    email: messageSenderEmail,
  });
}


</script>

<template>
  <form @submit.prevent="submit">
    <div class="mb-2">
      <label for="">
      <RadioInput v-model:check="messageCheck"/>
        Prove that you are human
      </label>
    </div>
    <div class="mb-2">
      <TextInput v-model:name="messageTitle"/>
    </div>
    <div class="mb-2">
      <TextAreaInput v-model:message="messageText"/>
      <p v-if="messageText" class="text-muted">Nice story bro!<br>{{ messageText }}</p>
    </div>
    <div class="mb-2">
      <email-input v-model:email="messageSenderEmail"/>
    </div>

    <SingleButton :disabled="messageTitle.length <= 2" :buttonClass="'w-full mb-3 bg-blue-900'">Submit
    </SingleButton>
  </form>
</template>
