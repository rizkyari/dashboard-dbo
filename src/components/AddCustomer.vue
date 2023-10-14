<template>
    <div>
      <h2>Add New Customer</h2>
      <form @submit.prevent="addCust">
        <div class="mb-3">
          <label for="name" class="form-label">Customer Name</label>
          <input v-model="newOrder.name" type="text" class="form-control" id="name">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">E-mail</label>
          <input v-model="newOrder.email" type="text" class="form-control" id="email">
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Phone Number</label>
          <input v-model="newOrder.phone" type="text" class="form-control" id="phone">
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Address</label>
          <input v-model="newOrder.address" type="text" class="form-control" id="address">
        </div>
        <button type="submit" class="btn btn-primary">
            <span v-if="!loading">Add Customer</span>
            <div v-else class="spinner-border spinner-border-sm" role="status"></div>
        </button>
      </form>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import CusData from '../static/customers.json';

const newOrder = ref({
  name: '',
  email: '',
  phone: '',
  address: ''
});
const emit = defineEmits(['close']);
const closeModal = () => emit('close');
const loading = ref(false);
const addCust = () => {
    loading.value = true;
    const order = {
    id: generateUniqueId(),
    ...newOrder.value
  };

  CusData.customers.data.push(order);

function generateUniqueId() {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 5);

  const uniqueId = `${timestamp}${random}`;

  return uniqueId;
}

setTimeout(() => {
        closeModal();
        loading.value = false;
    },1000)

}
</script>