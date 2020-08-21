<template>
    <page-slot title="popup弹出层">
        <div class="card">
            <h2>基本用法</h2>
            <pre><code><span class="hljs-comment">&lt;!-- v-model绑定值来决定元素的显示和隐藏 --&gt;</span>
    &lt;<span class="hljs-name">star-button</span> @<span class="hljs-attr">click</span>="<span class="hljs-string">showPopup = true</span>"&gt;打开弹窗&lt;/<span class="hljs-name">star-button</span>&gt;
    &lt;<span class="hljs-name">star-popup</span> <span class="hljs-attr">v-model</span>="<span class="hljs-string">showPopup</span>" /&gt;
    <span class="hljs-keyword">export default</span> {
        data() {
            <span class="hljs-attr">showPopup</span>: <span class="hljs-string">false</span>
        }
    }

    <span class="hljs-comment">&lt;!-- 除此之外还通过一个模糊背景的属性，给弹出层添加filter属性即可 --&gt;</span>
    &lt;<span class="hljs-name">star-button</span> @<span class="hljs-attr">click</span>="<span class="hljs-string">showPopup = true</span>"&gt;开启模糊背景&lt;/<span class="hljs-name">star-button</span>&gt;
    &lt;<span class="hljs-name">star-popup</span> <span class="hljs-attr">v-model</span>="<span class="hljs-string">showPopup</span>" <span class="hljs-attr">filter</span> /&gt;

    <span class="hljs-keyword">export default</span> {
        data() {
            <span class="hljs-attr">showPopup</span>: <span class="hljs-string">fasle</span>
        }
    }
    </code></pre>
        </div>
        <div class="card">
            <h2>弹出位置</h2>
            <pre><code><span class="hljs-comment">&lt;!-- 通过定义position属性来设置弹出层出现的位置，可选值为：center、top、bottom、left、right，使用size来定义自定义内容的大小 --&gt;</span>
    &lt;<span class="hljs-name">star-button</span> @<span class="hljs-attr">click</span>="<span class="hljs-string">showPopupPosition('center')</span>"&gt;居中弹出&lt;/<span class="hljs-name">star-button</span>&gt;
    &lt;<span class="hljs-name">star-button</span> @<span class="hljs-attr">click</span>="<span class="hljs-string">showPopupPosition('top')</span>"&gt;顶部弹出&lt;/<span class="hljs-name">star-button</span>&gt;
    &lt;<span class="hljs-name">star-button</span> @<span class="hljs-attr">click</span>="<span class="hljs-string">showPopupPosition('bottom')</span>"&gt;底部弹出&lt;/<span class="hljs-name">star-button</span>&gt;
    &lt;<span class="hljs-name">star-button</span> @<span class="hljs-attr">click</span>="<span class="hljs-string">showPopupPosition('left')</span>"&gt;左侧弹出&lt;/<span class="hljs-name">star-button</span>&gt;
    &lt;<span class="hljs-name">star-button</span> @<span class="hljs-attr">click</span>="<span class="hljs-string">showPopupPosition('right')</span>"&gt;右侧弹出&lt;/<span class="hljs-name">star-button</span>&gt;
    &lt;<span class="hljs-name">star-popup</span>
        <span class="hljs-attr">v-model</span>="<span class="hljs-string">showPopup</span>" :<span class="hljs-attr">position</span>="<span class="hljs-string">position</span>" 
        :<span class="hljs-attr">size</span>="<span class="hljs-string">{ width: '100%', height: '60%' }</span>"
    &gt;
        ... <span class="hljs-comment">// 此处为自定义内容</span>
    &lt;/<span class="hljs-name">star-popup</span>&gt;

    <span class="hljs-keyword">export default</span> {
        data() {
            <span class="hljs-attr">showPopup</span>: <span class="hljs-string">false</span>
            <span class="hljs-attr">position</span>: "<span class="hljs-string"></span>"
        },
        methods: {
            <span class="hljs-keyword">showPopupPosition</span>(position){
                <span class="hljs-attr">this.position</span> = <span class="hljs-attr">position</span>
                <span class="hljs-attr">this.showPopup</span> = <span class="hljs-attr">true</span>
            }
        }
    }
    </code></pre>
        </div>
        <!-- props -->
        <props-table :propsData="propsData"></props-table>
        <!-- events -->
        <event-table :eventsData="eventsData"></event-table>
        <!-- slots -->
        <slot-table
            :slotsData="[{ name: 'default', decs: '自定的插槽' }]"
        ></slot-table>
    </page-slot>
</template>
<script>
export default {
    data() {
        return {
            propsData: [
                {
                    value: 'filter',
                    decs: '是否需要背景模糊',
                    type: 'boolean',
                    default: 'false',
                },
                {
                    value: 'position',
                    decs:
                        '弹出层内容弹出的位置，可选值为：center、top、bottom、left、right',
                    type: 'string',
                    default: 'center',
                },
                {
                    value: 'size',
                    decs:
                        '弹出层内容区域的大小，可定义宽高，以对象形式传入，宽高可传百分比也可传入固定像素',
                    type: 'object',
                    default: '{ width: "",height: "" }',
                },
                {
                    value: 'padding',
                    decs: '是否给元素添加内边距',
                    type: 'boolean',
                    default: 'fasle',
                },
            ],
            eventsData: [
                {
                    name: 'close',
                    decs: '关闭弹出层时触发',
                    value: '——',
                },
            ],
        }
    },
}
</script>
