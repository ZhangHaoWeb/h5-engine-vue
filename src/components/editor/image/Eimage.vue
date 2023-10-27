<script setup>
const props = defineProps({
    defaultProps: Object
})
</script>

<template>
    <img class="e-image" :src="defaultProps.src" />
</template>

<style lang="scss">
.e-image {
    width: 100%;
    height: 100%;
}
</style>