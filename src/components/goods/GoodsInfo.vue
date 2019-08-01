<template>
    <div class="goodsinfo-container">
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <swiper :lunbotuList="lunbotu"></swiper>
				</div>
			</div>
		</div>
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
				</div>
			</div>
		</div>
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
				</div>
			</div>
            <div class="mui-card-footer">页脚</div>
		</div>
    </div>
</template>
<script>
import swiper from '../subcomponents/swiper'
export default {
    data() {
        return {
            id: this.$route.params.id,//指（http://localhost:8080/#/home/goodsinfo/87）中的87
            lunbotu: []
        }
    },
    created() {
        this.getLunbotu()
    },
    methods: {
        getLunbotu() {
            this.$http.get("api/getthumimages/" + this.id).then(result=> {
                result.body.message.forEach(item => {
                    item.img = item.src;
                });
                this.lunbotu = result.body.message
            })
        }
    },
    components: {
        "swiper": swiper
    }
}
</script>

<style lang="scss" scoped>
.goodsinfo-container {
    background-color: #eee;
    // padding: 5px 0;
    overflow: hidden;
}
</style>

