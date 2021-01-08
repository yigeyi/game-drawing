<template>
  <div class="game-index">
    <div @click="handleBeginGame">开始游戏</div>
    <div>{{state.countM}}</div>
    <div>{{count}}</div>
    <div>{{name}}</div>
    <div>{{pic}}</div>
    <div class="test">ssss</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted, reactive, isRef, toRefs } from 'vue';
  export default defineComponent({
    name: 'Home',
    setup() {
      let count = ref(222);
      let state = reactive({ countM: 12 })
      function increment() {
        console.log('1111', this);
      }
      function handleBeginGame() {
        console.log('111');
      }
      onMounted(() => console.log('component mounted!'));
      const pic = reactive({ count })
      console.log('count', count.value, pic.count);
      console.log(isRef(pic));
      console.log('toRefs', toRefs(pic))
      return {
        count,
        increment,
        handleBeginGame,
        state,
        name: ref('ygeyi'),
        pic
      };
    }
  });
</script>