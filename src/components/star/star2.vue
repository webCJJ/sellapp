<template>
   <div class="star" :class="starType">
     <span v-for="item in items" :class="item" class="star-item"> </span>
   </div>
</template>

<script type='text/ecmascript-6'>
   const LENGTH = 5;
   const CLS_ON = 'on';
   const CLS_HALF = 'half';
   const CLS_OFF = 'off';

   export default {
     props: {
       size: {
         type: number
       },
       score: {
         type: number
       }
     },
     computed: {
      starType() {
       return 'star-' + this.size;
   },
     items() {
       let result = [];
       let score = Math.floor(this.score * 2) / 2;
       let hasDecimal = score % 1 !== 0 ;
       let integer = Math.floor( score );
       for(let i = 0; i < integer.length; i++){
          result.push( CLS_ON );
       }
       if(hasDecimal){
          result.push( CLS_HALF );
       }
       while( result.length < LENGTH ){
         result.push(CLS_OFF);
       }
       return result;
     }
     }
   }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .star
    font-size: 0
    .star-item
      display: inline-block
      background-repeat: no-repeat
  &.star-24
    .star-item
      width: 10px
      height: 10
      background-size: 10px 10px
      &.last-child
        margin-right: 0
      &.on
        bg-image('star24_on')

</style>
