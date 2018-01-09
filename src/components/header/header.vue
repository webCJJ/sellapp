<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img  width="64" height="64" :src="seller.avatar" alt=""/>
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <!-- v-if 防止created未调用到数据 seller.supports[0] 为undefined-->
        <div v-if="seller.supports" class="support">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default{
    props: {
      seller: {
        type: Object
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";
  .header
    color: #fff
    background: #000
    .content-wrapper
      display: flex
      padding: 24px 12px 18px 24px
      font-size: 14px
      .content
        margin-left: 16px
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block
            width: 30px
            height: 18px
            bg-image('brand')
            background-size: 30px 18px

</style>
