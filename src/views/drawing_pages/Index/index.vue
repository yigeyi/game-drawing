<template>
  <div class="index-page">
    <div @click="handleBeginGame">开</div>
    <game-start-button @start="startGame"></game-start-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive, isRef, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import gameStartButton from '@components/game-start-button.vue';
export default defineComponent({
  name: 'Index',
  components: {
    gameStartButton
  },
  setup(props: any, ctx) {
    const router = useRouter();
    function handleBeginGame() {
      console.log('开始游戏');
    }
    const startGame = (e: any) => {
      console.log('startGame', e);
      router.push('/drawing/game.html');
    };
    return {
      handleBeginGame,
      startGame
    };
  }
});
</script>

<style lang="scss" scoped>
@import '~@styles/views/Index/index.scss';
</style>
