<template>
  <div>
    <div class="container overflow-hidden my-5">
      <div class="row gy-2">
        <h5 class="col-md-6 text-md-end">Customer Name</h5>
        <div class="col-md-6">{{ props.detail.customerName }}</div>
      </div>
      <div class="row gy-2">
        <h5 class="col-md-6 text-md-end">Order Number</h5>
        <div class="col-md-6">{{ props.detail.orderNumber }}</div>
      </div>
      <div class="row gy-2">
        <h5 class="col-md-6 text-md-end">Product Name</h5>
        <div class="col-md-6">{{ props.detail.productName }}</div>
      </div>
      <div class="row gy-2">
        <h5 class="col-md-6 text-md-end">Quantity</h5>
        <div class="col-md-6">{{ props.detail.quantity }}</div>
      </div>
      <div class="row gy-2">
        <h5 class="col-md-6 text-md-end">Order Date</h5>
        <div class="col-md-6">{{ props.detail.orderDate }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps} from 'vue'

const props = defineProps({
  detail: Object,
});

</script>

<style scoped></style>
