<template>
    <div class="index">
        <div class="index__text">WLECOME</div>
        <star-button type="primary" icon="star" @click="$router.replace('/home')">查看组件实例</star-button>
    </div>
</template>
<style lang="less" scoped>
.index {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    &__text {
        font-size: 70px;
        font-weight: bold;
        letter-spacing: 8px;
        color: #333;
        font-style: italic;
        margin-bottom: 50px;
    }
}
</style>