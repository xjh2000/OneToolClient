<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';
import { ref } from 'vue';

const userStore = useUserStore(); 

const username = ref('');
const password = ref('');

const login = async () => {
    try {
       await userStore.login(username.value, password.value);
    } catch (error) {
        console.error('An error occurred:', error);
        alert('Login failed');
    }
};
</script>

<template>
    <div>
        <h2>Login Page</h2>
        <form @submit.prevent="login">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="username" required>

            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required>

            <button type="submit">Login</button>
        </form>
    </div>
</template>