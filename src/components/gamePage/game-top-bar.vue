<template>
  <div class="top-bar">
    <div class="menu"></div>
    <div class="game-tip">提示</div>
    <div class="count-down"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'gameTopBar'
});
</script>

<style lang="scss" scoped>
@import '~@styles/components/gamePage/game-top-bar.scss';
</style>
