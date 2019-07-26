<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo">
						<img class="mui-media-object mui-pull-left" src="../../images/menu1(1).png">
						<div class="mui-media-body">
							<h1>111</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ new Date()|dateFormat }}</span>
                                <span>点击1次</span>
                            </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo">
						<img class="mui-media-object mui-pull-left" src="../../images/menu1(1).png">
						<div class="mui-media-body">
							<h1>111</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ new Date()|dateFormat }}</span>
                                <span>点击1次</span>
                            </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo">
						<img class="mui-media-object mui-pull-left" src="../../images/menu1(1).png">
						<div class="mui-media-body">
							<h1>222</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ new Date()|dateFormat }}</span>
                                <span>点击2次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo">
						<img class="mui-media-object mui-pull-left" src="../../images/menu1(1).png">
						<div class="mui-media-body">
							<h1>333</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ new Date()|dateFormat }}</span>
                                <span>点击1次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo">
						<img class="mui-media-object mui-pull-left" src="../../images/menu1(1).png">
						<div class="mui-media-body">
							<h1>444</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ new Date()|dateFormat }}</span>
                                <span>点击1次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo">
						<img class="mui-media-object mui-pull-left" src="../../images/menu1(1).png">
						<div class="mui-media-body">
							<h1>555</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ new Date()|dateFormat }}</span>
                                <span>点击1次</span>
                            </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo">
						<img class="mui-media-object mui-pull-left" src="../../images/menu1(1).png">
						<div class="mui-media-body">
							<h1>666</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ new Date()|dateFormat }}</span>
                                <span>点击1次</span>
                            </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo">
						<img class="mui-media-object mui-pull-left" src="../../images/menu1(1).png">
						<div class="mui-media-body">
							<h1>777</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ new Date()|dateFormat }}</span>
                                <span>点击1次</span>
                            </p>
						</div>
					</router-link>
				</li>



			</ul>
    </div>
</template>

<style lang="scss">
.mui-table-view {
    li {
        h1 {
            font-size: 14px;
        }
        .mui-ellipsis {
            font-size: 12px;
            color: skyblue;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>

<script>
export default {
    
}
</script>