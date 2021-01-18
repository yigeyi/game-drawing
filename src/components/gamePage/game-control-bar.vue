<template>
  <div class="control-bar">
    <div class="pen-color bar-item">
      <div class="bar-title">颜色</div>
      <div class="color-bar">
        <span  class="color-item" v-for="(item,index) in colors" :key="index" :style="{background: item}"></span>
      </div>
    </div>
    <div class="pen-size  bar-item">
      <div class="bar-title">大小</div>
      <div class="size-bar">
       <div class="size-item" v-for="(item, index) in brushs" :key="index">1</div> 
      </div>
    </div>
    <div class="pen-operation  bar-item">
      <div class="bar-title">操作</div>
      <div class="operation-item">2</div>
    </div>
  </div>
</template>

<script>
import  {defineComponent} from 'vue'
  export default {
    name: "gameControlBar",
    data(){
      return{
        //画笔配置
        penConfig: {
          penColor: '',
          lineWidth: 3
        },
        //画笔颜色，将从后端传回来
        colors: [
          "#fef4ac",
          "#0018ba",
          "#ffc200",
          "#f32f15",
          "#cccccc",
          "#5ab639",
        ],
        //画笔大小
        brushs: [
          {
            title: "细",
            className: "small fa fa-paint-brush",
            lineWidth: 3,
          },
          { title: "中", className: "middle fa fa-paint-brush", lineWidth: 6 },
          { title: "粗", className: "big fa fa-paint-brush", lineWidth: 12 },
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@styles/components/gamePage/game-control-bar.scss';
</style>