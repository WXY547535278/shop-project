<template>
 <div class="container">
  <mt-swipe :auto="4000">
     <mt-swipe-item><img src="../../images/l1.jpg"></mt-swipe-item>
     <mt-swipe-item><img src="../../images/l2.jpg"></mt-swipe-item>
     <mt-swipe-item><img src="../../images/l3.jpg"></mt-swipe-item>
     <mt-swipe-item><img src="../../images/l5.jpg"></mt-swipe-item>
  </mt-swipe>
	<ul class="mui-table-view mui-grid-view mui-grid-9">
	  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/newslist"><img src="../../images/menu1(1).png" alt=""><div class="mui-media-body">新闻资讯</div></router-link>
          </li>
	  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/photolist"><img src="../../images/menu2.png" alt=""><div class="mui-media-body">图片分享</div></router-link>
          </li>
	  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/goodslist"><img src="../../images/menu3.png" alt=""><div class="mui-media-body">商品购买</div></router-link>
          </li>
	  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#"><img src="../../images/menu4.png" alt=""><div class="mui-media-body">留言反馈</div></a>
          </li>
	  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#"><img src="../../images/menu5.png" alt=""><div class="mui-media-body">视频专区</div></a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#"><img src="../../images/menu6.png" alt=""> <div class="mui-media-body">联系我们</div></a>
          </li>
  </ul> 
  <!-- 产品区块 -->
  <div class="product">
        <section class="proBox">
            <div class="pro_tit nb">
                <div class="f_left">
                    <span class="sk_text">掌上秒杀</span>
                    <div class="sk_time">
                        <span>0</span>
                        <span>0</span>
                        <span>:</span>
                        <span>0</span>
                        <span>0</span>
                        <span>:</span>
                        <span>0</span>
                        <span>0</span>
                    </div>
                </div>
                <div class="f_right"><a href="#" class="m_r10">更多></a></div>
            </div>
            <div class="pro_con">
                <ul class="sk_product">
                    <li>
                        <a href="#"><img src="../../images/detail01.jpg" alt=""/></a>
                        <p class="now_price">¥10.00</p>
                        <p class="old_price">¥100.00</p>
                    </li>
                    <li>
                        <a href="#"><img src="../../images/detail02.jpg" alt=""/></a>
                        <p class="now_price">¥10.00</p>
                        <p class="old_price">¥100.00</p>
                    </li>
                    <li>
                        <a href="#"><img src="../../images/detail01.jpg" alt=""/></a>
                        <p class="now_price">¥10.00</p>
                        <p class="old_price">¥100.00</p>
                    </li>
                </ul>
            </div>
        </section>
        <section class="proBox">
            <div class="pro_tit"><h3>推荐商品</h3></div>
            <div class="pro_content">
                <a href="#" class="w_p50"><img src="../../images/cp1.jpg" alt=""/></a>
                <a href="#" class="w_p50"><img src="../../images/cp2.jpg" alt=""/></a>
                <a href="#" class="w_p50"><img src="../../images/cp3.jpg" alt=""/></a>
            </div>
        </section>
        <!-- <section class="jd_proBox">
            <div class="pro_tit"><h3>京东超市</h3></div>
            <div class="pro_con clearfix">
                <a href="#" class="w_p50 f_right b_left"><img src="images/cp4.jpg" alt=""/></a>
                <a href="#" class="w_p50 f_left b_bottom"><img src="images/cp5.jpg" alt=""/></a>
                <a href="#" class="w_p50 f_left"><img src="images/cp6.jpg" alt=""/></a>
            </div>
        </section> -->
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import swiper from '../subcomponents/swiper'
export default {
    data() {
        return {
            lunbotuList: []
        };
    },
    created() {
        this.getLunbotu();
    },
    methods: {
    },
    components:{
      "swiper": swiper
    }
}
</script>
<style lang="scss" scoped>
.mint-swipe {
    text-align: center;
    height: 200px;
    img {
        // width: 100%;
        height: 100%;
    }
}
.jd_container{
    width: 100%;
    max-width: 640px;
    min-width: 320px;
    margin: 0 auto;
}
.mui-grid-view.mui-grid-9 {
     background-color: #fff;
     border: none;
     img {
     width: 60px;
     height: 60px;
     }
    .mui-media-body{
    font-size: 13px;
    }
}
.product{
  ul,a {
    list-style: none;
  }
  .proBox{
    margin-top: 10px;
    box-shadow: 0 0 1px #d8d8d8;
    min-height: 200px;
    background: #fff;
    h3 {
      font-size: 14px;
      font-family:"Microsoft Yahei";
      font-weight: 500;
      line-height: 23px;
      margin-left: 8px;
    }
    .pro_content{
      .w_p50{
        display: block;
        width: 50%;
        img {
          display: block;
          width: 100%;
        }
      }
      .w_p50:nth-child(1){
        float: right;
        border-left: 1px solid #ddd;
      }
      .w_p50:nth-child(2){
        float: left;
        border-bottom: 1px solid #ddd;
      }
      .w_p50:nth-child(3){
        float: left;
      }
    }
    .pro_tit{
      height: 34px;
      line-height: 34px;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      .f_left{
        display: flex;
        justify-content: flex-start;
        .sk_text {
          color: #d8505c;
          margin-left: 10px;
        }
        .sk_time{
          margin-left: 10px;
          span{
            width: 16px;
            height: 16px;
            text-align: center;
            line-height: 16px;
            color: #fff;
            background: #333;
            margin-left: 3px;
            float: left;
            margin-top: 7px;
          }
          span:nth-child(3n){
            background: #fff;
            color: #333;
            width: 3px;
          }
        }
      }
      .f_right {
        color: #333;
        font-size: 14px;
      }
    }
    .pro_con{
      .sk_product{
        width: 100%;
        padding: 10px 0;
        li:last-child {
          a{
            border-right: none;
          }
        }
        li {
          width: 33.3333%;
          float: left;
          a {
            width: 100%;
            display: block;
            border-right: 1px solid #ddd;
            img {
              width: 64%;
              margin: 0 auto;
              display: block;
            }
          }
          p {
            font-size: 12px;
            text-align: center;
            padding: 5px 0;
          }
          .now_price {
            color: #d8505c;
            margin-bottom: 0;
            padding: 0;
          }
          .old_price {
            color: #666;
            text-decoration: line-through;
            margin-bottom: 0;
            padding: 0;
          }
        }
      }
      .w_p50{
         width: 50%;
      }
      .w_p50 img{
         display: block;
         width: 100%;
      }
      .b_left {
         border-left: 1px solid #ddd;
      }
      .b_right{
         border-right: 1px solid #ddd;
      }
      .b_bottom{
         border-bottom: 1px solid #ddd;
      }
    }
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>