<template>
    <h2 style="margin-bottom: 16px;">文本拆分</h2>
    <el-input v-model="value" :autosize="{ minRows: 2, maxRows: 16 }" type="textarea" placeholder="将您的操作内容粘贴到此处。" />
    <el-container style="margin-top: 12px;">
        <el-input v-model="splitor" placeholder="分隔符" style="width: 150px;">
            <template #append>
                <el-select v-model="splitor" placeholder="请选择">
                    <el-option v-for="item in splitList" :key="item.value" :label="item.text"
                        :value="item.value"></el-option>
                </el-select>
            </template></el-input>
        <el-button type="primary" @click="doSplit" style="margin-left: 8px;">拆分</el-button>
    </el-container>
    <div>
        <div v-for="(item, idx) in splitResult" :key="'tag_' + idx">
            <el-tag>{{ padding5(idx + 1, 2) }}</el-tag>
            <el-tag type="info">{{ item }}</el-tag>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const splitor = ref('|')
const splitList = [{ text: '竖杠', value: '|' }, { text: '逗号', value: ',' }, { text: '换行', value: '\n' }]

const splitResult = ref<string[]>([])

//填充截取法
function padding5(num: number, length: number) {
    var len = (num + "").length;
    var diff = length - len;
    if (diff > 0) {
        return Array(diff).join("0") + num;
    }
    return num;
}

function doSplit() {
    splitResult.value = value.value.split(splitor.value)
}

</script>