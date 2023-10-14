<template>
    <div>
      <div class="container overflow-hidden my-5">
        <div class="row gy-2">
          <h5 class="col-md-6 text-md-end">Customer Name</h5>
          <div class="col-md-6">{{ props.detail.name }}</div>
        </div>
        <div class="row gy-2">
          <h5 class="col-md-6 text-md-end">Phone  Number</h5>
          <div class="col-md-6">{{ props.detail.phone }}</div>
        </div>
        <div class="row gy-2">
          <h5 class="col-md-6 text-md-end">E-mail</h5>
          <div class="col-md-6">{{ props.detail.email }}</div>
        </div>
        <div class="row gy-2">
          <h5 class="col-md-6 text-md-end">Address</h5>
          <div class="col-md-6">{{ props.detail.address }}</div>
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
  