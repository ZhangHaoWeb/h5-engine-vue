<script setup>
import { reactive } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const editorSize = reactive(store.state.editor.editSize)

function changeEditorSize() {
    store.commit("editor/changeEditSize", editorSize)
}
</script>

<template>
    <div class="header">
        <div class="header-l">
            <h1 class="header-title">H5-Engine</h1>
        </div>
        <div class="header-r">
            <div class="size-controller mr-8">
                <div class="ml-8">画布宽</div>
                <div><input type="number" @input="changeEditorSize" v-model="editorSize.width" /></div>
                <div class="ml-8">画布高</div>
                <div><input type="number" @input="changeEditorSize" v-model="editorSize.height" /></div>
            </div>
            <button class="btn ml-8">预览</button>
            <button class="btn ml-8">保存</button>
        </div>
    </div>
</template>

<style lang="scss">
.header {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #262626;

    .header-title {
        font-size: 28px;
        font-weight: bold;
        font-family: fantasy, monospace;
        background-image: linear-gradient(to right, #f06, #9f6);
        padding: 5px 10px;
        border-radius: 4px;
        user-select: none;
        cursor: pointer;
    }

    .header-r {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .size-controller {
            display: flex;
            align-items: center;

            input {
                width: 60px;
            }
        }
    }
}
</style>