import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index.vue'
import home from '../pages/home.vue'
// 安装与使用
import install from '../pages/install'
// 颜色主题
import theme from '../pages/theme'
// 组件首页
import comIndex from '../pages/com-index'
// transition过渡
import transitionText from '../pages/transition-demo/demo'
import transitionCom from '../pages/transition-demo/transition'
// 输入框
import inputText from '../pages/input-demo/demo'
import inputCom from '../pages/input-demo/input'
// 按钮
import buttonText from '../pages/button-demo/demo'
import buttonCom from '../pages/button-demo/button'
// 图片
import imageText from '../pages/image-demo/demo'
import imageCom from '../pages/image-demo/image'
// 图标
import iconText from '../pages/icon-demo/demo'
import iconCom from '../pages/icon-demo/icon'
// 复选框
import checkboxText from '../pages/checkbox-demo/demo'
import checkboxCom from '../pages/checkbox-demo/checkbox'
// 导航
import navbarText from '../pages/navbar-demo/demo'
import navbarCom from '../pages/navbar-demo/navbar'
// 分类栏
import tabText from '../pages/tab-demo/demo'
import tabCom from '../pages/tab-demo/tab'
// 消息通知
import noticeText from '../pages/notice-demo/demo'
import noticeCom from '../pages/notice-demo/notice'
// 弹出层
import popupText from '../pages/popup-demo/demo'
import popupCom from '../pages/popup-demo/popup'

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
                meta: { name: 'star-ui' },
                component: install
            },
            {
                path: '/home/theme',
                name: 'theme',
                meta: { name: 'star-ui' },
                component: theme
            },
            {
                path: '/home/transition',
                name: 'transition-demo',
                meta: { name: 'star-transition' },
                component: transitionText
            },
            {
                path: '/home/input',
                name: 'input-demo',
                meta: { name: 'star-input' },
                component: inputText
            },
            {
                path: '/home/button',
                name: 'button-demo',
                meta: { name: 'star-button' },
                component: buttonText
            },
            {
                path: '/home/image',
                name: 'image-demo',
                meta: { name: 'star-image' },
                component: imageText
            },
            {
                path: '/home/icon',
                name: 'icon-demo',
                meta: { name: 'star-icon' },
                component: iconText
            },
            {
                path: '/home/checkbox',
                name: 'checkbox-demo',
                meta: { name: 'star-checkbox' },
                component: checkboxText
            },
            {
                path: '/home/navbar',
                name: 'navbar-demo',
                meta: { name: 'star-navbar' },
                component: navbarText
            },
            {
                path: '/home/tabbar',
                name: 'tabbar-demo',
                meta: { name: 'star-tab' },
                component: tabText
            },
            {
                path: '/home/notice',
                name: 'notice-demo',
                meta: { name: 'star-notice' },
                component: noticeText
            },
            {
                path: '/home/popup',
                name: 'popup-demo',
                meta: { name: 'star-popup' },
                component: popupText
            },
        ],
    },
]

const router = new VueRouter({
    routes,
})

export default router
