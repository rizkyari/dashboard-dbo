import { defineStore } from 'pinia';
import {ref} from 'vue';

export const useDataStore = defineStore('data',() => {
    const profile = ref('');
    const currentUser = ref({
        avatar: 'https://img.freepik.com/free-photo/user-profile-front-side_187299-39595.jpg',
        name: 'user',
        email: '',
        role: '',
        password: '',
    });
    const hideSidebar = ref(false);

    function login(user){
        currentUser.value = user;
    }

    function logout(){
        currentUser.value = null
    }

    function setHideSidebar(value) {
        hideSidebar.value = value;
      }

    return{
        profile,
        currentUser,
        login,
        logout,
        setHideSidebar,
    }
})