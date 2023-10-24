<script setup>
import { COMPONENT_LIST } from "@/constants/components"

</script>

<template>
    <div className="sidebar">
        <div className="sidebar-category">
            <div v-for="(category, index) in COMPONENT_LIST" key={index} className="sidebar-category-box">
                <div className="sidebar-category-title">{{ category.category }}</div>
                <ul className="components-list">
                    <li v-for="(component, i) in category.list" className="component-item" draggable key={i}>
                        {{ component.label }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.sidebar {
    width: 220px;
    padding: 10px;
    border-right: 1px solid #262626;
    -webkit-user-select: none;
    user-select: none;
    box-sizing: border-box;

    .sidebar-category-box {
        margin-bottom: 20px;
    }

    .sidebar-category-title {
        font-weight: bold;
        padding: 5px;
    }

    .components-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .component-item {
        text-align: center;
        padding: 8px 10px;
        border-radius: 3px;
        width: 60px;
        margin: 5px;
        cursor: grab;
        background: #313030;

        &:active {
            cursor: grabbing;
        }
    }
}
</style>