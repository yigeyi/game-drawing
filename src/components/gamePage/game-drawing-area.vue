<template>
  <div class="game-area">
<!--    <div class="canvas-area">-->
      <game-drawing-view></game-drawing-view>
<!--    </div>-->
<!--    <div class="control-area">-->
      <game-control></game-control>
<!--    </div>-->
  </div>
</template>

<script>
import gameDrawingView from './game-drawing-view';
import gameControl from './game-control';
export default {
  components: {
    gameDrawingView,
    gameControl
  }
};
</script>

<style lang="scss" scoped>
@import '~@styles/components/gamePage/game-drawing-area.scss';
</style>
