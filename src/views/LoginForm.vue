<template>
    <div class="login-container">
      <div class="login-box p-4">
        <h2 class="text-center">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <input type="text" class="form-control" v-model="formData.email" placeholder="Email" />
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" v-model="formData.password" placeholder="Password" />
          </div>
          <div v-if="errorMessage" class="text-center text-danger">
            Either your email or password is wrong. Please try agein
          </div>
          <button type="submit" class="btn btn-primary">
            <span v-if="!loading">Login</span>
            <div v-else class="spinner-border spinner-border-sm" role="status">
            </div>
          </button>
        </form>
      </div>
    </div>
  </template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useDataStore } from '../store/data';
import { useRouter } from 'vue-router';
const dataStore = useDataStore();
const errorMessage = ref(false);
const loading = ref(false);
const formData = ref({
      email: '',
      password: '',
    });
const router = useRouter();
const handleLogin = async() => {
  loading.value = true;
  errorMessage.value = false;
  try {
    const response = await axios.get('/data/profile.json');
    const profiles = response.data.profiles;

    const { email, password } = formData.value;

    
    setTimeout(() => {
      const user = profiles.find((profile) => profile.email === email && profile.password === password);

      if (user) {
      dataStore.login(user);
      router.push('/dashboard');
      console.log('success');
    } else {
      errorMessage.value = true;
      console.log('failed');
    }

    loading.value = false;
    }, 1000);
  } catch (error) {
    loading.value = false;
    errorMessage.value = true;
    console.error('Error during login:', error);
    return 'error';
  }
}

</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-box h2 {
  text-align: center;
}
</style>