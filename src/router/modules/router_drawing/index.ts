// import drawing from '@pages/layout/active_drawing.vue'
let files = require.context('.', false, /\.ts/);
const routersConfig = {
  name: 'drawing',
  path: '/drawing/',
  component: () => import('@views/layout/active_drawing.vue'),
  children: []
};

files.keys().forEach(key => {
  if (key == './index.ts') return;
  console.log('key', key);
  routersConfig.children.push(files(key).default);
});
export default routersConfig;
