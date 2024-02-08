<script lang="ts" setup>
import {Form as VeeForm, Field as VeeField, ErrorMessage} from 'vee-validate'

const submit = (values)=>{
  console.log('Submitted values: ', JSON.stringify(values, null, 2));
}

const validateEmail =(value) => {
  if (!value) {
    return 'This field is required';
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return 'This field must be a valid email';
  }
  // All is good
  return ['good!', true,];
}
</script>

<template>
  <VeeForm @submit="submit">
    <div class="mb-2">
      <VeeField name="name" class="border border-blue p-3 rounded-sm" type="text" placeholder="Your name" />
      <div><ErrorMessage name="name"/></div>
    </div>
    <div class="mb-2">
      <VeeField name="email" class="border border-blue p-3 rounded-sm" :rules="validateEmail" type="email" placeholder="Your email" />
      <div><ErrorMessage name="email"/></div>
    </div>

    <button class="text-white bg-blue-500 hover:scale-105 transition ease-in duration-75 py-2 px-3 rounded-md">Submit</button>
  </VeeForm>
</template>
