import {ref, onMounted, onUnmounted, Ref} from 'vue'
// import Config from "@/hooks/gamePage/config";
// const ConfigData = Config()
// let canvas = ref<null | HTMLElement>(null);
export default  function useHandleCanvas(elementRef: Ref<null | HTMLElement>){
    console.log('elementRef', elementRef)
    const context = elementRef.value
    /**
     * 手按下
     * @param e
     */
    function touchDown(e){
        console.log('touchDown', e);
        const canvasX:number = e.touches[0].pageX, canvasY:number = e.touches[0].page;
        console.log('x', canvasX,'y',canvasY)
    }

    /**
     * 提笔
     * @param e
     */
    function touchUp(e){
        console.log('touchUp');
    }

    /**
     * 画画过程
     * @param e
     */
    function touchmove(e){
        console.log('touchmove');
    }

    /**
     * 设置画笔参数
     */
    function setPenStyle(){
        // context.lineWidth = 1
    }
    return {
        touchDown,
        touchUp,
        touchmove
    }
}
