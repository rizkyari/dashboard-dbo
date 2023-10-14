<template>
    <div class="p-3" id="supplier">
      <div class="bg-white p-3 rounded vh-100">
        <h2 class="mb-lg-5">Supplier Management</h2>
        <div>
          <div class="mb-3">
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="handleModal"
              v-if="dataStore.currentUser.role !== 'staff'"
            >
              + Add
            </button>
          </div>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Supplier Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, idx) in SupplierData.suppliers.data" :key="idx">
                  <th scope="row">
                    {{ (currentPage - 1) * itemsPerPage + idx + 1 }}
                  </th>
                  <td>{{ item.name }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.phone }}</td>
                  <td>
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-primary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        ...
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" @click="handleDetail(item)"
                            >Detail</a
                          >
                        </li>
                        <li v-if="dataStore.currentUser.role !== 'staff'">
                          <a class="dropdown-item" @click="handleEdit(item, idx)"
                            >Edit</a
                          >
                        </li>
                        <li v-if="dataStore.currentUser.role !== 'staff'">
                          <a
                            class="dropdown-item"
                            @click="handleDelete(item, idx)"
                            >Delete</a
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <button @click="previousPage" class="page-link">Previous</button>
              </li>
              <li
                v-for="page in totalPages"
                :key="page"
                class="page-item"
                :class="{ active: page === currentPage }"
              >
                <button @click="goToPage(page)" class="page-link">
                  {{ page }}
                </button>
              </li>
              <li
                class="page-item"
                :class="{ disabled: currentPage === totalPages }"
              >
                <button @click="nextPage" class="page-link">Next</button>
              </li>
            </ul>
          </nav>
          <Modal v-if="showModal" @close="showModal = false">
            <AddSupplier @close="showModal = false" />
          </Modal>
          <Modal v-if="showDetail" @close="showDetail = false">
            <DetailSupplier :detail="detail" />
          </Modal>
          <Modal v-if="showEdit" @close="showEdit = false">
            <EditSupplier
              :detail="detail"
              :index="index"
              @close="showEdit = false"
            />
          </Modal>
          <Modal v-if="showDelete" @close="showDelete = false">
            <DeleteSupplier
              :detail="detail"
              :index="index"
              @close="showDelete = false"
            />
          </Modal>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  import { useDataStore } from '../store/data';
  import Modal from "@/components/ModalBase.vue";
  import AddSupplier from "@/components/AddSupplier.vue";
  import SupplierData from "../static/suppliers.json";
  import DetailSupplier from "@/components/DetailSupplier.vue";
  import EditSupplier from "@/components/EditSupplier.vue";
  import DeleteSupplier from "@/components/DeleteSupplier.vue";
  const dataStore = useDataStore();
  const showModal = ref(false);
  const showDetail = ref(false);
  const showEdit = ref(false);
  const showDelete = ref(false);
  const detail = ref([]);
  const index = ref(null);
  
  const currentPage = ref(1);
  const itemsPerPage = ref(5);
  const totalPages = computed(() => {
    const totalItems = SupplierData.suppliers.data.length;
    return Math.ceil(totalItems / itemsPerPage.value);
  });
  
  function handleModal() {
    showModal.value = true;
    console.log(showModal.value);
  }
  
  function handleDelete(item, idx) {
    showDelete.value = true;
    detail.value = item;
    index.value = idx;
  }
  
  function handleDetail(details) {
    showDetail.value = true;
    detail.value = details;
  }
  
  function handleEdit(item, idx) {
    showEdit.value = true;
    detail.value = item;
    index.value = idx;
  }
  
  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
      console.log("Next page:", currentPage.value);
    }
  };
  
  const previousPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
      console.log("Previous page:", currentPage.value);
    }
  };
  
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
      console.log("Go to page:", currentPage.value);
    }
  };
  
//   const currentPageData = computed(() => {
//     const startIndex = (currentPage.value - 1) * itemsPerPage.value;
//     const endIndex = startIndex + itemsPerPage.value;
//     return SupplierData.suppliers.data.slice(startIndex, endIndex);
//   });
  </script>
  
  <style scoped>
  .modal-fade-enter-active {
    transition: all 0.5s ease-out;
  }
  
  .modal-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }
  
  .modal-fade-enter-from,
  .modal-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
  
  .modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
  }
  </style>
  