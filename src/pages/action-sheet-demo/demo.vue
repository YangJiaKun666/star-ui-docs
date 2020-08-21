<template>
    <page-slot title="actionSheet操作面板">
        <div class="card">
            <h2>基本用法</h2>
            <p>
                绑定
                <code>v-model</code>的值来控制元素的显示和隐藏，
                设置
                <code>option</code>来绑定选项
            </p>
            <pre><code><span class="hljs-comment">&lt;!-- 打开控制面板，基础用法 --&gt;</span>
&lt;<span class="hljs-name">star-button</span> @<span class="hljs-attr">click</span>="<span class="hljs-string">showAction = true</span>"&gt;打开面板&lt;/<span class="hljs-name">star-button</span>&gt;
&lt;<span class="hljs-name">star-action-sheet</span> <span class="hljs-attr">v-model</span>="<span class="hljs-string">showAction</span>" :<span class="hljs-attr">options</span>="<span class="hljs-string">options</span>" @<span class="hljs-attr">change</span>="<span class="hljs-string">onChange</span>" /&gt;

<span class="hljs-keyword">export default</span> {
    data() {
        <span class="hljs-keyword">return</span> {
            <span class="hljs-attr">showAction</span>: <span class="hljs-string">false</span>,
            <span class="hljs-attr">options</span>: [
                { <span class="hljs-attr">label</span>: "<span class="hljs-string">选项1</span>",<span class="hljs-attr">value</span>: "<span class="hljs-string">1</span>", },
                { <span class="hljs-attr">label</span>: "<span class="hljs-string">选项2</span>",<span class="hljs-attr">value</span>: "<span class="hljs-string">2</span>", },
                { <span class="hljs-attr">label</span>: "<span class="hljs-string">选项3</span>",<span class="hljs-attr">value</span>: "<span class="hljs-string">3</span>", },
            ]
        }
    },
    methods: {
        <span class="hljs-attr">onChange</span>(object) {
            this.$notice.primary(
                `选中了第${val.index + 1}项，label为：${val.label}，value为：${val.value}`
            );
        }
    }
}
    </code></pre>
        </div>
        <div class="card">
            <h2>关闭模糊背景</h2>
            <p>
                设置
                <code>filter</code>属性来决定是否要需要开启模糊背景
            </p>
            <pre><code><span class="hljs-comment">&lt;!-- 关闭模糊背景 --&gt;</span>
&lt;<span class="hljs-name">star-button</span> @<span class="hljs-attr">click</span>="<span class="hljs-string">showAction = true</span>"&gt;打开面板&lt;/<span class="hljs-name">star-button</span>&gt;
&lt;<span class="hljs-name">star-action-sheet</span> 
    <span class="hljs-attr">v-model</span>="<span class="hljs-string">showAction</span>" 
    :<span class="hljs-attr">options</span>="<span class="hljs-string">options</span>" 
    @<span class="hljs-attr">change</span>="<span class="hljs-string">onChange</span>" 
    :<span class="hljs-attr">filter</span>="<span class="hljs-string">false</span>"
/&gt;

<span class="hljs-keyword">export default</span> {
    data() {
         <span class="hljs-keyword">return</span> {
            <span class="hljs-attr">showAction</span>: <span class="hljs-string">false</span>,
            <span class="hljs-attr">options</span>: [
                { <span class="hljs-attr">label</span>: "<span class="hljs-string">选项1</span>",<span class="hljs-attr">value</span>: "<span class="hljs-string">1</span>", },
                { <span class="hljs-attr">label</span>: "<span class="hljs-string">选项2</span>",<span class="hljs-attr">value</span>: "<span class="hljs-string">2</span>", },
                { <span class="hljs-attr">label</span>: "<span class="hljs-string">选项3</span>",<span class="hljs-attr">value</span>: "<span class="hljs-string">3</span>", },
            ]
        }
    },
}
    </code></pre>
        </div>
        <div class="card">
            <h2>元素宽度铺满窗口</h2>
            <p>
                设置
                <code>padding</code>属性来决定宽度是否铺满整个窗口，
            </p>
            <pre><code><span class="hljs-comment">&lt;!-- 元素宽度铺满窗口 --&gt;</span>
&lt;<span class="hljs-name">star-button</span> @<span class="hljs-attr">click</span>="<span class="hljs-string">showAction = true</span>"&gt;打开面板&lt;/<span class="hljs-name">star-button</span>&gt;
&lt;<span class="hljs-name">star-action-sheet</span> 
    <span class="hljs-attr">v-model</span>="<span class="hljs-string">showAction</span>" 
    :<span class="hljs-attr">options</span>="<span class="hljs-string">options</span>" 
    @<span class="hljs-attr">change</span>="<span class="hljs-string">onChange</span>" 
    :<span class="hljs-attr">padding</span>="<span class="hljs-string">false</span>"
/&gt;

<span class="hljs-keyword">export default</span> {
    data() {
        <span class="hljs-keyword">return</span> {
            <span class="hljs-attr">showAction</span>: <span class="hljs-string">false</span>,
            <span class="hljs-attr">options</span>: [
                { <span class="hljs-attr">label</span>: "<span class="hljs-string">选项1</span>",<span class="hljs-attr">value</span>: "<span class="hljs-string">1</span>", },
                { <span class="hljs-attr">label</span>: "<span class="hljs-string">选项2</span>",<span class="hljs-attr">value</span>: "<span class="hljs-string">2</span>", },
                { <span class="hljs-attr">label</span>: "<span class="hljs-string">选项3</span>",<span class="hljs-attr">value</span>: "<span class="hljs-string">3</span>", },
            ]
        }
    },
}
    </code></pre>
        </div>
        <div class="card">
            <h2>隐藏取消按钮</h2>
            <p>
                设置
                <code>showCloseButton</code>来决定时候展示取消按钮
            </p>
            <pre><code><span class="hljs-comment">&lt;!-- 隐藏取消按钮 --&gt;</span>
&lt;<span class="hljs-name">star-button</span> @<span class="hljs-attr">click</span>="<span class="hljs-string">showAction = true</span>"&gt;打开面板&lt;/<span class="hljs-name">star-button</span>&gt;
&lt;<span class="hljs-name">star-action-sheet</span> 
    <span class="hljs-attr">v-model</span>="<span class="hljs-string">showAction</span>" 
    :<span class="hljs-attr">options</span>="<span class="hljs-string">options</span>" 
    @<span class="hljs-attr">change</span>="<span class="hljs-string">onChange</span>" 
    :<span class="hljs-attr">showCloseButton</span>="<span class="hljs-string">false</span>"
/&gt;

<span class="hljs-keyword">export default</span> {
    data() {
        <span class="hljs-keyword">return</span> {
            <span class="hljs-attr">showAction</span>: <span class="hljs-string">false</span>,
            <span class="hljs-attr">options</span>: [
                { <span class="hljs-attr">label</span>: "<span class="hljs-string">选项1</span>",<span class="hljs-attr">value</span>: "<span class="hljs-string">1</span>", },
                { <span class="hljs-attr">label</span>: "<span class="hljs-string">选项2</span>",<span class="hljs-attr">value</span>: "<span class="hljs-string">2</span>", },
                { <span class="hljs-attr">label</span>: "<span class="hljs-string">选项3</span>",<span class="hljs-attr">value</span>: "<span class="hljs-string">3</span>", },
            ]
        }
    },
}
    </code></pre>
        </div>
        <!-- props -->
        <props-table :propsData="propsData"></props-table>
        <!-- evnets -->
        <event-table :eventsData="eventsData"></event-table>
    </page-slot>
</template>
<script>
export default {
    data() {
        return {
            propsData: [
                {
                    value: "options",
                    decs:
                        "绑定的选项数据，格式为{ label: 'xxx', value: 'xxx' }",
                    type: "array",
                    default: "——",
                },
                {
                    value: "filter",
                    decs: "是否开启模糊背景",
                    type: "boolean",
                    default: "true",
                },
                {
                    value: "padding",
                    decs: "是否内容区域与边界保持距离",
                    type: "boolean",
                    default: "true",
                },
                {
                    value: "showCloseButton",
                    decs: "是否显示取消按钮",
                    type: "boolean",
                    default: "true",
                },
            ],
            eventsData: [
                {
                    name: "change",
                    decs: "选中内容时触发，返回对象形式的参数",
                    value: 'object: {label: "xxx", value: "xxx", index: "xxx"}',
                },
                {
                    name: "close",
                    decs: "点击取消按钮时触发",
                    value: "——",
                },
                {
                    name: "click-mask",
                    decs: "点击遮罩层时触发",
                    value: "——",
                },
            ],
        };
    },
};
</script>