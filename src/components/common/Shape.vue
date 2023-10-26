<script setup>
import { ref, reactive } from "vue"
import { useStore } from "vuex"
const props = defineProps({
    defaultProps: Object,
    idx: Number
})
const store = useStore()
const pointList = ['n', 'e', 's', 'w', 'nw', 'ne', 'sw', 'se']
const editStore = reactive(store.state.editor)

function getShapeResizePointStyle(point) {
    const width = parseInt(props.defaultProps.style.width, 10)
    const height = parseInt(props.defaultProps.style.height, 10)
    const hasN = /n/.test(point)
    const hasS = /s/.test(point)
    const hasW = /w/.test(point)
    const hasE = /e/.test(point)
    let newLeft = 0
    let newTop = 0

    if (point.length === 2) {
        newLeft = hasW ? 0 : width
        newTop = hasN ? 0 : height
    } else {
        // 上下两点的点，宽度居中
        if (hasN || hasS) {
            newLeft = width / 2
            newTop = hasN ? 0 : height
        }

        // 左右两边的点，高度居中
        if (hasW || hasE) {
            newLeft = hasW ? 0 : width
            newTop = Math.floor(height / 2)
        }
    }

    const style = {
        marginLeft: hasE ? '-5px' : '-4px',
        marginTop: '-5px',
        left: `${newLeft}px`,
        top: `${newTop}px`,
        cursor: `${point}-resize`,
    }
    return style
}

function changeShapeSelected() {
    store.commit("editor/changeCurrentComponent", props.idx)
}

function handlerMouseDown(e) {
    e.stopPropagation()
    e.preventDefault()
    changeShapeSelected()
    const startY = e.clientY
    const startX = e.clientX
    const componentDOM = e.target.parentNode
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = componentDOM

    const move = (moveEvent) => {
        const moveX = moveEvent.clientX - startX
        const moveY = moveEvent.clientY - startY
        const left = offsetLeft + moveX
        const top = offsetTop + moveY

        // boundaryEditor(idx, clientWidth, clientHeight, left, top) 画布边界计算
        store.commit("editor/editComponentStyle", {
            idx: props.idx,
            style: {
                left: left + 'px',
                top: top + 'px'
            }
        })
    }

    const up = () => {
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
}

function handlerResizeDown(e) {
    e.stopPropagation()
    e.preventDefault()
    const startY = e.clientY
    const startX = e.clientX
    const componentDOM = e.target.parentNode
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = componentDOM


    const move = (moveEvent) => {
        const moveX = moveEvent.clientX - startX
        const moveY = moveEvent.clientY - startY
        const left = offsetLeft + moveX
        const top = offsetTop + moveY

        store.commit("editor/editComponentStyle", {
            idx: props.idx,
            style: {
                left: left + 'px',
                top: top + 'px'
            }
        })
    }

    const up = () => {
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)

}
</script>

<template>
    <div class="shape-container" :style="defaultProps.style" @mousedown="handlerMouseDown">
        <slot></slot>
        <div class="shape-editor" v-if="editStore.currentComponent == idx">
            <div v-for="(item, i) in pointList" :key="i" class="shape-resize-point" :style="getShapeResizePointStyle(item)"
                @mousedown="handlerResizeDown">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.shape-container {
    position: absolute;
    cursor: move;
    box-sizing: border-box;

    .shape-editor {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        box-sizing: border-box;
        border: 1px solid #42b883;
    }

    .shape-resize-point {
        position: absolute;
        width: 6px;
        height: 6px;
        border: 1px solid #42b883;
        border-radius: 6px;
        background-color: #fff;
    }
}
</style>