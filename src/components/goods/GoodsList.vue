<template>
   <div class="goods-list">
     <router-link class="goods-item" v-for="item in goodslist" :key="item.id"
     :to="'/home/goodsinfo/'+item.id" tag="div">
       <img :src="item.img_url" alt="">
       <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
       <div class="info">
         <p class="price">
           <span class="now">￥{{ item.sell_price }}</span>
           <span class="old">￥{{ item.market_price }}</span>
         </p>
         <p class="sell">
           <span>热卖中</span>
           <span>剩{{ item.stock_quantity }}件</span>
         </p>
       </div>
     </router-link>

     <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
   </div>
</template>

<script>
export default {
  data() {
    return {
      pageIndex: 1,
      goodslist: []
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    getGoodsList() {
      this.$http.get("api/getgoods?pageindex="+this.pageIndex).then(result=>{
        if(result.body.status === 0) {
          this.goodslist = this.goodslist.concat(result.body.message);
        }
      })
    },
    getMore() {
      this.pageIndex++
      this.getGoodsList();
    }
  },
}
</script>

<style lang="scss" scoped>
.goods-list {
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .goods-item {
    min-height: 293px;
    margin: 4px 0;
    width: 49%;
    border: 1px solid #eee;
    box-shadow: 0 0 8px #eee;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      width: 100%;
    }
    .title {
      font-size: 16px;
    }
    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        display: flex;
        justify-content: flex-start;
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          font-size: 12px;
          text-decoration: line-through;
        }
      span {
        margin: 0 7px;
      } 
    }
    .sell {
      span {
        margin: 0 7px;
      }
      display: flex;
      justify-content: space-between;
    }
     
    }   
  }
}
</style>
