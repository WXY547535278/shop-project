<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请发表您的评论" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
          <div class="cmt-item" v-for="item in comment" :key="item.id">
            <div class="cmt-title">
            第{{ item.id }}楼&nbsp;&nbsp;用户：{{ item.user}}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
            </div>
            <div class="cmt-body">
          {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}
            </div>
          </div>
        </div>
       <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
       
</template>

<script>
import { Toast } from "mint-ui";
export default {
    data() {        
      return {
        pageIndex: 1,
        msg: '',
        comment:[],
        comments: [
          { id: 1, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:1 },
          { id: 2, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:1 },
          { id: 3, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:1 },
          { id: 4, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:1 },
          { id: 5, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:1 },
          { id: 6, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:1 },
          { id: 7, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:1 },
          { id: 8, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:1 },
          { id: 9, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:1 },
          { id: 10, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:1 },
          { id: 11, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:2 },
          { id: 12, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:2 },
          { id: 13, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:2 },
          { id: 14, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:2 },
          { id: 15, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:2 },
          { id: 16, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:2 },
          { id: 17, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:2 },
          { id: 18, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:2 },
          { id: 19, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:2 },
          { id: 20, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:2 },
          { id: 21, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:3 },
          { id: 22, add_time: new Date(), user: 'jack' ,content:'你好！',pageIndex:3 },

        ],
      }
    },
    created() {
      this.getComments();
    },
    methods: {
      getComments() {
        this.comments.forEach(element => {
          if(element.pageIndex==this.pageIndex){
            this.comment = this.comment.concat(element)
          }
        });
      },
      getMore() {
        this.pageIndex++;
        this.getComments();
      },
      postComment() {
        if (this.msg.trim().length === 0) {
          return Toast("评论内容不能为空！");
        }
        var cmt = {
          id: 23,
          add_time: new Date(),
          user: 'mike',
          pageIndex: 4,
          content: this.msg
        }
        this.comments.push(cmt);
        this.msg = ""
        Toast("发表成功");
      }
    },
}
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
