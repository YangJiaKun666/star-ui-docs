<template>
    <page-slot title="calendar日历">
        <div class="card">
            <h2>使用方法</h2>
            <p>此组件为日历组件，默认时间为当前年月日，可切换年月日，默认为单选模式，可通过设置<code>multiple</code>属性变为多选模式</p>
            <pre><code><span class="hljs-comment">&lt;!-- 单选模式 --&gt;</span>
    &lt;<span class="hljs-name" >star-calendar</span> 
        @<span class="hljs-attr">change-year</span>="<span class="hljs-string">changeYear</span>" 
        @<span class="hljs-attr">change-mouth</span>="<span class="hljs-string">changeMouth</span>"
        @<span class="hljs-attr">change-date</span>="<span class="hljs-string">changeDate</span>" 
    /&gt;
    <span class="hljs-comment">&lt;!-- 多选模式 --&gt;</span>
    &lt;<span class="hljs-name" >star-calendar</span>
        <span class="hljs-attr">multiple</span> 
        @<span class="hljs-attr">change-year</span>="<span class="hljs-string">changeYear</span>" 
        @<span class="hljs-attr">change-mouth</span>="<span class="hljs-string">changeMouth</span>"
        @<span class="hljs-attr">change-date</span>="<span class="hljs-string">changeDate</span>" 
    /&gt;

    <span class="hljs-keyword">export default</span> {
        methods: {
            <span class="hljs-attr">changeYear</span>(year) {
                console.<span class="hljs-attr">log</span>(year)
            },
            <span class="hljs-attr">changeMouth</span>(mouth) {
                console.<span class="hljs-attr">log</span>(mouth)
            },
            <span class="hljs-attr">changeDate</span>(date) {
                console.<span class="hljs-attr">log</span>(date)
            },
        }
    }
    </code></pre>
        </div>
        <!-- props -->
        <props-table :propsData="propsData"></props-table>
        <!-- events -->
        <event-table :eventsData="eventsData"></event-table>
    </page-slot>
</template>
<script>
export default {
    data() {
        return {
            propsData: [
                {value: 'multiple',decs: '是否开启多选模式',type: 'boolean',default: 'false'},
                {value: 'rememberBefore',decs: '当模式为多选且在切换年月时，时候记住之前选中的日期',type: 'boolean',default: 'false'},
            ],
            eventsData: [
                {name: 'change-year',decs: '当切换年份时触发，返回当前选中的年份', value: 'value: Date'},
                {name: 'change-mouth',decs: '当切换月份时触发，返回当前选中的月份', value: 'value: Date'},
                {name: 'change-date',decs: '当切换日期时触发，返回当前选中的日期，单选模式时返回yyyy-MM-dd格式的字符串，多选模式时返回[yyyy-MM-dd]格式的数组', value: 'value: String || Array'},
            ]
        }
    }
}
</script>