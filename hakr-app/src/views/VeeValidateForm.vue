<script lang="ts" setup>
import {Form as VeeForm, Field as VeeField, ErrorMessage} from 'vee-validate';

import validateEmail from "@/validation/vee-validate/email";
import validateText from "@/validation/vee-validate/text";
import {ref} from "vue";
import {email} from "@vee-validate/rules";

const submit = (values)=>{
  console.log('Submitted values: ', JSON.stringify(values, null, 2));
}

const textInput = ref("")
const emailInput = ref("")
</script>

<template>
  <VeeForm @submit.prevent="submit">
    <div class="mb-2">
      <VeeField v-model="textInput" name="name" class="border border-blue p-3 rounded-sm" :rules="validateText" placeholder="Your name" />
      <p class="text-muted">{{ textInput }}</p>
      <div><ErrorMessage name="name"/></div>
    </div>
    <div class="mb-2">
      <VeeField v-model="emailInput" name="email" class="border border-blue p-3 rounded-sm" :rules="validateEmail" type="email" placeholder="Your email" />
      <p class="text-muted">{{ emailInput }}</p>
      <div><ErrorMessage name="email"/></div>
    </div>

    <button   class="text-white bg-blue-500 hover:scale-105 transition ease-in duration-75 py-2 px-3 rounded-md">Submit</button>
  </VeeForm>
</template>
