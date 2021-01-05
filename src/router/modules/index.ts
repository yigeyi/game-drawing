import { RouteRecordRaw } from 'vue-router';
import drawingRouters from './router_drawing';
let files = require.context('.', false, /\.ts/);

const routes: Array<RouteRecordRaw> = [];
routes.push(drawingRouters);
files.keys().forEach(key => {
  if (key == './index.ts') return;
  console.log('key', key);
  routes.push(files(key).default);
});
console.log('routes', routes);

export default routes;
