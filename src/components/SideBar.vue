<template>
    <div class="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
            <div class="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
                <a href="/" class="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5">B<span class="d-none d-sm-inline">rand</span></span>
                </a>
                <ul class="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-md-center justify-content-around align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item py-2">
                      <router-link to="/dashboard" active-class="active" class="text-decoration-none">
                            <i class="bi-house"></i><span class="ms-1 d-none d-sm-inline">Home</span>
                      </router-link>
                    </li>
                    <li class="py-2">
                      <router-link to="/supplier-management" active-class="active" class="text-decoration-none">
                        <i class="bi bi-box-seam"></i><span class="ms-1 d-none d-sm-inline">Supplier Management</span>
                      </router-link>
                    </li>
                    <li class="py-2">
                      <router-link to="/order-management" active-class="active" class="text-decoration-none">
                        <i class="bi bi-truck"></i><span class="ms-1 d-none d-sm-inline">Order Management</span>
                      </router-link>
                    </li>
                    <li class="py-2">
                      <router-link to="/customer-management" active-class="active" class="text-decoration-none">
                        <i class="bi bi-person-rolodex"></i><span class="ms-1 d-none d-sm-inline">Customer Management</span>
                      </router-link>
                    </li>
                </ul>
                <div class="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img :src="dataStore.currentUser.avatar" alt="hugenerd" width="28" height="28" class="rounded-circle">
                        <span class="d-none d-sm-inline mx-1">{{ dataStore.currentUser.name }}</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" style="">
                        <li>
                          <router-link to="/authentication-management" class="text-decoration-none">
                            <a class="dropdown-item" href="#">Profile</a>
                          </router-link>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#" @click="handleLogOut">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script setup>
import { useDataStore } from '../store/data';
const dataStore = useDataStore();
import { useRouter } from 'vue-router';
const router = useRouter();
const handleLogOut = () => {
  router.push('/login');
}

</script>

<style scoped>
.router-link-exact-active {
    background-color: #E3F2FD;
    border-radius: 10px;
    padding: 5px;
}
</style>
