<script setup lang="ts">
import { Expand, Help, House, SwitchButton, Fold } from '@element-plus/icons-vue'
// use this variables to toggle the collapse state
const isCollapse = ref(false)
const toggleCollapse = () => {
    isCollapse.value = !isCollapse.value
}
</script>

<template>
    <ElSpace direction="vertical" style="height: 100%;">
        <ElButton :icon="isCollapse ? Expand : Fold" @click="toggleCollapse" link />
        <ElMenu :collapse="isCollapse" :router="true">
            <ElMenuItem index="/">
                <ElIcon>
                    <House />
                </ElIcon>
                <template #title>Home</template>

            </ElMenuItem>
            <ElMenuItem index="/about">
                <ElIcon>
                    <Help />
                </ElIcon>
                <template #title>About</template>

            </ElMenuItem>
            <ElMenuItem index="/login">
                <ElIcon>
                    <SwitchButton />
                </ElIcon>
                <template #title>Login</template>

            </ElMenuItem>
        </ElMenu>
    </ElSpace>
</template>