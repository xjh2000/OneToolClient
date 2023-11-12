<script setup lang="ts">

</script>

<template>
  <el-container style="
          height: 100%;
          ">
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside style="width: 15%;">
        <Aside />
      </el-aside>
      <el-container>
        <el-main>
          <slot />
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
