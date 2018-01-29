<template>
  <transition name="move">
    <div v-show="showFlag" class="food" ref="food">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image"/>
          <div class="back">
            <i class="icon-arrow_lift"  @click="close"></i>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now-price">￥{{food.price}}</span>
            <span class="old-price" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <cartcontrol @add="addFoods" :food="food"></cartcontrol>
          </div>
          <div @click="addFirst(food,$event)" class="add" v-show=" !food.count || food.count === 0">
            加入购物车
          </div>
        </div>
        <split v-show="food.info"></split>
        <div class="info" v-show="food.info">
          <h1 class="title">商品信息</h1>
          <p class="text">{{food.info}}</p>
        </div>
        <split v-show="food.info"></split>
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <ratingselect :select-type="selectType" :only-content="onlyContent" :desc="desc" :ratings="food.ratings"></ratingselect>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type='text/ecmascript-6'>
  import BScroll from 'better-scroll';
  import Vue from 'vue';
  import cartcontrol from '../../components/cartcontrol/cartcontrol.vue';
  import split from '../../components/split/split.vue';
  import ratingselect from '../../components/ratingselect/ratingselect.vue';

//  const POSITIVE = 0;
//  const NEGATIVE = 1;
  const ALL = 2;

  export default{
    props: {
      food: {
        type: Object
      }
    },
    data() {
     return {
       showFlag: false,
       selectType: ALL, // show 的时候需要初始化
       onlyContent: true,
       desc: {
         all: '全部',
         positive: '推荐',
         negative: '吐槽'
       }
     };
    },
    methods: {
      show() {
        this.showFlag = true;
        this.selectType = ALL; //  初始化 === default
        this.onlyContent = true; // 初始化
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
    },
      close() {
        this.showFlag = false;
      },
      addFirst($event) {
        if (!event._constructed) {
          return;
        }
        this.$emit('add', event.target);
        Vue.set(this.food, 'count', 1);
      },
      addFoods(target) {
        this.$emit('add', target);
      }
    },
  components: {
    cartcontrol, split, ratingselect
  }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .food
    position: fixed
    top: 0
    left: 0
    bottom: 48px
    z-index: 30
    width: 100%
    background: #fff
    &.move-enter-active,&.move-leave-active
      transition: all 0.5s
      transform: translate3d(0, 0, 0)
    &.move-enter,&.move-leave-active
      transform: translate3d(100%, 0, 0)
    .image-header
      position: relative
      width: 100%
      height: 0
      padding-top: 100%    /*100%相对宽度来padding的 使得盒子为一个宽高相等的容器*/
      img
       position: absolute
       top: 0
       left: 0
       width: 100%
       height: 100%
      .back
        position: absolute
        top: 18px
        left: 0
        .icon-arrow_lift
          display: block
          padding: 10px
          font-size: 20px
          color: #fff
    .content
      position: relative
      padding: 18px
      .title
        margin-bottom: 8px
        font-size: 14px
        line-height: 14px
        font-weight: 700
        color: rgb(7, 17, 27)
      .detail
        margin-bottom: 18px
        font-size: 10px
        color: rgb(147, 153, 159)
        .sell-count
          margin-right: 14px
      .price
        font-weight: 700
        .now-price
          margin-right: 12px
          font-size: 14px
          color: rgb(240, 20, 20)
        .old-price
          font-size: 10px
          line-height: 24px
          text-decoration: line-through
          color: rgb(147, 153, 159)
    .add
      position: absolute
      right: 18px
      bottom: 18px
      width: 74px
      height: 24px
      padding: 6px 12px
      font-size: 10px
      line-height: 24px
      color: rgb(255, 255, 255)
      text-align: center
      border-radius: 12px
      background: rgb(0, 160, 220)
    .cartcontrol-wrapper
      position: absolute
      right: 18px
      bottom: 24px
      height: 24px
    .info
      padding: 18px 26px 18px 18px
      .title
        margin-bottom: 6px
        font-size: 14px
        line-height: 14px
        font-weight: 700
        color: rgb(7, 17, 27)
      .text
        padding-left: 8px
        font-size: 12px
        line-height: 24px
        ccolor: rgb(77, 85, 93)
    .rating
      padding: 18px 26px 18px 18px
      .title
        margin-bottom: 6px
        font-size: 14px
        line-height: 14px
        font-weight: 700
        color: rgb(7, 17, 27)

</style>
