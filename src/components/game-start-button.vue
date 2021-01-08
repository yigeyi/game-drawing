<template>
  <div @click="startGame" class="start-button">开始游戏</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'gameStartBtn',
  setup(props: any, ctx) {
    const state = ref(0);
    const startGame = () => {
      ctx.emit('start', 11);
    };
    return {
      state,
      startGame
    };
  }
});
</script>

<style lang="scss" scoped>
@import '~@styles/components/start-game-button/start-game-button.scss';
</style>
