<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <nav>
      <router-link to="/about">About</router-link>
    </nav>
    <nav>
      <router-link to="/login">login</router-link>
    </nav>
    <TheWelcome />
  </main>
</template>
