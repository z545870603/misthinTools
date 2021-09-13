
import { createApp } from 'vue';
import '~/assets/style/common.less';
import App from './App.vue';
import router from './router';
import store from './store';
import addAntd from '~/plugins/antd';
// import DisableDrag from '~/mixins/DisableDrag';
// import { contextmenu } from './utils/menu';
// contextmenu();

const app = createApp(App);
addAntd(app);
// app.mixin([DisableDrag]);
app.use(store).use(router).mount('#app');
export default app;
