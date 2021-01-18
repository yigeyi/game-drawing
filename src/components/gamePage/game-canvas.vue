<template>
  <div class="canvas-box">
    <canvas id="canvas" @touchstart="touchDown($event)" @touchend="touchUp(event)" @touchmove="touchmove(event)"></canvas>
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
  setup(ctx, props){
    const touchDown = function(e){
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
