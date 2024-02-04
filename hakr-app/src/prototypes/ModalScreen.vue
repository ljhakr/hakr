<script setup lang="ts">
import {defineEmits, defineProps, watch} from 'vue';

const props = defineProps({
  show: {type: Boolean, default: false, required: true},
});

const emits = defineEmits(['close']);

const emitClose = () => {
  emits('close');
  console.log('Emitted CLOSE')
}

watch(props, async () => {
  if (props.show) {
    // On btn click the value will be false
    console.log('ModalScreen modal watch props TRUE ' + props.show);
  } else {
    console.log('ModalScreen modal watch props FALSE ' + props.show);
  }
});
</script>
<template>
  <Transition name="modal">
    <div v-if="props.show" class="modal-mask fixed top-0 left-0 w-full h-full bg-black/70 table">
      <div class="modal-wrapper table-cell p-3">
        <div
            class="overflow-y-auto md:max-h-screen-1/2 modal-container w-full mx-auto p-3 bg-white rounded-sm shadow-md transition ease-in-out delay-50 duration-300">
          <div class="modal-header flex">
            <div class="w-4/5">
              <slot name="header">default header</slot>
            </div>
            <div @click="emits('close');" class="w-1/5 text-end" aria-label="Close modal">X</div>
          </div>
          <div class="modal-body">
            <slot name="body">default body</slot>
          </div>
          <div class="modal-footer">
            <div class="flex justify-end">
              <slot name="footer">
                <button
                    class="modal-default-button bg-blue-900 text-white py-2 px-3 rounded-md"
                    @click="emitClose();"
                >Close ccc
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
