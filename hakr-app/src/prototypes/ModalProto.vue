<script setup lang="ts">
import { defineEmits, defineProps, watch } from 'vue';

const props = defineProps({
  show: { type: Boolean, default: false, required: true },
});

const emits = defineEmits(['close']);

function value (){
  // On btn click the value will be true
  console.log('ModalProto modal value ' + props.show)
}
if (props.show) {
  console.log("ModalProto modal TRUE : true")
} else {
  // On btn click the value will be true
  console.log("ModalProto modal FALSE: false")
}
watch(props, async () => {
  if (props.show) {
    // On btn click the value will be false
    console.log('ModalProto modal watch props TRUE ' + props.show)
  } else {
    console.log('ModalProto modal watch props FALSE ' + props.show)
  }
});
</script>
<template>
  <Transition name="modal">
    <div v-if="props.show" class="modal-mask fixed top-0 left-0 w-full h-full bg-black/50 table">
      <div class="modal-wrapper table-cell p-3">
        <div class="modal-container w-full mx-auto p-3 bg-white rounded-sm shadow-md transition ease-in-out delay-50 duration-300">
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>
          <div class="modal-body">
            <slot name="body">default body</slot>
          </div>
          <div class="modal-footer">
            <div class="flex justify-end">
              <slot name="footer">
                <button
                    class="modal-default-button bg-blue-900 text-white py-2 px-3 rounded-md"
                    @click="emits('close'); value()"
                >Close
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
