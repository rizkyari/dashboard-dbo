<template>
    <div class="p-3">
        <div class="bg-white p-3 rounded vh-100">
            <h2>Welcome, to your dashboard. Here's what you can do as <span v-if="dataStore.currentUser.role === 'admin'">an Admin</span><span v-else>a Staff</span> :</h2>
            <div class="video-container d-flex justify-content-center">
                <video controls width="640" height="360">
                    <source src="@/assets/videos/admin.mp4" type="video/mp4" v-if="dataStore.currentUser.role === 'admin'"/>
                    <source src="@/assets/videos/staff.mp4" type="video/mp4" v-else/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { useDataStore } from '../store/data';
const dataStore = useDataStore();
</script>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 80%;
}

@media only screen and (max-width: 600px) {
    .video-container video {
        width: 100%;
        height: 100%;
    }
}
</style>