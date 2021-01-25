import {ref, onMounted, onUnmounted, Ref} from 'vue'
const drawCanvas = ref<null | HTMLCanvasElement>(null)
export default function Config() {
    return {
        drawCanvas
    }
}
