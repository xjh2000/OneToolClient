<script setup lang="ts">
import LayoutBasic from '@/layout/LayoutBasic.vue'

const targetUrl = ref('')
const resolerUrl = ref('https://jx.jsonplayer.com/player/?url=')

type Option = {
    resolerOrigin: string
    resolerUrl: string
}

const options = ref([
    { resolerOrigin: 'B站1', resolerUrl: 'https://jx.jsonplayer.com/player/?url=' },
    { resolerOrigin: '冰豆', resolerUrl: 'https://bd.jx.cn/?url=' },
    { resolerOrigin: 'M3U8', resolerUrl: 'https://jx.m3u8.tv/jiexi/?url=' },
    { resolerOrigin: '纯净1', resolerUrl: 'https://im1907.top/?jx=' },
])

</script>

<template>
    <LayoutBasic>
        <el-container style="width: 100%; height: 100%;">
            <ElHeader>
                <ElRow>
                    <ElCol :span="12">
                        <ElInput v-model="targetUrl" placeholder="请输入视频地址" />
                    </ElCol>
                    <ElCol :span="12" style="text-align: right;">
                        <ElSelect v-model="resolerUrl">
                            <ElOption v-for="item in options" :key="item.resolerUrl" :label="item.resolerOrigin"
                                :value="item.resolerUrl" />
                        </ElSelect>
                    </ElCol>
                </ElRow>
            </ElHeader>

            <iframe title="videoPlay" :src="resolerUrl + targetUrl" allowfullscreen="true"
                style="width: 100%; height: 100%;" />
        </el-container>
    </LayoutBasic>
</template>