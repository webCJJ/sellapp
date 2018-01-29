<template>
  <!-- 商品详情 评价组件-->
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span class="block positive" :class="{'active': selectType === 2}">{{desc.all}} <span class="count">47</span></span>
      <span class="block positive" :class="{'active': selectType === 0}">{{desc.positive}} <span class="count">26</span></span>
      <span class="block negative" :class="{'active': selectType === 1}">{{desc.negative}} <span class="count">6</span></span>
    </div>
    <div class="switch">
      <span class="icon-check_circle"></span>
      <span class="test">只看有内容的评价</span>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
//  const POSITIVE = 0;
//  const NEGATIVE = 1;
  const ALL = 2;

  export default{
    props: {
      ratings: {
        type: Array, // 评论的数据类型
        default() {
         return [];
        }
      },
      selectType: {  // 选择的查看的类型 tab
        type: Number,
        default: ALL
      },
      onlyContent: {  // 评论内容是否可见
        type: Boolean,
        default: false
      },
      desc: {
       type: Object,
       default() {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          };
        }
      }
  }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl';

  .ratingselect
    .rating-type
      padding: 8px 0px
      border-1px(rgba(7, 17, 27, 0.1))
      font-size: 0
      .block
        display: inline-block
        padding: 8px 12px
        margin-right: 8px
        font-size: 12px
        line-height: 16px
        border-radius: 1px
        color: rgb(77, 85, 93)
        &.active
          color: #fff
        .count
          margin-left: 2px
          font-size: 8px
        &.positive
          background: rgba(0, 160, 220, 0.2)
          &.active
            background: rgb(0, 160, 220)
        &.negative
          background: rgba(77, 85, 93, 0.2)
          &.active
            background: rgb(77, 85, 93)
</style>
