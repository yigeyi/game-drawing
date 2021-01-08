<template>
  <transition name="router-fade" mode="out-in">
    <router-view />
  </transition>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router';
//import routerInstance from '@/router';
export default defineComponent({
  name: 'active_drawing',
  data() {
    return {
      transitionName: ''
    };
  },
  watch: {
    $route(to, from) {
      console.log('to', to);
      if (to.meta.index > from.meta.index) this.transitionName = 'slide-left';
      if (to.meta.index < from.meta.index) this.transitionName = 'slide-right';
    }
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    //console.log('useRoute', routerInstance);
    //watch(
    //  () => route.query,
    //  query => {
    //    console.log('query', query);
    //  }
    //);
    onBeforeRouteUpdate((to, from) => {
      //获取路由变化
      //console.log(to, from);
    });
    return {
      //transitionName
    };
  }
});
</script>

<style lang="scss">
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 1s;
}

.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
