<script setup lang="ts">
import { Sunny, ElementPlus, Ship, Sunset } from '@element-plus/icons-vue'

</script>

<template>
    <ElContainer>
        <el-space direction="horizontal">
            <ElText size="large">Links:</ElText>
            <ElLink :icon="Sunny" href="https://github.com/xjh2000/OneToolClient">Github</ElLink>
            <ElLink :icon="Sunset" href="https://vuejs.org/">Vue</ElLink>
            <ElLink :icon="Ship" href="https://vueuse.org/">vueuse</ElLink>
            <ElLink :icon="ElementPlus" href="https://element-plus.org/">element-plus</ElLink>
        </el-space>
    </ElContainer>
</template>

