<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';
import { useDark, useToggle } from '@vueuse/core'
import { ArrowDown, Avatar, ArrowRight } from '@element-plus/icons-vue'
const isDark = useDark()
const toggleDark = useToggle(isDark)

const userStore = useUserStore()

const handleCommand = (command: string | number | object) => {
    if (command === 'logout') {
        userStore.logout()
    }
}

</script>

<template>
    <el-row justify="space-around">
        <el-col :span="6">
            <el-text size="large">OneTool</el-text>
        </el-col>
        <el-col :span="6" :offset="12">
            <ElSpace>
                <ElButton @click="() => toggleDark()">{{ isDark ? "light" : "dark" }}</ElButton>
                <el-dropdown @command="handleCommand">
                    <ElSpace>
                        <el-avatar alt="user" size="default" shape="circle"></el-avatar>
                        <ElText size="large"> {{ userStore.username }}</ElText>
                        <ElIcon>
                            <ArrowDown />
                        </ElIcon>
                    </ElSpace>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item :icon="Avatar" command="profile">Profile</el-dropdown-item>
                            <el-dropdown-item :icon="ArrowRight" command="logout" divided>Log Out</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </ElSpace>

        </el-col>

    </el-row>
</template>