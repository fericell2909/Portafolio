import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "@/style/main.scss";
import "ant-design-vue/dist/antd.css";
import Page from "@/components/Page";
import { Timeline, Icon } from "ant-design-vue";
Vue.config.productionTip = false;

Vue.use(Timeline);
Vue.use(Icon);
Vue.component("x-page", Page);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
