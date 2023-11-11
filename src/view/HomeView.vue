<script setup lang="ts">
import LayoutBasic from '@/layout/LayoutBasic.vue'
</script>

<template>
    <LayoutBasic>
        <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">OneTool</h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">OneTool is not only one tool</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <div class="text-sm font-semibold leading-6 text-gray-900">
                    <router-link to="/about">About more<span aria-hidden="true">→</span></router-link>
                </div>

            </div>
        </div>
    </LayoutBasic>
</template>


