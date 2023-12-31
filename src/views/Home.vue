<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import Head from '../components/common/Head.vue';
import SideBar from '../components/common/SideBar.vue';
import Grid from '../components/common/Grid.vue';
import Property from '../components/common/Property.vue';
import Shape from '../components/common/Shape.vue';
import { COMPONENT_LIST } from "@/constants/components";

const store = useStore()
const editStore = reactive(store.state.editor)
const editorRef = ref()

function handlerDrop(e) {
    const dropComponent = e.dataTransfer.getData('component').split("-")
    const category = dropComponent[0]
    const idx = dropComponent[1]
    const categoryList = COMPONENT_LIST.find(item => item.id == category)
    if (!category || !idx || !categoryList) {
        return
    }

    let left = e.clientX - editorRef.value.offsetLeft - 220
    let top = e.clientY - editorRef.value.offsetTop - 64
    const style = {
        ...categoryList.list[idx].style,
        left: left + 'px',
        top: top + 'px'
    }

    const component = {
        ...categoryList.list[idx],
        style
    }

    store.commit("editor/editAddComponent", component)
}
</script>

<template>
    <Head></Head>
    <div class="main-wrapper">
        <SideBar></SideBar>
        <div class="content" @drop="handlerDrop" @dragover="$event.preventDefault()">
            <div class="editor" ref="editorRef"
                :style="{ width: editStore.editSize.width + 1 + 'px', height: editStore.editSize.height + 1 + 'px' }">
                <Grid></Grid>
                <Shape :defaultProps="component" v-for="(component, i) in editStore.editComponentList" :idx="i"
                    :id="'E_Component_' + i">
                    <component class="component-cell" :is="component.type" :defaultProps="component" />
                </Shape>
            </div>
        </div>
        <Property>
            <component v-if="editStore.currentComponent > -1"
                :is="editStore.editComponentList[editStore.currentComponent].type +'-attr'"></component>
        </Property>
    </div>
</template>

<style lang="scss">
.main-wrapper {
    display: flex;
    justify-content: flex-start;
    flex-grow: 1;
    height: 100%;
    overflow: hidden;

    .content {
        border-right: 1px solid #262626;
        flex-grow: 1;
        padding: 10px;
        height: 100%;
        box-sizing: border-box;
        overflow: auto;
        position: relative;

        .editor {
            position: relative;
            margin: 0 auto;
            border-radius: 2px;
            user-select: none;
            box-sizing: border-box;

            .editor-component {
                width: 100%;
                height: 100%;
                user-select: none;
                box-sizing: border-box;
            }
        }
    }
}
</style>