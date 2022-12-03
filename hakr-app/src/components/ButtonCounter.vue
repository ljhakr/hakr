<script>
export default {
  data() {
    return {
      animatePlus: false,
      animateMin: false,
      count: 0,
    };
  },
  methods: {
    add() {
      return this.count++;
    },
    subtract() {
      return this.count--;
    },
    animateCirclePlus() {
      if (this.count !== 0) {
        this.animatePlus = true;
        this.animateMin = false;
      } else {
        this.animatePlus = false;
        this.animateMin = false;
      }
    },
    animateCircleMin() {
      if (this.count !== 0) {
        this.animateMin = true;
        this.animatePlus = false;
      } else {
        this.animatePlus = false;
        this.animateMin = false;
      }
    }
  },
  computed: {
    isDisabled: function() {
      return this.count;
    },
  },
};
</script>

<template>
  <div class="transition ease-in-out delay-150 hover:scale-110 duration-150 w-14 h-14 mb-3 mx-auto
  rounded-full flex items-center justify-center border-2 border-blue-300 shadow-lg"
       :class="{ animatePlus, animateMin, 'border-green-400 bg-green-100': animatePlus, 'border-red-400 bg-red-100': animateMin }" data-circle>
    {{ count }}
  </div>
  <div class="sm:flex justify-center sm:gap-4">
    <button class="w-full sm:w-auto mb-3 sm:mb-0 bg-blue-900 text-white py-2 px-3 rounded-md" @click="add(); animateCirclePlus()">Increase count
    </button>
    <button :disabled="isDisabled === 0" class="w-full sm:w-auto bg-red-900 text-white py-2 px-3 rounded-md"
            @click="subtract(); ; animateCircleMin()">Decrease count
    </button>
  </div>
</template>
