export default {
  path: '/drawing/index.html',
  name: 'index',
  component: () => import('@views/drawing_pages/Index/index.vue'),
  meta: {
    title: 'Home',
    wxAuth: true,
    index: 1
  }
};
