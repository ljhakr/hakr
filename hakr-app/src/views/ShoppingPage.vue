<script setup>
import {ref, computed} from "vue";

const header = ref('Shopping List')

const items = ref(
    [
      {id: 1, label: 'red', purchased: true, highPriority: false},
      {id: 2, label: 'green', purchased: true, highPriority: true},
      {id: 3, label: 'blue', purchased: false, highPriority: false}
    ]
)

const newItem = ref('');
const newItemHighPriority = ref(false);
const editing = ref(false)

const hasProducts = computed(() => {
  //when referencing a reactive ref, ".value" must be used
  return items.value.length;
})

const reversedItems = computed(()=> [...items.value].reverse())
// const reversedItems = computed(()=> {
//   return [...items.value].reverse()
// })

const doEdit = (e) => {
  editing.value = e;
  newItem.value = '';
  newItemHighPriority.value = false;
}

const saveItem = () => {
  //when referencing a reactive ref, ".value" must be used
  items.value.push({
    id: items.value.length + 1,
    label: newItem.value,
    highPriority: newItemHighPriority.value
  })
  //reset input to default state
  //referencing a reactive ref with .value
  newItem.value = '';
  newItemHighPriority.value = false;
}

const togglePurchased = (item) => {
  item.purchased = !item.purchased
}
</script>

<template>
  <div class="container bg-white mb-10">
    <div class="mx-auto">
      <div class="heading">
        <h1>{{ header }}</h1>
      </div>
      <h2 v-if="hasProducts" class="mb-10">There are products in store!</h2>
      <p v-else class="mb-10">No products in store</p>

      <div class="mb-5">
        <button v-if="editing" class="btn" @click="doEdit(false)">Cancel</button>
        <button v-else class="btn btn-primary" @click="doEdit(true)">Add item</button>
      </div>

      <div v-if="editing" class="mb-10">
        <form class="add-item-form" @submit.prevent="saveItem">
          <input v-model.trim="newItem" class="border p-2" placeholder="Add an item" type="text">
          <label for="">
            High priority:
            <input id="" v-model="newItemHighPriority" name="" type="checkbox">
          </label>
          <button :disabled="newItem.length < 2" class="inline-block btn btn-primary">
            Save item
          </button>
          <br>
          <span :class="{'font-bold' : newItemHighPriority}">{{ newItem }}</span>
          <br>
        </form>
      </div>

      <ul v-if="hasProducts">
        <li
            v-for="(item, id) in reversedItems"
            :key=id
            :class="[
              item.purchased ? '!text-muted line-through' : '',
              item.highPriority ? 'priority' : '',
              { 'font-bold' : item.highPriority }
            ]"
            @click="togglePurchased(item)"
        >
          {{ item.id + ' - ' }}{{ item.label }}
        </li>
      </ul>
      <p v-else class="!text-muted">No products to show here</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/css/shopping/styles.scss';
</style>
