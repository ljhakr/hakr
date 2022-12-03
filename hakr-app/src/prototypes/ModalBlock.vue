<script>
export default {
  props: {
    show: Boolean
  }
}
</script>
<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask fixed top-0 left-0 w-full h-full bg-black/50 table">
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
                    @click="$emit('close')"
                >Close</button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
