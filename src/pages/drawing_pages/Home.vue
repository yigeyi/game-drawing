<template>
  <div class="game-index">
    <div @click="handleBeginGame">开始游戏</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  // import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

  export default defineComponent({
    name: 'Home',
    setup() {
      let count = ref(0);
      function increment() {
        console.log('1111', this);
      }
      function handleBeginGame() {
        console.log('111');
      }
      onMounted(() => console.log('component mounted!'));
      return {
        count,
        increment,
        handleBeginGame
      };
    }
  });
</script>

<style scoped></style>