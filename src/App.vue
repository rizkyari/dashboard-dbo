<template>
  <div id="app">
    <div class="container-fluid overflow-hidden">
      <div  class="row sidebars overflow-auto bg-secondary-subtle">
          <SideBar  v-if="route.path !== '/login'"/>
        <div class="col d-flex flex-column h-sm-100">
          <router-view></router-view>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import SideBar from './components/SideBar.vue';
import { useRoute } from 'vue-router'

const route = useRoute()

</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
.sidebars {
  height: 100vh;
}

@media (min-width: 576px) {
    .h-sm-100 {
        height: 100%;
    }
}

/* @media only screen and (max-width: 576px){
  .sidebars {
      height: 16.5em;
    }
} */

</style>
