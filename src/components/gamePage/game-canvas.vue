<template>
  <div class="canvas-box">
    <canvas id="canvas" @touchstart="touchDown($event)" @touchend="touchUp($event)" @touchmove="touchmove($event)"></canvas>
    <game-control-bar></game-control-bar>
  </div>
</template>

<script>
import gameControlBar from './game-control-bar.vue'
import {defineComponent} from 'vue'
export default defineComponent({
    name:'canvas',
    components: {
        gameControlBar
    },
  data(){
      return{
        currentRoomData:{
          currentAuthorId: 0
        },
        userInfo: {
          userId: 1
        }
      }
  },
  setup(ctx, props){
    /**
     * 开始画画
     * @param e
     */
    const touchDown = function(e){
      if(currentRoomData.currentAuthorId === userInfo.userId) return;
      console.log('touchDown', e)
    }
    const touchUp = function(e){
      console.log('touchUp', e)
    }
    const touchmove = function(e){
      console.log('touchmove', e)
    }
    return {
      touchDown,
      touchUp,
      touchmove
    }
  }
});
</script>

<style lang="scss" scoped>
@import '~@styles/components/gamePage/game-canvas.scss';
</style>
