<template>
  <div class="game-page">
    <top-bar />
  </div>
</template>

<script lang='ts'>
import topBar from '@components/gamePage/game-top-bar.vue'
import {defineComponent} from 'vue'
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
