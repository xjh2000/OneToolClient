<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import Footer from '@/components/Footer.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<template>
  <div>
    <el-container>
      <el-header>
        <ElButton @click="() => toggleDark()">{{ isDark ? "light" : "dark" }}</ElButton>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
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
  </div>
</template>
