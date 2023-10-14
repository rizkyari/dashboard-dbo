<template>
    <div class="text-center">
      <h2>Are you sure you want to delete</h2>
      <div>
        data from -  {{ props.detail.name }} ?
      </div>
      <div class="d-flex justify-content-around my-2">
        <button type="button" class="btn btn-primary" @click="deleteCustomer" >
          <span v-if="!loading">Yes</span>
          <div v-else class="spinner-border spinner-border-sm" role="status"></div>
        </button>
        <button type="button" class="btn btn-danger" @click="closeModal">Cancel</button>
      </div>
    </div>
</template>

<script setup>
import {  defineProps, defineEmits, ref } from 'vue';
import CusData from '../static/customers.json';

const props = defineProps({
  detail: Object,
  index: Number,
});
const loading = ref(false);
const emit = defineEmits(['close'])
const closeModal = () => emit('close');
const deleteCustomer = () => {
    loading.value = true;
    // const orderId = props.detail.id;
    // const orderIndex = OrderData.orders.data.findIndex((order) => order.id === orderId);

    // if (orderIndex !== -1) {
    //     OrderData.orders.data[orderIndex] = { ...editOrder };
    // }
    // console.log(props.index);
    // OrderData.orders.data[props.index] = { ...editOrder.value };
    CusData.customers.data.splice(props.index, 1);
    setTimeout(() => {
        closeModal();
        loading.value = false;
    },1000)
    // console.log(OrderData);
}
</script>