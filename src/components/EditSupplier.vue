<template>
    <div>
      <h2>Edit Supplier</h2>
      <form @submit.prevent="editCust">
        <div class="mb-3">
          <label for="name" class="form-label">Supplier Name</label>
          <input v-model="editOrder.name" type="text" class="form-control" id="name">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">E-mail</label>
          <input v-model="editOrder.email" type="text" class="form-control" id="email">
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Phone Number</label>
          <input v-model="editOrder.phone" type="text" class="form-control" id="phone">
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Address</label>
          <input v-model="editOrder.address" type="text" class="form-control" id="address">
        </div>
        <button type="submit" class="btn btn-primary">
            <span v-if="!loading">Edit Supplier</span>
            <div v-else class="spinner-border spinner-border-sm" role="status"></div>
        </button>
      </form>
    </div>
</template>

<script setup>
import { ref, defineProps,defineEmits } from 'vue';
import SupplierData from "../static/suppliers.json";

const props = defineProps({
  detail: Object,
  index: Number,
});
const loading = ref(false);
const editOrder = ref({ ...props.detail });
const emit = defineEmits(['close'])
const closeModal = () => emit('close');
const editCust = () => {
    loading.value = true;
    SupplierData.suppliers.data[props.index] = { ...editOrder.value };
    setTimeout(() => {
        closeModal();
        loading.value = false;
    },1000)
    
}
</script>