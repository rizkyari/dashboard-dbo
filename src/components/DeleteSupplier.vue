<template>
    <div class="text-center">
      <h2>Are you sure you want to delete</h2>
      <div>
        data from -  {{ props.detail.name }} ?
      </div>
      <div class="d-flex justify-content-around my-2">
        <button type="button" class="btn btn-primary" @click="deleteSupplier" >
            <span v-if="!loading">Yes</span>
            <div v-else class="spinner-border spinner-border-sm" role="status"></div>
        </button>
        <button type="button" class="btn btn-danger" @click="closeModal">Cancel</button>
      </div>
    </div>
</template>

<script setup>
import {  defineProps, defineEmits, ref } from 'vue';
import SupplierData from "../static/suppliers.json";

const props = defineProps({
  detail: Object,
  index: Number,
});
const loading = ref(false);
const emit = defineEmits(['close'])
const closeModal = () => emit('close');
const deleteSupplier = () => {
    loading.value = true;
    SupplierData.suppliers.data.splice(props.index, 1);
    setTimeout(() => {
        closeModal();
        loading.value = false;
    },1000)
}
</script>