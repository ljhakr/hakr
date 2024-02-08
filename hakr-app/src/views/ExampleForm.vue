<script lang="ts" setup>
import {ref} from "vue";
import EmailInput from '@/components/forms/EmailInput.vue'
import TextInput from '@/components/forms/TextInput.vue'
import TextAreaInput from '@/components/forms/TextAreaInput.vue'
import SingleButton from '@/prototypes/SingleButton.vue';

const messageTitle = ref('')
const messageText = ref('')
const messageSenderEmail = ref('')

const submit = () => {
  console.log("Newsletter Submitted", {
    name: messageTitle,
    message: messageText,
    email: messageSenderEmail,
  });
}

const formData = ()=>{
  console.log('button clicked: ', {
    UserName: messageTitle
  })
}
</script>

<template>
  <form @submit.prevent="submit">
    <div class="mb-2">
      <TextInput v-model:name="messageTitle"/>
    </div>
    <div class="mb-2">
      <TextAreaInput v-model:message="messageText"/>
    </div>
    <div class="mb-2">
      <email-input v-model:email="messageSenderEmail"/>
    </div>

    <SingleButton :disabled="messageTitle.length <= 2" @click="formData();" :buttonClass="'w-full mb-3 bg-blue-900'">Submit
    </SingleButton>
  </form>
</template>
