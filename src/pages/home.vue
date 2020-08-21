<template>
    <div class="home">
        <div class="query-header star-background star-flex">
            <div class="text">
                <star-icon name="star-half-o" size="26" :style="{ marginRight: '10px' }"></star-icon>
                <span>star-ui</span>
            </div>
            <star-icon class="hover" name="github" size="34" color="#fff"></star-icon>
        </div>
        <div class="layut">
            <div class="left-menu scoll-bar">
                <h2>相关</h2>
                <div></div>
                <div
                    class="menu-item"
                    :class="$route.path == item.path && 'menu-active'"
                    v-for="item in defaultMenus"
                    :key="item.name"
                    @click="goPage(item.path)"
                >{{ item.name }}</div>
                <h2>组件</h2>
                <div
                    class="menu-item"
                    :class="$route.path == item.path && 'menu-active'"
                    v-for="item in componentsMenus"
                    :key="item.name"
                    @click="goPage(item.path)"
                >{{ item.name }}</div>
            </div>
            <div class="right-content scoll-bar">
                <star-transition name="star-transform-y">
                    <router-view></router-view>
                </star-transition>
            </div>
            <div class="phone-box">
                <iframe
                    @load="routeChange"
                    :src="path"
                    scrolling="no"
                    class="phone"
                    frameborder="0"
                ></iframe>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            path: "http://localhost:8081/#/home/install",
            defaultMenus: [
                { name: "安装与使用", path: "/home/install" },
                { name: "颜色主题", path: "/home/theme" },
            ],
            componentsMenus: [
                { name: "transition内置过渡", path: "/home/transition" },
                { name: "image图片", path: "/home/image" },
                { name: "input输入框", path: "/home/input" },
                { name: "checkbox复选框", path: "/home/checkbox" },
                { name: "button按钮", path: "/home/button" },
                { name: "iocn图标", path: "/home/icon" },
                { name: "navbar导航", path: "/home/navbar" },
                { name: "tabbar分类栏", path: "/home/tabbar" },
                { name: "notice消息通知", path: "/home/notice" },
                { name: "popup弹出层", path: "/home/popup" },
            ],
        };
    },
    watch: {
        $route: {
            handler(to, form) {
                let path = null;
                if (to.meta.name == "star-ui") {
                    path = "/home/install";
                } else {
                    path = to.path;
                }
                this.path = `http://localhost:8081/#${path}`;
            },
            deep: true,
            immediate: true,
        },
    },
    methods: {
        routeChange() {
            console.log("routeChange");
        },
        goPage(path) {
            if (this.$route.path == path || !path) return;
            this.$router.replace(path);
        },
    },
};
</script>
<style lang="less" scoped>
.home {
    height: 100%;
    box-sizing: border-box;
    padding-top: 80px;
    .query-header {
        height: 80px;
        width: 100%;
        padding: 15px 60px;
        box-sizing: border-box;
        justify-content: space-between;
        position: fixed;
        top: 0;
        z-index: 10;
        left: 0;
    }
    .layut {
        display: flex;
        height: 100%;
        .left-menu {
            width: 15%;
            height: 100%;
            overflow: auto;
            padding: 15px;
            box-sizing: border-box;
            background: #fff;
            border-right: 1px solid #eaeaea;
            .menu-item {
                cursor: pointer;
                line-height: 45px;
                font-size: 16px;
                font-weight: bold;
                position: relative;
                transition: all 0.2s ease;
                margin-bottom: 6px;
            }
            .menu-item:hover {
                color: #1cd8d2;
                background: rgba(0, 0, 0, 0.05);
                border-radius: 5px;
            }
            .menu-item:active {
                transform: scale(0.95);
            }
            .menu-active {
                position: relative;
                color: #1cd8d2 !important;
            }
            .menu-active::before {
                content: " ";
                position: absolute;
                background: #1cd8d2;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                height: 50%;
                width: 3px;
            }
        }
        .right-content {
            width: calc(80% - 400px);
            height: 100%;
            padding: 15px;
            box-sizing: border-box;
            overflow: auto;
        }
        .phone-box {
            width: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            .phone {
                background: #f2f2f2;
                width: 350px;
                height: 700px;
                box-shadow: 1px 2px 5px 2px rgba(0, 0, 0, 0.2);
                box-sizing: border-box;
                border-radius: 20px;
                overflow: hidden;
            }
        }
    }
}
.text {
    margin-right: 30px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    font-style: italic;
    display: flex;
}
.hover:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.2s ease;
}
.scoll-bar::-webkit-scrollbar {
    width: 0px;
}
</style>
