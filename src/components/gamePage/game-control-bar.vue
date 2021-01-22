<template>
  <div class="control-bar">
<!--    画笔颜色-->
    <div class="pen-color bar-item">
      <div class="bar-title">颜色</div>
      <div class="color-bar">
        <span  class="color-item" v-for="(item,index) in colors" :key="index" :style="{background: item}"></span>
      </div>
    </div>
<!--    画笔大小-->
    <div class="pen-size  bar-item">
      <div class="bar-title">大小</div>
      <div class="size-bar">
       <div class="size-item" v-for="(pen, index) in brushs" :key="index" @click="setPenConfig" :class="[pen.className,{ active: penConfig.lineWidth === pen.lineWidth },]">{{pen.title}}</div>
      </div>
    </div>
<!--    操作-->
    <div class="pen-operation  bar-item">
      <div class="bar-title">操作</div>
      <div class="operation-bar">
        <div class="operation-item" v-for="(control, index) in controls" :key="index">
          <img :src="control.icon" alt="">
        </div>
      </div>
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
        preDrawAry:[],
        nextDrawAry: []
      }
    },
    computed:{
      controls () {
        return [
          {
            title: "上一步",
            action: "prev",
            icon: require("@images/game-control/icon_prev.png"),
            className:
              this.preDrawAry.length > 0 ? "active fa fa-reply" : "fa fa-reply",
          },
          {
            title: "下一步",
            action: "next",
            icon: require("@images/game-control/icon_next.png"),
            className:
              this.nextDrawAry.length > 0 ? "active fa fa-share" : "fa fa-share",
          },
          {
            title: "清除",
            action: "clear",
            icon: require("@images/game-control/icon_clear.png"),
            className:
              this.preDrawAry.length > 0 || this.nextDrawAry.length > 0
                ? "active fa fa-trash"
                : "fa fa-trash",
          },
        ];
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@styles/components/gamePage/game-control-bar.scss';
</style>