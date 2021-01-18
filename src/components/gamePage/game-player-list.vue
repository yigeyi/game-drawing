<template>
  <div class="game-player-list">
    <div class="game-player-item" v-for="item in playerList">
      <img src="../../assets/images/game-control/touxiang.jpeg" alt="" class="header-img">
    </div>
  </div>
</template>

<script>
  import {defineComponent} from 'vue'
export default defineComponent({
  name: 'gamePlayer',
  props: {
    playerList: {
      type: Object,
      default: ()=>({})
    }
  },
  setup(props){
  
  },
  data(){
    return{
      arr: 6
    }
  }
});
</script>

<style lang="scss" scoped>
  @import '~@styles/components/gamePage/game-player-list.scss';
</style>
