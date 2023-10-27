<script setup>
const props = defineProps({
    defaultProps: Object
})


</script>

<template>
    <div class="e-button" :style="{lineHeight: defaultProps.style.height}">{{defaultProps.defaultValue}}</div>
</template>

<style lang="scss">
.e-button {
    width: 100%;
    height: 100%;
    text-align: center;
}
</style>