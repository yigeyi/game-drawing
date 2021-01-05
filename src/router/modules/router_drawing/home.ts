export default {
  path: '/game/drawing/index.html',
  name: 'index',
  component: () => import('@pages/drawing_pages/Home.vue'),
  meta: {
    title: 'Home',
    wxAuth: true
  }
};
