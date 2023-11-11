<script setup lang="ts">

 
</script>

<template>
  <div>
    <Header />
    <ElButton :auto-insert-space="true"> this</ElButton>
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
