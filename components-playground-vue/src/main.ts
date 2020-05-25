import Vue from "vue";
import App from "./App.vue";
import { defineCustomElements } from 'components/loader';
import modelCustomElement from './model-custom-element';


Vue.config.productionTip = false;
Vue.config.ignoredElements = [/test-\w*/];

Vue.directive('model-custom-element', modelCustomElement);

defineCustomElements(window);

new Vue({
  render: h => h(App)
}).$mount("#app");
