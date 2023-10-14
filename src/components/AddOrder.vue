<template>
    <div>
      <h2>Add New Order</h2>
      <form @submit.prevent="addOrder">
        <div class="mb-3">
          <label for="orderNumber" class="form-label">Order Number</label>
          <input v-model="newOrder.orderNumber" type="text" class="form-control" id="orderNumber">
        </div>
        <div class="mb-3">
          <label for="customerName" class="form-label">Customer Name</label>
          <input v-model="newOrder.customerName" type="text" class="form-control" id="customerName">
        </div>
        <div class="mb-3">
          <label for="productName" class="form-label">Product Name</label>
          <input v-model="newOrder.productName" type="text" class="form-control" id="productName">
        </div>
        <div class="mb-3">
          <label for="quantity" class="form-label">Quantity</label>
          <input v-model="newOrder.quantity" type="number" class="form-control" id="quantity">
        </div>
        <div class="mb-3">
          <label for="orderDate" class="form-label">Order Date</label>
          <input v-model="newOrder.orderDate" type="date" class="form-control" id="orderDate">
        </div>
        <button type="submit" class="btn btn-primary">
            <span v-if="!loading">Add Order</span>
            <div v-else class="spinner-border spinner-border-sm" role="status"></div>
        </button>
      </form>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import OrderData from '../static/orders.json';

const newOrder = ref({
  orderNumber: '',
  customerName: '',
  productName: '',
  quantity: 0,
  orderDate: ''
});
const emit = defineEmits(['close']);
const closeModal = () => emit('close');
const loading = ref(false);
const addOrder = () => {
    loading.value = true;
    const order = {
    id: generateUniqueId(),
    ...newOrder.value
  };

OrderData.orders.data.push(order);

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