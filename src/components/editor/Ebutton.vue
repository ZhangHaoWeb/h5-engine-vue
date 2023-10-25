<script setup>
const props = defineProps({
    defaultProps: Object
})


</script>

<template>
    <div class="e-button" :style="defaultProps.style">{{defaultProps.defaultValue}}</div>
</template>

<style lang="scss">
.e-button {
    text-align: center;
}
</style>