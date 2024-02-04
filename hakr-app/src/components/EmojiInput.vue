<script lang="ts" setup>
import {withDefaults, defineProps, defineEmits, onMounted, ref} from "vue"
import {EmojiButton} from '@joeattardi/emoji-button';

interface Props {
  modelValue?: string;
  options?: any
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  options: {}
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

// must be outside onMounted for the addEventListener to work
const btn = ref()

onMounted(() => {
  const picker = new EmojiButton(props.options)

  picker.on('emoji', (emoji) => {
    emit('update:modelValue', emoji)
  });

  btn.value.addEventListener('click', () => {
    picker.togglePicker(btn.value)
    console.log('... Button clicked')
  })
})
</script>

<template>
  <div class="input-group">
    <input :value="props.modelValue.emoji" class="border border-blue py-2 px-3 rounded-md rounded-r-none" readonly type="text"/>
    <button ref="btn"
            class="bg-gray-light hover:bg-gray-dark hover:text-white hover:scale-105 transition ease-in duration-75 py-2 px-3 rounded-md rounded-l-none"
            role="button" type="button">
      {{ props.modelValue ? props.modelValue.emoji : 'Select 123' }}
    </button>
  </div>
  <p v-show="props.modelValue.name">Emoji: "{{ props.modelValue.name }}"</p>
</template>
