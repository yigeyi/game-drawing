<link rel="stylesheet" href="../../../styles/views/Game/game.scss">
<template>
  <div class="game-page">
    <div class="top-bar">
      <top-bar />
    </div>
    <div class="drawing-area"></div>
    <div class="chat-area">1</div>
  </div>
</template>

<script lang="ts">
import topBar from '@components/gamePage/game-top-bar.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'gamePage',
  components: {
    topBar
  }
});
</script>

<style lang="scss" scoped>
@import '~@styles/views/Game/game.scss';
</style>
