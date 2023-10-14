<template>
    <div class="p-3">
        <div class="bg-white p-3 rounded vh-100">
            <h2 class="mb-5">Profile Management</h2>
            <div>
                <div class="d-flex justify-content-center">
                    <img :src="dataStore.currentUser.avatar" alt="hugenerd" width="150" height="150" class="rounded-circle border border-2 p-2">
                    
                </div>
               <div class="container overflow-hidden  my-5">
                        <div class="row gy-2">
                            <h5 class="col-md-6 text-md-end">Name</h5>
                            <div class="col-md-6">{{ dataStore.currentUser.name }} </div>
                        </div>
                        <div class="row gy-2">
                            <h5 class="col-md-6 text-md-end">Email</h5>
                            <div class="col-md-6">{{ dataStore.currentUser.email }} </div>
                        </div>
                        <div class="row gy-2">
                            <h5 class="col-md-6 text-md-end">Role</h5>
                            <div class="col-md-6">{{ dataStore.currentUser.role }} </div>
                        </div>
                        <div class="row gy-2">
                            <h5 class="col-md-6 text-md-end">Password</h5>
                            <div class="col-md-6">{{ dataStore.currentUser.password }} </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useDataStore } from '../store/data';
const dataStore = useDataStore();

</script>

<style scoped></style>