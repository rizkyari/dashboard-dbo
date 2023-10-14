<template>
    <div>
      <h2>Edit Order</h2>
      <form @submit.prevent="editOrders">
        <div class="mb-3">
          <label for="orderNumber" class="form-label">Order Number</label>
          <input v-model="editOrder.orderNumber" type="text" class="form-control" id="orderNumber">
        </div>
        <div class="mb-3">
          <label for="customerName" class="form-label">Customer Name</label>
          <input v-model="editOrder.customerName" type="text" class="form-control" id="customerName">
        </div>
        <div class="mb-3">
          <label for="productName" class="form-label">Product Name</label>
          <input v-model="editOrder.productName" type="text" class="form-control" id="productName">
        </div>
        <div class="mb-3">
          <label for="quantity" class="form-label">Quantity</label>
          <input v-model="editOrder.quantity" type="number" class="form-control" id="quantity">
        </div>
        <div class="mb-3">
          <label for="orderDate" class="form-label">Order Date</label>
          <input v-model="editOrder.orderDate" type="date" class="form-control" id="orderDate">
        </div>
        <button type="submit" class="btn btn-primary">
            <span v-if="!loading">Edit Order</span>
            <div v-else class="spinner-border spinner-border-sm" role="status"></div>
        </button>
      </form>
    </div>
</template>

<script setup>
import { ref, defineProps,defineEmits } from 'vue';
import OrderData from '../static/orders.json';

const props = defineProps({
  detail: Object,
  index: Number,
});
const loading = ref(false);
const editOrder = ref({ ...props.detail });
const emit = defineEmits(['close'])
const closeModal = () => emit('close');
const editOrders = () => {
    loading.value = true;
    // const orderId = props.detail.id;
    // const orderIndex = OrderData.orders.data.findIndex((order) => order.id === orderId);

    // if (orderIndex !== -1) {
    //     OrderData.orders.data[orderIndex] = { ...editOrder };
    // }
    OrderData.orders.data[props.index] = { ...editOrder.value };
    setTimeout(() => {
        closeModal();
        loading.value = false;
    },1000)
    
}
</script>