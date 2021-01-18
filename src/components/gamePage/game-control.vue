<template>
  <div class="game-control">
    <game-player-list :playerList="playerList"></game-player-list>
  </div>
</template>

<script>
import gamePlayerList from './game-player-list.vue';
export default {
  name: 'control',
  components: {
    gamePlayerList
  },
  data(){
    return{
      playerList: [
        {
          'nickName': '一个奕'
        }
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
@import '~@styles/components/gamePage/game-control.scss';
</style>
