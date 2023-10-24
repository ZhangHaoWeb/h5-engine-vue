<script setup>
import Head from '../components/common/Head.vue';
import SideBar from '../components/common/SideBar.vue';
</script>

<template>
    <Head></Head>
    <div className="main-wrapper">
        <SideBar></SideBar>
    </div>
</template>

<style lang="scss">
.main-wrapper {
    display: flex;
    justify-content: flex-start;
    flex-grow: 1;
    height: 100%;
    overflow: hidden;
}
</style>