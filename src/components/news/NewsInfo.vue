<template>
    <div>
        <div class="newsinfo-container">
            <h3 class="title">1111111111</h3>
            <p class="subtitle">
                <span>发表时间：{{ new Date()|dateFormat}}</span>
                <span>点击1次</span>
            </p>

            <hr>

            <div class="content">
            </div>
        </div>
        <comment-box></comment-box>
    </div>
</template>

<script>
import comment from '../subcomponents/comment'
export default {
    data() {
        return {
            newsinfo: [
                {}
            ]
        }
    },
    created() {
        
    },
    methods: {
        
    },
    components: {
        "comment-box": comment
    }
}
</script>

<style lang="scss">
    .newsinfo-container {
        padding: 0 4px;
        .title {
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle {
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }

    }
</style>
