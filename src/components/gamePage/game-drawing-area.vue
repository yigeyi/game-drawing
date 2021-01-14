<link rel="stylesheet" href="../../styles/components/gamePage/game-drawing-area.scss">
<template>
  <div class="game-area">
<!--    <div class="canvas-area">-->
      <game-canvas></game-canvas>
<!--    </div>-->
<!--    <div class="control-area">-->
      <game-control></game-control>
<!--    </div>-->
  </div>
</template>

<script>
import gameCanvas from './game-canvas';
import gameControl from './game-control';
export default {
  components: {
    gameCanvas,
    gameControl
  }
};
</script>

<style lang="scss" scoped>
@import '~@styles/components/gamePage/game-drawing-area.scss';
</style>
