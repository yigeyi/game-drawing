<template>
  <div class="canvas-box"  >
    <canvas id="canvas" ref="canvasRef"    @touchstart="touchDown($event)" @touchend="touchUp($event)" @touchmove="touchmove($event)"></canvas>
    <game-control-bar></game-control-bar>
  </div>
</template>

<script lang="ts">
import gameControlBar from './game-control-bar.vue'
import {defineComponent, propType, ref, onMounted,Ref} from 'vue'
import useHandleCanvas from "@hooks/gamePage/useHandleCanvas";
export default defineComponent({
    name:'drawingView',
    components: {
        gameControlBar
    },
  props: {},
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
    const canvasRef = ref<null | HTMLElement>(null)
    const handleCanvas = useHandleCanvas(canvasRef);
    const touchDown = handleCanvas.touchDown;
    const touchUp = handleCanvas.touchUp;
    const touchmove = handleCanvas.touchmove;
    return {
      touchDown,
      touchUp,
      touchmove,
      canvasRef
    }
  }
});
</script>

<style lang="scss" scoped>
@import '~@styles/components/gamePage/game-canvas.scss';
</style>
