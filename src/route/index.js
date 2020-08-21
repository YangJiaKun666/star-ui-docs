import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index.vue'
import home from '../pages/home.vue'
// 安装与使用
import install from '../pages/install'
// 颜色主题
import theme from '../pages/theme'
// transition过渡
import transitionText from '../pages/transition-demo/demo'
// 输入框
import inputText from '../pages/input-demo/demo'
// 按钮
import buttonText from '../pages/button-demo/demo'
// 图片
import imageText from '../pages/image-demo/demo'
// 图标
import iconText from '../pages/icon-demo/demo'
// 复选框
import checkboxText from '../pages/checkbox-demo/demo'
// 导航
import navbarText from '../pages/navbar-demo/demo'
// 分类栏
import tabText from '../pages/tab-demo/demo'
// 消息通知
import noticeText from '../pages/notice-demo/demo'
// 弹出层
import popupText from '../pages/popup-demo/demo'
// 操作面板
import actionSheetText from '../pages/action-sheet-demo/demo'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: index,
    },
    {
        path: '/home',
        name: 'home',
        redirect: '/home/install',
        component: home,
        children: [
            {
                path: '/home/install',
                name: 'install',
                component: install,
            },
            {
                path: '/home/theme',
                name: 'theme',
                component: theme,
            },
            {
                path: '/home/transition',
                name: 'transition-demo',
                component: transitionText,
            },
            {
                path: '/home/input',
                name: 'input-demo',
                component: inputText,
            },
            {
                path: '/home/button',
                name: 'button-demo',
                component: buttonText,
            },
            {
                path: '/home/image',
                name: 'image-demo',
                component: imageText,
            },
            {
                path: '/home/icon',
                name: 'icon-demo',
                component: iconText,
            },
            {
                path: '/home/checkbox',
                name: 'checkbox-demo',
                component: checkboxText,
            },
            {
                path: '/home/navbar',
                name: 'navbar-demo',
                component: navbarText,
            },
            {
                path: '/home/tabbar',
                name: 'tabbar-demo',
                component: tabText,
            },
            {
                path: '/home/notice',
                name: 'notice-demo',
                component: noticeText,
            },
            {
                path: '/home/popup',
                name: 'popup-demo',
                component: popupText,
            },
            {
                path: '/home/action-sheet',
                name: 'action-sheet-demo',
                component: actionSheetText,
            },
        ],
    },
]

const router = new VueRouter({
    routes,
})

export default router
