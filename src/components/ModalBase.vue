<script setup>
import {  defineEmits } from "vue";
const emit = defineEmits(['close'])
const closeModal = () => emit('close');
</script>

<template>
        <div class="modal-overlay">
            <div class="bg-white p-3 rounded-md modal-width">
              <div class="text-end">
                <button type="button" @click="closeModal" class="btn btn-danger">X</button>
              </div>
              <div class="modal-content">
                <slot></slot>
              </div>
            </div>
        </div>
</template>

<style scoped>
.modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.modal-width{
  width: 50vw;
}

@media only screen and (max-width: 576px){
  .modal-width{
    width: 90vw;
  }
}
</style>